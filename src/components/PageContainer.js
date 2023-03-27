import React, {useState} from 'react';

// import header and footer
import Header from "./Header";
import Footer from "./Footer";

// import pages
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


const PageContainer = () => {
    // WHEN I load the portfolio the first time the About Me title and section are selected by default
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const handlePageChange = (page) => setCurrentPage(page);

    // this is where we build the current page.
    const renderPage = () => {
        switch(currentPage) {
            case "Contact": return <Contact/>;
            case "Portfolio": return <Portfolio/>;
            case "Resume": return <Resume/>;
            default: return <AboutMe/>;
        };
    };
    
  return ( 
  <div> 
    {
     /* WHEN I load the portfolio I see a page with a header, section for content, and a footer
        WHEN I click on a navigation title I see the corresponding section below the navigation without the page reloading and that title is highlighted*/
    }
    <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}
    <Footer/>
  </div>
  );
};

export default PageContainer;