import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Auth,News,Discography,MainPage,NotFoundPage  } from 'pages';


class App extends Component{
 
    render(){
    return ( 
        <div>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route  path="/News" component={News}/>
            <Route  path="/Discography" component={Discography}/>
            <Route path="/auth" component={Auth}/>
            
        </Switch>   
        </div>
        );
    }
};

export default App;