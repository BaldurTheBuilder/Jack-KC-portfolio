import React from 'react';


// WHEN I am presented with the ____Resume_____ section I see a link to a downloadable resume and a list of the developer’s proficiencies

export default function Resume() {
    return (
        <div className="p-3">
            <h3>Resume</h3>
            <p>Please use the following link to access my resume: </p>
            <a href="/JackResume2022.pdf" download>My Resume</a>
        </div>
    );
}