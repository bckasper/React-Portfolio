import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Content from './components/content'



function App() {
  return (
    <div className="App">
      
      {/* Header with navigation */}
      <Header />
      
      {/* Content that will hold the bio, potfolio, contact form and resume */}
      <Content />

      {/* Persistent footer with Github, LinkedIn, and third portfolio option */}
      <Footer />
    </div>
  );
}

export default App;
