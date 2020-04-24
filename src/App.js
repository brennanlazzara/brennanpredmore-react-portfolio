import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Video from './components/Video';
import Header from './components/Header';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Video /> */}
    <Header />
    <div className="container">
      <About-Me />
    </div>
    <Footer />
    </div>
    {/* <Route exact path='/' component{Home}/> */}
    </Router>
  );
}

export default App;
