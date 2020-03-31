import React from "react"
import "../style.css"
import photo from '../images/profile.jpg'
import HeaderTags from './HeaderTags'

const Header = () => {
    return(
        <div className="header">
            <img src={photo} class="profilePic" alt=""/>
            <h1>João Freitas</h1>
            <HeaderTags />
        </div>
    );
}

export default Header;