import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// WHEN I am presented with the ______About Me_____ section I see a recent photo or avatar of the developer and a short bio about them
// WHEN I am presented with the _____Portfolio_____ section I see titled images of six of the developer’s applications 
//      with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the _____Contact______ section I see a contact form with fields for a name, an email address, and a message
//      WHEN I move my cursor out of one of the form fields without entering text I receive a notification that this field is required
//      WHEN I enter text into the email address field I receive a notification if I have entered an invalid email address
// WHEN I am presented with the ____Resume_____ section I see a link to a downloadable resume and a list of the developer’s proficiencies

// User clicks through About Me, Portfolio, Resume, and Contact sections of the webpage and enters information on Contact page.
// The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API,
// you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few weeks.
// In the meantime, consider adding your email address and phone number on the Contact page.

// Design
//     Use mobile-first design.
//     Uses reasonable font sizes/styles and colors to prevent eye strain.
//     Consider using animations and React component libraries.
//     Application deployed at live URL on GitHub Pages
//     Application uses a color scheme other than the default Bootstrap color palette.