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
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiScikitlearn />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlask />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDatabase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript />
            </Col>
        </Row>
    );
}

export default Framework;
