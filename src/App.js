import React from 'react';
import First from "./additional/First";
import LoginControl from "./additional/LoginControl";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import List from './additional/List';


function App() {
  return (
    <div>

<Router>
<Nav></Nav>
  <Switch>
    <Route path="/second" component={First}/>
    <Route path="/first" component={List}/>
  </Switch >
</Router>
    </div>
   
  );
}

export default App;

class Nav extends React.Component{
  render(){
      return <div className="div">
             <Link to="/second" className="navi">FIRST</Link>  
            <Link to="/first" className="navi">SECOND</Link>  
             </div>;
             
  }
}