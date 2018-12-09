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

              <div className="headline display-4">
                <Typing words={typing}/>
              </div>

              <div className="position mb-5 text-capitalize">
                full stack developer
              </div>

              <div className="skills">
                <i className="fab fa-html5"> | </i>
                <i className="fab fa-drupal"> | </i>
                <i className="fab fa-npm"> | </i>
                <i className="fab fa-node"> | </i>
                <i className="fab fa-react"> | </i>
                <i className="fab fa-linux"> | </i>
                <i className="fab fa-css3-alt"> | </i>
                <i className="fab fa-php"> | </i>
                <i className="fas fa-code-branch"></i>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;