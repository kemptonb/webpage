import React from "react";
import { Header, About, Work, Skills, Testimonials, Contact, Footer } from "./container"
import "./App.scss"
import { Navbar } from './components'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />  
      <Work /> 
      <Skills /> 
      <Testimonials /> 
      <Contact /> 
      <Footer />
    </div>
    );
};

export default App;
