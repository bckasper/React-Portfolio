import React, {useState} from 'react'
import Header from './header'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Footer from './footer'


const Content = () => {
    
    const [currentPage, setPage] = useState('About');
    const pageChangeHandler = (page) => setPage(page);
    
    const renderPage = () => {
        if(currentPage === 'About'){
            return <About />;
        } 
        if(currentPage === 'Portfolio'){
            return <Portfolio />;
        }
            return <Contact />;
    };
   
    
    
    return(
        <div>
            <Header currentPage={currentPage} pageChangeHandler={pageChangeHandler}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}

export default Content