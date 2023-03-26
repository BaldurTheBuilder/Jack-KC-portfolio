import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio I see a page with a header, section for content, and a footer
// WHEN I view the header I see the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles I see the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title I see the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time the About Me title and section are selected by default
// WHEN I am presented with the About Me section I see a recent photo or avatar of the developer and a short bio about them
// WHEN I am presented with the Portfolio section I see titled images of six of the developer’s applications 
//      with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the Contact section I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text I receive a notification that this field is required
// WHEN I enter text into the email address field I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section I see a link to a downloadable resume and a list of the developer’s proficiencies
// WHEN I view the footer I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

// Mock-Up
// User clicks through About Me, Portfolio, Resume, and Contact sections of the webpage and enters information on Contact page.
// You’ll use Create React App just as you did with your module project.

// note
// The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API,
// you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few weeks.
// In the meantime, consider adding your email address and phone number on the Contact page.

// Design
//     Use mobile-first design.
//     Uses colors outside the default Bootstrap theme or an unstyled HTML site. Look into resources like Coolors.
//     Uses reasonable font sizes/styles and colors to prevent eye strain.
//     Consider using animations and React component libraries.

//     Must use React.
//     Single Header component that appears on multiple pages
//         header has a Navigation component that conditionally renders About Me, Portfolio, Contact, and Resume sections
//     Single Project component that's used multiple times in the Portfolio section
//     Single Footer component that appears on multiple pages
//     Application deployed at live URL on GitHub Pages
//     Application uses a color scheme other than the default Bootstrap color palette.
