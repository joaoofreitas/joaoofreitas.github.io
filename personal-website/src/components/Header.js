import React from "react"
import "../style.css"
import photo from '../images/profile.jpg'
import headerTags from './headerTags'

const App = () => {
    return(
        <section className="header">
            <img src={photo} class="profilePic" />
            <h1>João Freitas</h1>
            <headerTags />
        </section>

    );
}

export default App;