import React from "react";
import Common from "./Common";
import webImg from "./Images/boss.jpg";

function About() {
    return (
        <>
            <Common
                heading="Welcome to About Page"
                imgsrc={webImg}
                visit="/Contact"
                btnName="Contact Now"
            />
        </>
    )
}

export default About;