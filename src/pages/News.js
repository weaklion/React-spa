import React from 'react';
import Header from '../components/common/Header';
import Newscontent from '../components/Newscontent';
import styled from 'styled-components';

const Div = styled.div`
min-height:100%;
width:100%;
background:black;

`;



const News = () =>{
    return (
        <Div>
            <Header/>
            <Newscontent/>
        </Div>
    );
}
export default News;