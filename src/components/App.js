import React, { Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import { Auth,News,Discography,MainPage,NotFoundPage  } from '../pages';
import axios from 'axios';

class App extends Component{
 
    getPost = async () => {
        try {
          const response = await axios.get('/posts/1');
          this.setState({
            data: response.data
          });
        } catch (e) {
          console.log(e);
        }
      };


    render(){
    return ( 
    <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route  path="/News" component={News}/>
            <Route  path="/Discography" component={Discography}/>
            <Route path="/auth" component={Auth}/>
            <Route component={NotFoundPage}/>
        </Switch>   
      
        );
    }
};

export default App;