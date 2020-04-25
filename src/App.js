import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import Portfolio from './components/Pages/Portfolio'
import Video from './components/Video';
import Header from './components/Header';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Video />
    <Header />
     <div className="container">
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/portfolio' component={Portfolio}/>
      </div>
    <Footer />
    </div>
    
    </Router>
  );
}

export default App;
