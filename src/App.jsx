import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from "react-router-dom";
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

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <HashRouter>
                <div style={{padding: "20px", fontFamily: "Arial, sans-serif", flex: "1 0 auto", width: "100%"}}>
                    <h1 id={"title"}>{langjson[language][location]["1"]}</h1>
                    <div id={"dropdownlang"}>
                        <select onChange={event => setLanguage(event.target.value)}>
                            <option value={"Deutsch"}>Deutsch</option>
                            <option value={"Englisch"}>English</option>
                        </select>
                    </div>
                    <nav style={{marginBottom: "20px"}}>
                        <Link to="/" style={{marginRight: "10px"}}>{langjson[language][location]["2"]}</Link>
                        <Link to="/aboutme" style={{marginRight: "10px"}}>{langjson[language][location]["3"]}</Link>
                        <Link to="/projects" style={{marginRight: "10px"}}>{langjson[language][location]["4"]}</Link>
                        <Link to="/contact">{langjson[language][location]["5"]}</Link>
                    </nav>
                    <hr/>
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
                    <hr/>
                    <Footer langjson={langjson} language={language}/>
                </div>
            </HashRouter>

        </div>
    )
}

export default App
