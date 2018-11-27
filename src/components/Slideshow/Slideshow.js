import React, { Component} from 'react';
import { Fade } from 'react-slideshow-image';
import  './Slideshow.scss';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';


const slideImages = [
 image1,
 image2,
];
const fadeproperties = {
  duration: 8000,
  transitionDuration: 500,
  infinite : true,
  arrows:false,
}
const imgStyle = {
  height: '100%',
  width : '100%',
 
}

class Slideshow extends Component{
  preventDragHandler = (e) => {
    e.preventDefault();
  }
render(){
 
  return(
  <div onDragStart={this.preventDragHandler} className="Maincontent" >
 <Fade {...fadeproperties}>
 
 <div className="each-fade">
 <div className="image-container" >
 <img src={slideImages[0]} style={imgStyle} alt={"image1"} />
 </div>
 
 </div>
 <div className="each-fade">
 <div className="image-container">
 <img src={slideImages[1]} style={imgStyle} alt={"image2"}  />
 </div>
 </div>
 </Fade>

 </div>
  )
}
}

export default Slideshow;