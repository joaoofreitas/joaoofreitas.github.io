import React from 'react';
import Header from './components/Header'
import About from './components/About'
import CustomDivider from './components/CustomDivider'
import Skills from './components/Skills'
import SkillsImages from './components/SkillsImages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


class App extends React.Component {
  state = {
    darkMode:false,
  }

  darkMode = () => {
    this.setState({darkMode: !this.state.darkMode})
    if(this.state.darkMode){
      document.body.classList.add('darkMode');
    }else{
      document.body.classList.remove('darkMode');
    }
  }
 
  render(){ 


    return(
    <div>
      <Header click={this.darkMode}/>
      <CustomDivider/>
      <About />
      <CustomDivider/>
      <Skills/>
      <SkillsImages/>
      <CustomDivider/>
    </div>
    )
  }
}

export default App;