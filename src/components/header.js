import React from 'react'



const Header = ({currentPage, changePageHandler}) => {
    return(
        <ul className='nav nav-tabs'>
            
            <li className="nav-item">
                <a
                href="#about"
                  onClick={() => changePageHandler('About')}
                //   className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>

            <li className="nav-item">
                <a
                href="#portfolio"
                  onClick={() => changePageHandler('Portfolio')}
                //   className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>

            <li className="nav-item">
                <a
                href="#contact"
                  onClick={() => changePageHandler('Contact')}
                //   className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
        </ul>
    )
}

export default Header