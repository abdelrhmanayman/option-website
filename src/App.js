import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Home'
import Privacy from './PrivacyPolicy'
import Contact from './ContactUs'
import Survey from './Survey'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/privacy/" component={Privacy} />
        <Route path="/contact-us/" component={Contact} />
        <Route path="/survey/" component={Survey} />
      </Router>
    )
  }
}


export default App;
