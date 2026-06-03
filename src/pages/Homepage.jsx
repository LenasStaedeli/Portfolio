import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>

            <div className="bg-white rounded-4 p-4 shadow border mb-4">
                <h1 className="mb-3 fw-bold">
                    Willkommen!
                </h1>

                <p className="mb-3" style={{ lineHeight: "1.6" }}>
                    Hallo, ich bin <b>Lenas Städeli</b> und absolviere derzeit
                    eine Ausbildung zum Informatiker in Winterthur. Mehr über meine Persönlichkeit
                    findest du <Link to="/aboutme">hier</Link>.
                </p>
                <p className="mb-0" style={{ lineHeight: "1.6" }}>
                    Auf dieser Webseite präsentiere ich meine Projekte,
                    Kenntnisse, Ausbildung und persönlichen Arbeiten.
                </p>
            </div>
            <div className="bg-white rounded-4 p-4 shadow border">
                <h1 className="mb-3 fw-bold">
                    Kontakt
                </h1>
                <p className="mb-3" style={{ lineHeight: "1.6" }}>
                    Gibt es noch Fragen?
                </p>
                <p className="mb-3" style={{ lineHeight: "1.6" }}>
                    Oder vielleicht Kontaktinteresse?
                </p>
                <p className="mb-0" style={{ lineHeight: "1.6" }}>
                    Dann melde dich gerne! <br />
                    <Link to="/contact">Hier</Link> findest du alle meine Kontaktdaten.
                </p>
            </div>
        </div>
    );
}