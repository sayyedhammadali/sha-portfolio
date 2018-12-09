import React, { Component } from 'react';
import './App.scss';

import Landing from './components/landing/Landing';
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        {/*<About/>
        <Portfolio/>
        <Footer/>*/}
      </div>
    );
  }
}

export default App;
