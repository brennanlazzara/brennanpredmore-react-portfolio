import React from 'react'
import {Link} from 'react-router-dom' 
import './header.css'

function index() {
    return (
        <div>
             <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <label id="header"><b>Brennan Predmoré</b></label>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="links">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item">
              <div >
              <Link to='/' class="nav-link" id="about"> Home </Link>
              </div>
            </li>

            <li class="nav-item">
            <div >
              <Link to='/portfolio' class="nav-link" id="about"> Portfolio </Link>
              </div>
            </li>

            <li class="nav-item">
            <div >
              <Link to='/contact' class="nav-link" id="about"> Contact </Link>
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
