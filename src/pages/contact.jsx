import { Link } from "react-router-dom";

export default function Contact({ langjson, language }) {
    const location = "contact"
    return (
        <div className="row">
            <div className="col-md-6 col-12 d-flex mb-4">
                <div className="bg-white rounded-4 p-4 shadow border info-divs w-100">
                    <h1 className="mb-3 fw-bold">{langjson[language][location]["1"]}</h1>
                    <p className="mb-3" style={{ lineHeight: "1.6" }}>
                        {langjson[language][location]["2"]} <Link to="/projects">{langjson[language][location]["3"]}</Link> {langjson[language][location]["4"]}
                    </p>
                    <p className="mb-0" style={{ lineHeight: "1.6" }}>
                        {langjson[language][location]["5"]}{" "}
                        <Link to="/aboutme">{langjson[language][location]["6"]}</Link>-{langjson[language][location]["7"]}
                    </p>
                </div>
            </div>
            <div className="col-md-6 col-12 d-flex">
                <div className="bg-white rounded-4 p-4 shadow border info-divs w-100">
                    <h2 className="mb-3 fw-bold">{langjson[language][location]["8"]}</h2>
                    <p className="mb-3" style={{ lineHeight: "1.6" }}>{langjson[language][location]["9"]}</p>
                    <ul className="list-unstyled mb-4" style={{ fontSize: "1.1rem" }}>
                        <li className="mb-3">
                            <strong>E-Mail:</strong>{" "}
                            <a href="mailto:lenas.staedeli@outlook.com" className="home-link">lenas.staedeli@outlook.com</a>
                        </li>
                        <li className="mb-3">
                            <strong>GitHub:</strong>{" "}
                            <a href="https://github.com/lenasstaedeli" target="_blank" rel="noreferrer" className="home-link">github.com/lenasstaedeli</a>
                        </li>
                    </ul>
                    <p className="mb-0" style={{ lineHeight: "1.6" }}>{langjson[language][location]["10"]}</p>
                </div>
            </div>
        </div>
    );
}