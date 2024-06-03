import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import MyProjects from "./MyProjects";
import WelcomingSection from "./welcomingSection";
import Skills from "./Skills";

function Main() {
    return (
        <React.Fragment>
            <WelcomingSection />
            <AboutMe />
            <Skills />
            <MyProjects />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}

export default Main;
