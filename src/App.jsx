import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage.jsx";
import Abaout_me from "./pages/abaout_me.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/contact.jsx";
import languages from "./languages/languages.json"

function App() {
    const [language, setLanguage] = useState("Deutsch")
    const langjson = languages

    return (
        <>
            <HashRouter id={"Router"}>
                <div style={{padding: "20px", fontFamily: "Arial, sans-serif", vh: 100, vw: 100 }} >
                    <h1 id={"title"}>{langjson[language]["1"]}</h1>
                    <div id={"dropdownlang"}>
                        <select onChange={event => setLanguage(event.target.value)}>
                            <option value={"Deutsch"}>Deutsch</option>
                            <option value={"Englisch"}>English</option>
                        </select>
                    </div>
                    <nav style={{marginBottom: "20px"}} >
                        <Link to="/" style={{marginRight: "10px"}}>Home</Link>
                        <Link to="/aboutme" style={{marginRight: "10px"}}>about me</Link>
                        <Link to="/projects" style={{marginRight: "10px"}}>projects</Link>
                        <Link to="/contact">contact</Link>
                    </nav>

                    <hr/>

                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/aboutme" element={<Abaout_me/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </HashRouter>
        </>
    )
}

export default App
