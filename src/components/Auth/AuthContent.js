import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
 font-size:2rem;
 font-weight:600;
letter-spacing:1px;
 color:white;
 margin-bottom:1rem;
 -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;
    text-align:center;
margin-right:5rem;
`;

const AuthContent = ({title,children}) => (
    <div>
    <Title>{title}</Title>
    {children}
        </div>
);

export default AuthContent;