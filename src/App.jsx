import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, HashRouter, NavLink} from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage.jsx";
import Abaout_me from "./pages/abaout_me.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/contact.jsx";
import languages from "./languages/languages.json"
import Footer from "./components/Footer.jsx";

function App() {
    const [language, setLanguage] = useState("Deutsch")
    let langjson = languages
    const location = "app"

    //Links zu navlinks machen und nachher bei css link-elements.active weil navlink erkennt ob active oder nicht
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} className={"background-color"}>
            <HashRouter>
                <div style={{padding: "20px", fontFamily: "Arial, sans-serif", flex: "1 0 auto", width: "100%"}}>
                    <h1 id={"title"} className={"text-white"}>{langjson[language][location]["1"]}</h1>
                    <div id={"dropdownlang"} >
                        <select className={"color-divs background-color font-color rounded-3"} onChange={event => setLanguage(event.target.value)}>
                            <option value={"Deutsch"}>Deutsch</option>
                            <option value={"Englisch"}>English</option>
                        </select>
                    </div>
                    <nav style={{marginBottom: "20px"}}>
                        <NavLink to="/" style={{marginRight: "10px"}}
                                 className={"link-elements"}>{langjson[language][location]["2"]}</NavLink>
                        <NavLink to="/aboutme" style={{marginRight: "10px"}}
                                 className={"link-elements"}>{langjson[language][location]["3"]}</NavLink>
                        <NavLink to="/projects" style={{marginRight: "10px"}}
                                 className={"link-elements"}>{langjson[language][location]["4"]}</NavLink>
                        <NavLink to="/contact" className={"link-elements"}>{langjson[language][location]["5"]}</NavLink>
                    </nav>
                    <hr className={"color-divs"}/>
                    <Routes>
                        <Route path="/"
                               element={<Homepage langjson={langjson} language={language} setLanguage={setLanguage}/>}/>
                        <Route path="/aboutme" element={<Abaout_me langjson={langjson} language={language}
                                                                   setLanguage={setLanguage}/>}/>
                        <Route path="/projects"
                               element={<Projects langjson={langjson} language={language} setLanguage={setLanguage}/>}/>
                        <Route path="/contact"
                               element={<Contact langjson={langjson} language={language} setLanguage={setLanguage}/>}/>
                    </Routes>
                </div>
                <hr className={"color-divs"}/>
                <Footer langjson={langjson} language={language}/>
            </HashRouter>

        </div>
    )
}

export default App
