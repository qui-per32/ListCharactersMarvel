import React, { Component } from 'react';
import './App.scss';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import MainSection from './MainSection.jsx';



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <MainSection />
        <Footer />
    </div>
    
    );
  }

} 

export default App;

