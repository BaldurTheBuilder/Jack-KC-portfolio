import React from 'react';
import Navigation from "./Navigation";

const Header = ({currentPage, handlePageChange}) => {
    return ( 
    <div>
        {/*WHEN I view the header I see the developer's name and navigation with titles corresponding to different sections of the portfolio */}
        <h1>Jack Kok-Carlson</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
    );
  };
  
  export default Header;

//     A single Header component that appears on multiple pages
