import { Footer } from "../../components/index.js";
import Stack from "./Stack.js";
import DownloadCV from "./DownloadCV.js";
import AboutMe from "./About.js";
import ScrollButton from "../../handler/ScrollUp";
import React from "react";

function About(){
    document.title = "About | Paballo Mathipa";
    return (
        <article className="about-main">
            <AboutMe />
            <Stack />
            <DownloadCV />
            <ScrollButton />
            <Footer />
        </article>
    );
}

export default About;
