import React from "react"
import Header from "./components/Header"
import WhoAmI from './components/WhoAmI'
import Copyright from './components/Copyright'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const App = () => {
    return(
        <div>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#DDD' }} />
                <ParallaxLayer offset={0} speed={4.5} style={{ backgroundColor: '#111' }} />
                <ParallaxLayer offset={0} speed={1.90}>
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#DDD' }} />
                <ParallaxLayer factor={1} offset={0.99} speed={2.5}>
                    <WhoAmI />
                </ParallaxLayer>
                <Copyright />
            </Parallax>


        </div>
    );
}

export default App;