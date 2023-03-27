import React from 'react';
import Navigation from "./Navigation";
import '../styles/Header.css';

const Header = ({currentPage, handlePageChange}) => {
    return (
    <header className="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12 ">
                    {/*WHEN I view the header I see the developer's name and navigation with titles corresponding to different sections of the portfolio */}
                    <h3>Jack Kok-Carlson</h3>
                </div>

                <div class="col-lg-6 col-sm-12">
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
        </div>
    </header>
    );
  };
  
  export default Header;

//     A single Header component that appears on multiple pages
