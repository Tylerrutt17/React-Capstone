import React, { useEffect, useState } from 'react'
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './js/Nav'
import Header from './js/Header'
import Automation from './js/Automation'
import Dashboard from './js/Dashboard';

function App() {
// class App extends React.Component { 

  // Prepare state hook for welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('')

  // Create async function for fetching welcome message
  const fetchMessage = async () => {
    // Use Fetch API to fetch '/api' endpoint
    const message = await fetch('/api')
      .then(res => res.text()) // process incoming data
    // Update welcomeMessage state
    setWelcomeMessage(message)
  }
  // Use useEffect to call fetchMessage() on initial render and only then
  useEffect(() => {
    fetchMessage()
  }, [])

  return (
      <div className="App">
        <Router>
        {/* {Header} */}
          <Switch>
          <Route path="/login">
            {/* Display welcome message */}
            {/* <p>{welcomeMessage}</p> */}
            {/* <Login /> */}
          </Route>
          <Route path="/dashboard">
            <Header />
            <Nav active = 'dashboard'/>
            <Dashboard name="rashad"/>
          </Route>
          <Route path="/automation">
            <Header />
            <Nav active = 'automation'/>
            <Automation />
          </Route>
          <Route path="/social">
            <Header />
            <Nav active = 'social'/>
          </Route>
          {/* default route needs to go at bottom of switch */}
          <Route path="/"> 
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
    );
}

export default App;
