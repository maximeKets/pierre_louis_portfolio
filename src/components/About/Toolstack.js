import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiPostman,
    SiSlack,
    SiMacos, SiJetbrains, SiDocker, SiFigma, SiAdobephotoshop,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJetbrains/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFigma/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobephotoshop/>
            </Col>
        </Row>
    );
}

export default Toolstack;
