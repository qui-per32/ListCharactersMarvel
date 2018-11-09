import React, { Component } from 'react';
import './App.scss';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import MainSection from '../MainSection/MainSection.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MainSection />
        <Footer />
      </div>
    )
  };
}

export default App;

