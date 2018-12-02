import React,{Component} from 'react';
import Header from '../components/common/Header';
import Disco from '../components/Disco';
import styled from 'styled-components';


const Background=styled.div`
    min-height:100%;
    width:100%;
    background:url('../image/4.jpg');
    background-repeat: no-repeat;
     background-size:cover;
     background-position:center;
     background-attachment:fixed;  
     -moz-background-size: cover;
-o-background-size: cover;
-webkit-background-size: cover;
`;




class Discography extends Component {
    render(){
    return(
      
   <Background>
        <Header/>
        <Disco/>
    </Background>
   
    )
};
}
export default Discography;