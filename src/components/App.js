import React, { Component} from 'react';
<<<<<<< HEAD
import { Switch, Route} from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> 6e9146a8a924719343d0f4451e25c82f7280dbc5
import { Auth,News,Discography,MainPage,NotFoundPage  } from 'pages';


class App extends Component{
 
    render(){
    return ( 
<<<<<<< HEAD
    <Switch>
=======
        <div>
        <Switch>
>>>>>>> 6e9146a8a924719343d0f4451e25c82f7280dbc5
            <Route exact path="/" component={MainPage}/>
            <Route  path="/News" component={News}/>
            <Route  path="/Discography" component={Discography}/>
            <Route path="/auth" component={Auth}/>
<<<<<<< HEAD
            <Route component={NotFoundPage}/>
        </Switch>   
      
=======
            
        </Switch>   
        </div>
>>>>>>> 6e9146a8a924719343d0f4451e25c82f7280dbc5
        );
    }
};

export default App;