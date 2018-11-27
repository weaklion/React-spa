import React , { Component } from 'react';
import {AuthWrapper } from '../components/Auth';
import Header from '../components/common/Header';
import {Route } from 'react-router-dom';
import { Login, Register } from '../containers/Auth';
import styled from 'styled-components';

const Background =styled.div`
background-color:black;
width:100vw;
height:100vh;
position:relative;
z-index:1;
`;


class Auth extends Component {
    render() {
        return ( 
            <Background>
            <Header/>
            <AuthWrapper>
                <Route path="/auth/login/Local" component ={Login}/>
                <Route path="/auth/register/Local" component={Register}/>
          </AuthWrapper>
            </Background>
        );
    }
}
export default Auth;