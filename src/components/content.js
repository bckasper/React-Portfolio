import React, {useState} from 'react'
import Header from './header'
import About from './pages/about'


const Content = () => {
    
    const [currentPage, setPage] = useState('About')
    
    const renderPage = () => {
        if(currentPage = 'About'){
            return <About />
        }
    }
   
    const pageChangeHandler = (page) => setPage(page)
    
    return(
        <div>
            <Header currentPage={currentPage} pageChangeHandler={pageChangeHandler}/>
        </div>
    )
}

export default Content