import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from '/Home';

function App() {
  return (
    <div className= "App">
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path = "/about" component = {About} />
            <Route component= {NoMatch} />

          </Switch>
        </Router>
      </React.Fragment>
    
      <header className="App-header">
      <h1>Workout Coach</h1>
      </header>
      <body className="App-body">
      <h3>What type of workout would you like today?</h3>
      </body>
     
      
      
    </div>
  )};

export default App;
