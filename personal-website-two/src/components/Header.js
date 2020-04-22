import React from 'react'
import profilePic from '../images/profilePic.jpeg'
import Tags from './Tags'


class Header extends React.Component {
    render(){ 
    return(
        <div className='Header'>
            <img src={profilePic} alt=""/>
            <h2 onClick={this.props.click}>João Freitas</h2>
            <Tags/>
        </div>
    )
    }
};

export default Header;