import { Link } from "react-router-dom";

export default function Homepage({langjson, language}) {
    const location = "Homepage"
    return (
        <div className="row">
            <div className="col-md-6 col-12 d-flex mb-4">
                <div className="bg-white rounded-4 p-4 shadow border info-divs w-100">
                    <h1 className="mb-3 fw-bold">
                        {langjson[language][location]["1"]}
                    </h1>
                    <p className="mb-3" style={{ lineHeight: "1.6" }}>
                        {langjson[language][location]["2"]} <b>Lenas Städeli</b> {langjson[language][location]["3"]} <Link to="/aboutme">{langjson[language][location]["4"]}</Link>.
                    </p>
                    <p className="mb-0" style={{ lineHeight: "1.6" }}>
                        {langjson[language][location]["5"]}
                    </p>
                </div>
            </div>
            <div className="col-md-6 col-12 d-flex">
                <div className="bg-white rounded-4 p-4 shadow border info-divs w-100">
                    <h1 className="mb-3 fw-bold">
                        {langjson[language][location]["6"]}
                    </h1>
                    <p className="mb-3" style={{ lineHeight: "1.6" }}>
                        {langjson[language][location]["10"]}
                    </p>
                    <p className="mb-3" style={{ lineHeight: "1.6" }}>
                        {langjson[language][location]["7"]}
                    </p>
                    <p className="mb-0" style={{ lineHeight: "1.6" }}>
                        {langjson[language][location]["8"]} <br />
                        <Link to="/contact">{langjson[language][location]["4"]}</Link> {langjson[language][location]["9"]}
                    </p>
                </div>
            </div>
        </div>
    );
}