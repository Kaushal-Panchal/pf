import "./App.css";
import React, { Suspense } from "react";
import Home from "./Components/Home";

// import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import Skills from "./Components/Skills";
// import Work from "./Components/Work";
// import Contact from "./Components/Contact";
import ParticlesBG from "./Components/ParticlesBG";
const About = React.lazy(() => import("./Components/About"));
const Skills = React.lazy(() => import("./Components/Skills"));
const Work = React.lazy(() => import("./Components/Work"));
const Contact = React.lazy(() => import("./Components/Contact"));

function App() {
    return (
        <>
            <ParticlesBG />
            <Navbar />
            <Home />
            <Suspense fallback={null}>
                <About />
                <Skills />
                <Work />
                <Contact />
            </Suspense>
        </>
    );
}

export default App;
