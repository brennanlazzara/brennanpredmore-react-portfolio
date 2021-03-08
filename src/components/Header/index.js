import React from 'react';
import {Link} from 'react-router-dom'; 
import './style.css';

function index() {
    return (
        <div>
             <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <label id="header"><b>Brennan Predmoré</b></label>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="links">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <div >
              <Link to='/' className="nav-link" id="about"> Home </Link>
              </div>
            </li>

            <li className="nav-item">
            <div >
              <Link to='/portfolio' className="nav-link" id="about"> Portfolio </Link>
              </div>
            </li>

            <li className="nav-item">
            <div >
              <Link to='/contact' className="nav-link" id="contact"> Contact </Link>
              </div>
            </li>
            
            <li className="nav-item">
            <div >
            <Link to="../assets/BrennanPredmoreResume2021.pdf" className="nav-link" id="resume" target="_blank" download>Resume</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
        </div>
        
    )
}

export default index
