// importing React component to extend new components
import React, { Component } from 'react';
// import logo from './logo.svg';

// importing css
import './style.css';

//importing components
import Header from './partials/Header';
import Footer from './partials/Footer';

import AboutMe from './components/AboutMe';
import Tech from './components/Tech';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
     <div>
      <Header />
      <AboutMe />
      <Tech />
      <Projects />
      <Footer />
     </div>
    );
  }
}

export default App;
