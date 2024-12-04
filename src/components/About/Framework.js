import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiNodejs,
    DiPython,
    DiPhp,
    DiDatabase,
} from "react-icons/di";
import {
    SiTensorflow,
    SiScikitlearn,
    SiReact,
    SiFlask,
    SiMysql,
    SiPostgresql,
    SiHtml5,
    SiCss3,
    SiJavascript,
} from "react-icons/si";

function Framework() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
                <p className="text-sm">Python</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow/>
                <p className="text-sm">Tensorflow
                </p>

            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiScikitlearn/>
                <p className="text-sm">Scikit-learn
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact/>
                <p className="text-sm">React
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
                <p className="text-sm">Node.js
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlask/>
                <p className="text-sm">Flask
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql/>
                <p className="text-sm">MySQL
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
                <p className="text-sm">PostgreSQL
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPhp/>
                <p className="text-sm">PHP
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDatabase/>
                <p className="text-sm">Database
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5/>
                <p className="text-sm">HTML
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3/>
                <p className="text-sm">CSS
                </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript/>
                <p className="text-sm">JavaScript
                </p>
            </Col>
        </Row>
    );
}

export default Framework;
