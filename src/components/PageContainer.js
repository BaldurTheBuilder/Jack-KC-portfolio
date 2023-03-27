import React, {useState} from 'react';

// import header and footer
import Header from "./Header";
import Footer from "./Footer";

// import pages
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


const PageContainer = ({}) => {

    // this is where we build the current page.
    const renderPage = () => {
        
    }


    
  return ( 
  <div> 
    <Header/>

    <Footer/>
  </div>
  );
};

export default PageContainer;