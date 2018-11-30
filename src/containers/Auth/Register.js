import React, { Component } from 'react';
import { AuthContent,RightAlignedLink,AuthError } from '../../components/Auth';
import './Register.scss';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import * as authActions from '../../redux/modules/auth';
import * as userActions from '../../redux/modules/user';
import {isEmail, isLength, isAlphanumeric } from 'validator';
import storage from 'lib/storage';

class Register extends Component {
    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('register')
    }

    setError = (message) => { 
        const {AuthActions } = this.props;
        AuthActions.setError({
            form : 'register',
            message 
        });
    }

    validate = {
        email : (value) => {
            if(!isEmail(value)) {
                this.setError('잘못된 이메일 형식 입니다.');
                return false;
            }
            return true;
        },
        username: (value) => {
            if(!isAlphanumeric(value) || !isLength(value, {min:4, max:15})) {
                this.setError('아이디는 4~15글자의 알파벳 혹은 숫자로 이루어져야 합니다.');
               return false;
            }
              return true;
        },
        password: ( value) => {
            if(!isLength(value, {min:6 })) {
                this.setError('비밀번호는 6자 이상입니다.');
                return false;
            }
            this.setError(null);
            return true;
        },
        passwordConfirm : (value) => {
            if(this.props.form.get('password') !== value) {
                this.setError('비밀번호확인이 일치하지 않습니다.');
                return false;
            }
            this.setError(null);
            return true;
        }
    };



    checkEmailExists = async(email)=>{
        const { AuthActions } = this.props;
        try{
            await AuthActions.checkEmailExists(email);
            if(this.props.exists.get('email')){
                this.setError('이미 존재하는 이메일입니다.');
            } else{
                this.setError(null);
            }
        }catch(e) {
            console.log(e);
        }
    };
    checkUsernameExists = async(username) =>{
        const {AuthActions } = this.props;
        try{
            await AuthActions.checkUsernameExists(username);
            if(this.props.exists.get('username')){
                this.setError('이미 존재하는 아이디입니다.');
            } else{
                this.setError(null);
            }
        }catch(e) {
            console.log(e);
        }
    };



    handleChange = (e) => {
        const {AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'register'
        });
        /*
        const validation = this.validate[name](value);
        if(name.indexOf('password') > -1 || !validation) return ; 
        //비밀번호 검증이거나, 검증 실패시 여기에서 끝 마침.
        
            //이메일, 아이디 중복 확인`
                const check = name === 'email' ? this.checkEmailExists : this.checkUsernameExists; 
                check(value);
*/
    }
handleLocalRegister = async () => {
    const { form, AuthActions,UserActions,error,history } = this.props;
    const { email, username ,password, passwordConfirm} = form.toJS();

    const { validate } =this;
    
    validate['email'](email);
    validate['username'](username);
    validate['password'](password);
    validate['passwordConfirm'](passwordConfirm);

    if(error) return ; //에러가 있을시 리턴함
    if(!validate['email'](email)
    || !validate['username'](username)
    || !validate['password'](password)
    ||!validate['passwordConfirm'](passwordConfirm)){
        //하나라도 실패할시 진행하지 않는다.
                return ;
    }
    


try { 
    await AuthActions.localRegister({
        email, username,password
    });
    const loggedInfo = this.props.result.toJS();
    storage.set('loggedInfo',loggedInfo);
    UserActions.setLoggedInfo(loggedInfo);
    UserActions.setValidated(true);
    //로그인 정보 저장
    history.push('/Auth/login/local'); //회원가입 성공시 홈페이지로 이동 
} catch(e) {
    if(e.response.status === 409 ) {
        const { key } = e.response.data ;
        const message = key ==='email' ? ' 이미 존재하는 이메일입니다 ' : '이미 존재하는 유저네임입니다';
        return this.setError(message);
    }
  
    }
};

    render() {
        const { error } = this.props;
        const { email, username, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange,handleLocalRegister } = this;
        return (
            <AuthContent title="Register">
            <input name="email" placeholder="E-mail" value={email} onChange={handleChange}/>
            <input name="username" placeholder="Username" value={username}  onChange={handleChange}/>
            <input name="password" placeholder="Password" type="password" value={password}  onChange={handleChange}/>
            <input name="passwordConfirm" placeholder="Confirm Password" type="password" value={passwordConfirm}  onChange={handleChange}/> 
            {
                error && <AuthError>{error}</AuthError>
            }
            <button onClick={handleLocalRegister}>Sign up</button>
            <RightAlignedLink to="/auth/login/local">Login?</RightAlignedLink>
         
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form']),
        error : state.auth.getIn(['register','error']),
        exists : state.auth.getIn(['register','exists']),
        result : state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
<<<<<<< HEAD
        UserActions :bindActionCreators(userActions,dispatch)
=======
        UserActions : bindActionCreators(userActions,dispatch)
>>>>>>> 6e9146a8a924719343d0f4451e25c82f7280dbc5
    })
)(Register);