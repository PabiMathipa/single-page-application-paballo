import AboutMe from "../About/About.js";
import Stack from "../About/Stack.js";
import React from "react";

function AboutView() {
    return (
        <article className="about">
            <AboutMe />
            <Stack />
        </article>
    )
}

export default AboutView;