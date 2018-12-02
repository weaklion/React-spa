import React,{Component} from 'react';
import Header from '../components/common/Header';
import  './Discography.css';
import Disco from '../components/Disco';



class Discography extends Component {
    render(){
    return(
      
   <div className="Background">
        <Header/>
        <Disco/>
    </div>
   
    )
};
}
export default Discography;