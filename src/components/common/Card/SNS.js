import React from 'react';
import styled from 'styled-components';
import facebook from '../../../icon/facebook.svg';
import instagram from '../../../icon/instagram.svg';
import twitter from '../../../icon/twitter.svg';
import youtube from '../../../icon/youtube.svg';

const Icon=styled.img`
display:inline-block;
width:24px;
height:24px;
margin-left:2px;
margin-top:14px;
&:hover{
    opacity:0.8;
}
`;
const DIV=styled.div`
 display:flex;
 height:30px;
 widdth:100px;
`;

const SNS = () => (
    <DIV>
<a href="https://www.facebook.com/SiaMusic/"><Icon src={facebook} alt="fackbeook"/></a>
<a href="http://instagram.com/siamusic"><Icon src={instagram} alt="instagram"/></a>
<a href="https://twitter.com/Sia"><Icon src={twitter} alt="twitter"/></a>
<a href="https://www.youtube.com/sia"><Icon src={youtube} alt="youtube"/></a>
</DIV>
);

export default SNS;

