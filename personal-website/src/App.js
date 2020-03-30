import React from "react"
import Header from "./components/Header"
import WhoAmI from './components/WhoAmI'
import Copyright from './components/Copyright'

const App = () => {
    return(
    <div>
        <Header />
        <WhoAmI />

        <Copyright />
    </div>
    );
}

export default App;