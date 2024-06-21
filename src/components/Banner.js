import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/wrp-g.jpg";
import colorSharp from "../assets/img/color-sharp.png";
import TextTypeWrite from "./utils/TextTypeWrite.js";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="mb-5">
            {
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                  /*  className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    } */
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Ao`}{" "}
                      <TextTypeWrite
                        toRotate={["REACT WEB", "REACT NATIVE MOBILE"]}
                      />
                    </h1>

                    <p>
                      Name: Worapong Wonglamduan
                      <br />
                      NickName: Ao
                      <br />
                      Address: Khamphangphet, Thailand
                      <br />
                      Date of Birth: 07/01/1996
                    </p>

                    <TextTypeWrite
                      timeHide={1000}
                      toRotate={["this website using react bootstrap"]}
                    />

                    <button onClick={() => console.log("connect")}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            }
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  // className={`wrap-img-profile ${
                  //   isVisible ? "animate__animated animate__zoomIn" : ""
                  // }`}
                  className={`wrap-img-profile `}
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
