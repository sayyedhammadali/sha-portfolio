import React, { Component } from 'react';
import './App.scss';

import Navbar from "./components/navbar/Navbar";
import Landing from './components/landing/Landing';
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Landing/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

export default App;
