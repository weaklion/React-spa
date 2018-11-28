import React, { Component} from 'react';
import { Switch, Route,HashRouter} from 'react-router-dom';
import { Auth,News,Discography,MainPage,NotFoundPage  } from 'pages';


class App extends Component{
 
    render(){
    return ( 
        <HashRouter>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route  path="/News" component={News}/>
            <Route  path="/Discography" component={Discography}/>
            <Route path="/auth" component={Auth}/>
            <Route component={NotFoundPage}/>
        </Switch>   
        </HashRouter>
        );
    }
};

export default App;