import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Nav}  from "./components/index.js";
import { LandingPage, About } from "./routes/index.js";
import "./core-ui/Styles.sass";
import './routes/About/About.sass'
import './core-ui/Hover.sass'
import './routes/LandingPage/LandingPage.sass'
import './components/Footer.sass'
import './components/Navigation/Nav.sass'

const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;