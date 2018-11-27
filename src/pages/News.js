import React from 'react';
import Header from '../components/common/Header';
import Newscontent from '../components/Newscontent';
import styled from 'styled-components';
import NewsMain from '../image/NewsMain.jpg';

const Div = styled.div`
min-height:100%;
width:100%;
background:url(${NewsMain});
background-repeat: no-repeat;
 background-size:cover;
 background-position:center;
 background-attachment:fixed;  
 -moz-background-size: cover;
-o-background-size: cover;
-webkit-background-size: cover;
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