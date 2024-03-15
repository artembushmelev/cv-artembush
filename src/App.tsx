import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contact } from './layout/sections/contacts/Contact';
import { Footer } from './layout/footer/Footer';
import { SectionFooter } from './layout/sections/sectionfooter/SectionFooter';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/> 
      <Skills/>  
      <Projects/>
      <Contact/>
      <SectionFooter/>
      <Footer/>
    </div>
  );
}



export default App;
