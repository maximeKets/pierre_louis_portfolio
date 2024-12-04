import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Actuellement en Bachelor <span className="purple">"Développeur IA & Datascience"</span> à l'<span className="purple">EPSI Montpellier</span>,
                        je mets à disposition mes compétences pour une alternance / stage, en développant des solutions innovantes et performantes dans le domaine de l’intelligence artificielle.
                        <br/>
                        <br/>
                        Mon parcours inclut un <span className="purple">BTS Systèmes Numériques</span>, où j'ai appris les bases essentielles de la programmation et des infrastructures réseau.
                        J'ai également réalisé des projets significatifs, comme un tracker GPS performant intégrant des technologies modernes telles que Raspberry Pi, Sigfox, et Leaflet.
                        <br/>
                        <br/>
                        En parallèle, j’ai eu des expériences enrichissantes en datacenters et en électronique, qui m’ont permis de comprendre les enjeux matériels et logiciels des systèmes informatiques.
                        <br/>
                        <br/>
                        Aujourd'hui, mes forces sont :
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Python, JavaScript, PHP, et C++
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Développement d'applications IA et déploiement de solutions innovantes
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Gestion de bases de données (SQL, MySQL) et workflows data science
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Créativité, esprit d’équipe et capacité à résoudre des problèmes complexes
                        </li>
                    </ul>

                    <p style={{color: "rgb(155 126 172)"}}>
                        "L'innovation ne naît jamais de la certitude, mais de la curiosité et de l'audace."{" "}
                    </p>
                    <footer className="blockquote-footer">Inspiration personnelle</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
