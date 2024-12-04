import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {
    AiFillGithub, AiFillMail, AiFillPhone,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Réalisé avec 🫶 par Pierre-Louis Guinel.</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    {/*<h3>Crédits : Soumyajit Behera</h3>*/}
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/HASHT85"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/pierre-louis-guinel-54767b279/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:pierrelouis.guinel@gmail.com"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillMail/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="tel:0683313170"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillPhone/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
