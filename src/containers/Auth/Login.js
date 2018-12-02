import React, { Component } from 'react';
import { AuthContent,RightAlignedLink,AuthError} from '../../components/Auth';
import  './Login.scss';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../redux/modules/user';
import * as authActions from '../../redux/modules/auth';
import storage from '../../lib/storage';


class Login extends Component {

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login');
    }
    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form : 'login',
            message
        });
        return false;
    }
    
    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value} =e.target;

        AuthActions.changeInput({
            name,
            value,
            form:'login'
        });
    }
    handleLocalLogin = async () => {
        const { form,AuthActions,UserActions,history } = this.props;
        const { email, password } = form.toJS();

        try {
            await AuthActions.localLogin({email,password});
            const loggedInfo = this.props.result.toJS();
            UserActions.setLoggedInfo(loggedInfo);
            history.push('/'); //메인으로 되돌림
            storage.set('loggedInfo',loggedInfo);
            
        } catch(e) {
            if(e.response.status === 402) {
                    return this.setError('유효하지 않는 이메일입니다.');
            }
            else if(e.response.status ===403){
                return this.setError('유효하지 않은 암호입니다.');
            }
            else{
                return this.setError('알수없는 정보입니다.')
            }
      
        }
    }
    
    render() {
        const { email, password } = this.props.form.toJS(); //form에서 email과 password를 읽어온다.
        const { error } = this.props;
        const { handleChange ,handleLocalLogin}= this;
        return (
            <AuthContent title="Login">
            <input name="email" placeholder="E-mail" value={email} onChange={handleChange}/>
            <input name="password" placeholder="Password" value={password}type="password"
            onChange={handleChange}/>
            {
                error && <AuthError>{error}</AuthError>
            }
            <button onClick={handleLocalLogin}>Login</button>
            <RightAlignedLink to="/auth/register/local">Sign up?</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(

    //props값으로 넣어 줄 상태를 정의해준다.
    (state) => ({
        form : state.auth.getIn(['login','form']), //login 안의 form 값
        error: state.auth.getIn(['login','error']),
        result: state.auth.get('result')
    }),
//props값으로 넣어줄 액션 함수를 정의 해준다.
    (dispatch) => ({
        AuthActions : bindActionCreators(authActions,dispatch),
        UserActions : bindActionCreators(userActions,dispatch)
    })
)(Login);