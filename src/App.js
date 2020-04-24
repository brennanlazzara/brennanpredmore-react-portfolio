import React, {Fragment} from 'react';
// import Video from './components/Video';
import Header from './components/Header';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <Fragment className="App">
      {/* <Video /> */}
    <Header />
    <div className="container">
      <About-Me />
    </div>
    <Footer />
    </Fragment>
  );
}

export default App;
