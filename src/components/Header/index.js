import React from 'react'
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
              <div id="about"><a class="nav-link" href="index.html">About<span class="sr-only">(current)</span></a>
              </div>
            </li>

            <li class="nav-item">
              <div id="portfolio"><a class="nav-link" href="portfolio.html">Portfolio</a></div>
            </li>

            <li class="nav-item">
              <div id="contact"><a class="nav-link" href="contact.html">Contact</a></div>
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
