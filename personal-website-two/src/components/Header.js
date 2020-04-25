import React from 'react'
import profilePic from '../images/profilePic.jpeg'
import Tags from './Tags'


const Header = () => {
    return(
        <div className='Header'>
            <img src={profilePic} alt=""/>
            <h2>João Freitas</h2>
            <Tags/>
        </div>
    );
}

export default Header;