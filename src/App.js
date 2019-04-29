import React from 'react';
import './App.css';
import LoginComponent from "./components/LoginComponent"
import HeaderComponent from "./components/HeaderComponent"



import WelcomeComponent from "./components/WelcomeComponent"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ErrorComponent from "./components/ErrorComponent.jsx"
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
          <Router>
            <Switch>
                <Route path="/" exact component={LoginComponent}></Route>
                <Route path="/welcome" component={WelcomeComponent} ></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <Route path="" component={ErrorComponent}></Route>
           </Switch>
          </Router>
      
      {/*<WelcomeComponent/>*/}
      </div>
  );
}

export default App;
