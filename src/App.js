import React from 'react';
import {Route, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Detail from './Detail';
import Navbar from './Navbar';


const App= () => {
  return (

<>
    <div><Navbar/></div>
    <div className="main">
  
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Detail/:name' component={Detail} />
      
        </Switch>


    </div>

</>
  );
}

export default App;
