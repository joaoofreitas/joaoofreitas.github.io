import React from "react"
import Header from "./components/Header"
import WhoAmI from './components/WhoAmI'
import Skills from './components/Skills'
import Copyright from './components/Copyright'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const App = () => {
    return(
        <div>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#DDD' }} />
                <ParallaxLayer factor={1} offset={0} speed={4.5} style={{ backgroundColor: '#111' }} />
                <ParallaxLayer offset={0} speed={3}>
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer factor={1} offset={1} speed={0} style={{ backgroundColor: '#DDD' }} />
                <ParallaxLayer offset={0.89} speed={4.5}>
                    <WhoAmI />
                </ParallaxLayer>
                <ParallaxLayer offset={0.92} speed={3}>
                    <Skills />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}>
                    <Copyright />
                </ParallaxLayer>    
            </Parallax>
        </div>
    );
}

export default App;