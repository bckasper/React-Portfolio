import React from 'react'
import { SiLinkedin, SiGithub, SiStackoverflow } from 'react-icons/si'


const Footer = () => {
    return(
        <div className='icons bg-dark py-3 container-fluid d-flex justify-content-center text-light'>
            
            <a href='https://www.linkedin.com/in/bckasper' target={"_blank"} className='icons'><SiLinkedin/></a>
            
            <a href='https://www.github.com/bckasper' target={"_blank"} className='icons'><SiGithub/></a>
            
            <a href='https://stackoverflow.com/users/16180108/ben-kasper' target={"_blank"} className='icons'><SiStackoverflow/></a>
             
        </div>
    )
}

export default Footer

