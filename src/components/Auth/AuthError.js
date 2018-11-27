import React from 'react';
import styled from 'styled-components';
import { transitions } from '../../lib/styleUtils';

const Wrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    color:red;
    font-weight: 500;
 
    animation: ${transitions.shake} 0.3s ease-in;
    animation-fill-mode: forwards;
`;

const AuthError = ({children}) => (
    <Wrapper>
    {children}
        </Wrapper>
);

export default AuthError;