import React from 'react'
import Resume from '../assets/Resume_Ben Kasper.pdf'

const Header = ({currentPage, pageChangeHandler}) => {
    return(
        <div className='d-flex container-fluid bg-dark align-items-center py-2'>
            <h1 className='text-light px-4 me-5 bg-dark'>Kasper Designs</h1>
            
                <ul className='nav navbar-custom justify-content-end'>
                    
                    <li className="nav-item nav-item-custom">
                        <a
                        href="#About"
                        onClick={() => pageChangeHandler('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                        About
                        </a>
                    </li>

                    <li className="nav-item nav-item-custom">
                        <a
                        href="#Portfolio"
                        onClick={() => pageChangeHandler('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                        Portfolio
                        </a>
                    </li>

                    <li className="nav-item nav-item-custom">
                        <a
                        href="#Contact"
                        onClick={() => pageChangeHandler('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                        Contact
                        </a>
                    </li>

                    <li className="nav-item nav-item-custom">
                        <a
                        href={Resume}
                        target='_blank'
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                        Resume
                        </a>
                    </li>
                </ul>
        </div>
    )
}

export default Header