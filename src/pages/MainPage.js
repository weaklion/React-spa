import React from 'react';
import Header from '../components/common/Header';
import Slideshow from '../components/Slideshow';
import styled from 'styled-components';

const Div=styled.div`
overflow:hidden;
`;


const MainPage = () =>{
   return (
    <Div>
      <Header/>
      <Slideshow/>
    </Div>
    )
}
export default MainPage;