import React from 'react';
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App(props) {
  return (
    <Router 
    >
      <div>
        <main>
        
          <Switch>
          <Route exact path="/" render={props =><div><Home key={"home"} {...props}/></div>}></Route>
          <Route exact path="/main" render={props =><div><Header key={"header"}/><Main key={"main"} {...props}/></div>}></Route>
          <Route exact path="/login" render={props =><Login key={"login"}{...props}/>}></Route>
           <Route exact path="/signup" render={props =><Signup {...props}/>}></Route>
          {/* <Route exact path="/main" render={props =><div><Header {...props} /><AddExpense {...props}/></div>}></Route> */}
          
          </Switch>
        </main>
      </div>
      
    </Router>
  
  );
}

export default App;
