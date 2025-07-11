import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="top-bar container">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;

