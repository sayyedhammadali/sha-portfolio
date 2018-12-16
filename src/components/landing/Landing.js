import React, {Component} from 'react';
import './Landing.scss';

import Typing from '../typing/Typing';

class Landing extends Component {
  render() {
    const typing = ['Looking for a Web Expert?', 'Hello, I\'m Hammad!', 'I can help you to find sustainable solutions.'];

    return (
      <div className="container-fluid" id="landing">
        <div className="row h-100 align-items-center">
          <div className="col-sm-12">
            <div className="intro-block text-center">

              <h1 className="headline pb-2 font-weight-light">
                <Typing words={typing}/>
              </h1>
              <h5 className="position pb-5 text-capitalize font-weight-bolder">
                full stack developer
              </h5>
              <h3 className="skills">
                <i className="fab fa-drupal px-2"></i>
                <i className="fab fa-node px-2"></i>
                <i className="fab fa-react px-2"></i>
                <i className="fab fa-php px-2"></i>
              </h3>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;