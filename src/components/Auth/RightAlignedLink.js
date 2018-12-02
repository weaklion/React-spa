import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aligner = styled.div`
    margin-top : 1rem;
    margin-right:6rem;
    text-align:right;
    
`;

const StyledLink = styled(Link)`
    font-weight:200;
    letter-spacing:1px;
    color:gray;
    &:hover{
        color:white;
    }
    transition: .2s all;
`
const RightAlignedLink = ({to,children}) => (
    <Aligner>
        <StyledLink to={to}>{children}</StyledLink>
        </Aligner>
);
export default RightAlignedLink;