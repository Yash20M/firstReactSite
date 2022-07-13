import React from "react";
import webImg from './Images/homeimg1.png'
import Common from "./Common";

function Home() {
    return (
        <>
        <Common 
            heading="Grow Your Business with"
                imgsrc={webImg}
                visit="/Services"
                btnName="Get Started"

        />
        </>
    )
}

export default Home;