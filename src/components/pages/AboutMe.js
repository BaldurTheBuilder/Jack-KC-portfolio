import React from 'react';
import '../../styles/Page.css';

// WHEN I am presented with the About Me section I see a recent photo or avatar of the developer and a short bio about them
export default function AboutMe() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h4>About Me </h4>
                    <p>
                        Welcome to my portfolio site! My name is Jack Kok-Carlson. I'm a prospective web developer in the process of completing the University of Oregon
                        coding bootcamp. Please browse this page to learn about my current qualifications.
                    </p>
                </div>
                <div className="col-6">
                    <img className="profile float-end" src="profile.jpg" alt="text"/>
                </div>
            </div>
        </div>
    );
}