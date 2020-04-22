import React from 'react'

const Projects = () => {
    return(
        <div className='projects'>
            <h1>Projects.git</h1>
            <br></br>
            <p>All my public projects are on my <a href="https://github.com/joaoofreitas">Github Profile</a>.</p>
            <h6 id="-cross-platorm-internet-controller-https-github-com-joaoofreitas-cross-platform-internet-controller-"><a
                    href="https://github.com/joaoofreitas/cross-platform-internet-controller">cross-platorm-internet-controller</a>
                 🌐</h6>
            <blockquote>
                <p>Just a University Project of a Subject called &quot;Sensor Networking&quot;, where I was supposed to read sensors
                    or manipulate actuators using wireless comunication. </p>
            </blockquote>
            <h6 id="-telegram-server-monitor-https-github-com-joaoofreitas-server-telegram-monitor-"><a
                    href="https://github.com/joaoofreitas/server-telegram-monitor">telegram-server-monitor</a> 💻</h6>
            <blockquote>
                <p>Small project that I use to monitor my small RaspberryPi server, without SSH. On any device...</p>
            </blockquote>
        </div>
    );
}

export default Projects;