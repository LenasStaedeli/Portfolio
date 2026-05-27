import {href} from "react-router-dom";


export default function Projects({langjson, language}){
    const location = "projects"
    console.log(langjson, language, location )
        return (
            <div>
                <h1>{langjson[language][location]["1"]}</h1>
                <section>
                    <header>
                        <h2>{langjson[language][location]["2"]}</h2>
                    </header>

                    <div className={"row"}>
                        <aside className={"col-md-4 col-12"}>
                            <div className="border border-black rounded-2">
                                <img
                                    src={"Phasmo.png"}
                                    alt="Bild des Phasmoguessr projekts"
                                    style={{width: "100%", borderRadius: "5px"}}
                                />
                                <h3 style={{padding: "4px"}}>Phasmoguessr</h3>
                                <p style={{padding: "4px"}}>{langjson[language][location]["3"]}</p>
                                <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                                    <a href={"https://github.com/LenasStaedeli/phasmoguesser"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                                border: "1px solid black",
                                                borderRadius: "6px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img
                                                src={"GitHub_Invertocat_Logo.svg"}
                                                alt="GitHub"
                                                style={{width: "20px", height: "20px"}}
                                            />
                                        </button>
                                    </a>
                                    <a href={"https://lenasstaedeli.github.io/phasmoguesser/"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                                border: "1px solid black",
                                                borderRadius: "6px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                                                <path
                                                    d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z"/>
                                            </svg>

                                        </button>
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <aside className={"col-md-4 col-12"}>
                            <div className="border border-black rounded-2">
                                <img
                                    src={"TicTacToe.png"}
                                    alt="Bild des TicTacToe projekts"
                                    style={{width: "100%", borderRadius: "5px"}}
                                />
                                <h3 style={{padding: "4px"}}>TicTacToe</h3>
                                <p style={{padding: "4px"}}>{langjson[language][location]["4"]}</p>
                                <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                                    <a href={"https://github.com/LenasStaedeli/tictactoe"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                                border: "1px solid black",
                                                borderRadius: "6px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img
                                                src={"GitHub_Invertocat_Logo.svg"}
                                                alt="GitHub"
                                                style={{width: "20px", height: "20px"}}
                                            />
                                        </button>
                                    </a>
                                    <a href={"https://lenasstaedeli.github.io/tictactoe/"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                                border: "1px solid black",
                                                borderRadius: "6px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                                                <path
                                                    d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z"/>
                                            </svg>

                                        </button>
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <aside className={"col-md-4 col-12"}>
                            <div className="border border-black rounded-2">
                                <img
                                    src={"Dartscounter.png"}
                                    alt="Bild des Dartcounter projekts"
                                    style={{width: "100%", borderRadius: "5px"}}
                                />
                                <h3 style={{padding: "4px"}}>Dartcounter</h3>
                                <p style={{padding: "4px"}}>{langjson[language][location]["5"]}</p>
                                <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                                    <a href={"https://github.com/LenasStaedeli/Dartcounter-with-react"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                                border: "1px solid black",
                                                borderRadius: "6px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img
                                                src={"GitHub_Invertocat_Logo.svg"}
                                                alt="GitHub"
                                                style={{width: "20px", height: "20px"}}
                                            />
                                        </button>
                                    </a>
                                    <a href={"https://lenasstaedeli.github.io/Dartcounter-with-react/"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                                border: "1px solid black",
                                                borderRadius: "6px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                                                <path
                                                    d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z"/>
                                            </svg>

                                        </button>
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
                <hr/>
                <h2>{langjson[language][location]["6"]}</h2>
                <section>
                    <div>
                        <aside className={"col-md-4 col-12"}>
                            <div className="border border-black rounded-2">
                                <img
                                    src={"Connectinglines.png"}
                                    alt="Bild des Connecting-Lines projekts"
                                    style={{width: "100%", borderRadius: "5px"}}
                                />
                                <h3 style={{padding: "4px"}}>Connecting-Lines</h3>
                                <p style={{padding: "4px"}}>{langjson[language][location]["7"]}</p>
                                <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                                    <a href={"https://github.com/LenasStaedeli/connectinglines"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                                border: "1px solid black",
                                                borderRadius: "6px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img
                                                src={"GitHub_Invertocat_Logo.svg"}
                                                alt="GitHub"
                                                style={{width: "20px", height: "20px"}}
                                            />
                                        </button>
                                    </a>
                                    <a href={"https://lenasstaedeli.github.io/connectinglines/"}>
                                        <button
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                padding: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "grey",
                                            border: "1px solid black",
                                            borderRadius: "6px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                                            <path
                                                d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z"/>
                                        </svg>

                                    </button>
                                    </a>
                                </div>

                            </div>
                        </aside>
                    </div>
                </section>

            </div>
        )
    }