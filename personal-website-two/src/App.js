import React from 'react';
import Header from './components/Header'
import About from './components/About'
import CustomDivider from './components/CustomDivider'
import Skills from './components/Skills'
import SkillsImages from './components/SkillsImages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const App = () => {
  return(
    <div>
      <Header/>
      <CustomDivider/>
      <About/>
      <CustomDivider/>
      <Skills/>
      <SkillsImages/>
      <CustomDivider/>
    </div>
    );
}

export default App;