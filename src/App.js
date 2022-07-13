import React from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App (){
  return(
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Services" element={<Services />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
};

export default App;