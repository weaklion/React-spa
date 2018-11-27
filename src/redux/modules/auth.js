import { createAction, handleActions } from 'redux-actions';
import { pender} from 'redux-pender';
import * as AuthAPI from 'lib/auth';
import { Map } from 'immutable';

//액션 타입정의
const CHANGE_INPUT = 'auth/CHANGE_INPUT';  //input 값 변경
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';//form값  초기화
const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS'; //이메일 중복확인
const CHECK_USERNAME_EXISTS = 'auth/CHECK_USERNAME_EXISTS';//아이디 중복 확인
const LOCAL_REGISTER = 'auth/LOCAL_REGISTER';// 회원 가입
const LOCAL_LOGIN= 'auth/LOCAL_LOGIN'; //로그인
const LOGOUT='auth/LOGOUT';//로그아웃
const SET_ERROR = 'auth/SET_ERROR'; //오류 설정 
//액션 생성함수 생성
export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS,AuthAPI.checkEmailExists);
export const checkUsernameExists = createAction(CHECK_USERNAME_EXISTS,AuthAPI.checkUsernameExists);
export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);
export const localRegister = createAction(LOCAL_REGISTER,AuthAPI.localRegister);
export const localLogin = createAction(LOCAL_LOGIN,AuthAPI.localLogin); 
export const logout = createAction(LOGOUT,AuthAPI.logout);
export const setError = createAction(SET_ERROR);
const initialState = Map({
    register: Map({
        error:'',
        form: Map({
            email: '',
            username: '',
            password: '',
            passwordConfirm : ''
        }),
        exists: Map({
            email: false,
            password : false,
            username: false
        }),
        
    }),
    login: Map({
        form: Map({
            email: '',
            password: ''
        }),
        error:''
    }),
    result : Map ({})
});

//handleaction의 첫 번째 파라미터는 액션을 처리하는 함수들로 이루어진 객체,
//두번째는 초기상태
export default handleActions({
    [CHANGE_INPUT] : (state,action) => {
        const {form, name, value } = action.payload;
        return state.setIn([form, 'form',name],value);
    },
    [INITIALIZE_FORM] : (state,action) => {
        const initialForm = initialState.get(action.payload);
        return state.set(action.payload, initialForm);
    },
    [SET_ERROR] : (state,action) => {
        const {form,message} = action.payload;
        return state.setIn([form, 'error'],message);
    },
    ...pender({
        type: CHECK_EMAIL_EXISTS,
        onSuccess: (state, action) => state.setIn(['register','exists','email'],action.payload.data.exists)
    }),
    ...pender({
        type:CHECK_USERNAME_EXISTS,
        onSuccess: (state, action) => state.setIn(['register','exists','username'],action.payload.data.exists)
    }),
    ...pender({
        type:LOCAL_LOGIN,
        onSuccess : (state,action) => state.set('result',Map(action.payload.data))
    }),
    ...pender({
        type:LOCAL_REGISTER,
        onSuccess : (state,action) => state.set('result',Map(action.payload.data))
    })
},initialState);