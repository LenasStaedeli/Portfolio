import {Link} from "react-router-dom";

export default function Footer ({ langjson, language }){
    const location = "footer"
    return (
        <div className="d-flex justify-content-between align-items-center p-2">
            <h3 className="footer-text text-white"
                id="footer-copyright"
                style={{fontFamily: "Arial, sans-serif", fontSize: "1.1Rem"}}>2026 Lenas Städeli ©</h3>
            <h3
                style={{fontFamily: "Arial, sans-serif", fontSize: "1.1Rem"}}
                className={"text-white"}
            ><Link to={"https://github.com/LenasStaedeli/Portfolio"} className={"link-elements"}>{langjson[language][location]["1"]}</Link> {langjson[language][location]["2"]}</h3>
        </div>
    )
}