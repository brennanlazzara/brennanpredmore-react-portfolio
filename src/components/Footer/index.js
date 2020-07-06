import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function index() {
  return (
    <div className='footer-dark' style={{ padding: 12, height: 75 }}>
      <footer>
        <div className='container'>
          <div className='row' style={{ height: 64 }}>
            <div
              className='col-sm-6 col-md-3 item'
              style={{ height: 64, minHeight: 4 }}
            >
              <img
                src='assets/pngguru.com.png'
                alt='logo'
                width='128px'
                height='128px'
                style={{ width: 64, height: 64 }}
              />
            </div>
            <div
              className='col item social'
              style={{ height: 0, marginTop: 0 }}
            >
              <a href='https://github.com/BrennanPredmore'>
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a href='https://www.linkedin.com/in/brennan-predmor%C3%A9-132306195/'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div
              className='col-sm-6 col-md-3 item'
              style={{ height: 64, minHeight: 64 }}
            >
              <h3 style={{ marginBottom: 0 }}>Full Stack Services Contact:</h3>
              <ul>
                <li>Email: brennnann@gmail.com</li>
                <li>Phone: 5857045630</li>
              </ul>
            </div>
            <div
              className='col-md-6 item text'
              style={{ maxWidth: 266, height: 64, minHeight: 64 }}
            >
              <h3 style={{ marginBottom: 0 }}>
                Brennan Predmoré Portfolio © 2020
              </h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default index;
