import React from 'react';
import '../../styles/Page.css';

// WHEN I am presented with the ______About Me_____ section I see a recent photo or avatar of the developer and a short bio about them
export default function AboutMe() {
    return (
        <div>
            <h4>About Me </h4>
            <img className="profile" src="profile.jpg" alt="text"/>
        </div>

    );
}