import {Link} from "react-router-dom";

export default function Abaout_me({langjson, language}){
    const location = "aboutme"
    return(
        <div className="row">
            <div className="col-md-6 col-12 d-flex mb-4">
                <div className="background-color rounded-3 p-4 shadow color-divs info-divs h-100 w-100 flex-column d-flex">
                    <h1 className="mb-3 fw-bold text-white">{langjson[language][location]["1"]}</h1>
                    <p className="mb-3 text-white" style={{lineHeight: "1.6"}}>{langjson[language][location]["2"]}</p>
                    <p className="mb-0 text-white" style={{lineHeight: "1.6"}}>{langjson[language][location]["3"]}</p>
                </div>
            </div>
            <div className="col-md-6 col-12 d-flex mb-4">
                <div className="background-color rounded-3 p-4 shadow color-divs info-divs h-100 w-100 flex-column d-flex">
                    <h1 className="mb-3 fw-bold text-white">{langjson[language][location]["4"]}</h1>
                    <p className="mb-3 text-white" style={{lineHeight: "1.6"}}>{langjson[language][location]["5"]}</p>
                    <ul className="list-unstyled mb-4" style={{fontSize: "1.1rem"}}>
                        <li className="mb-3 text-white"><p><b>{langjson[language][location]["6"]}</b>{langjson[language][location]["7"]}</p></li>
                        <li className="mb-3 text-white"><p><b>{langjson[language][location]["8"]}</b>{langjson[language][location]["9"]}</p></li>
                        <li className="mb-3 text-white"><p><b>{langjson[language][location]["10"]}</b>{langjson[language][location]["11"]}</p></li>
                        <li className="mb-3 text-white"><p><b>{langjson[language][location]["12"]}</b>{langjson[language][location]["13"]}</p></li>
                        <li className="mb-3 text-white"><p><b>{langjson[language][location]["14"]}</b>{langjson[language][location]["15"]}</p></li>
                        <li className="mb-3 text-white"><p><b>{langjson[language][location]["16"]}</b>{langjson[language][location]["17"]}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}