import React from 'react';
import Header from './components/Header'
import DarkToggle from './components/DarkToggle'
import About from './components/About'
import CustomDivider from './components/CustomDivider'
import Skills from './components/Skills'
import SkillsImages from './components/SkillsImages'
import Projects from './components/Projects'
import Copyright from './components/Copyright'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


class App extends React.Component {
  state = {
    darkMode:true,
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
      <DarkToggle click={this.darkMode}/>
      <Header/>
      <CustomDivider/>
      <About />
      <CustomDivider/>
      <Skills/>
      <SkillsImages/>
      <CustomDivider/>
      <Projects/>
      <CustomDivider/>
      <Copyright/>
    </div>
    )
  }
}

export default App;