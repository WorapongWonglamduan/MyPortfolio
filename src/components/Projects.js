import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imgStampedeWeb from "../assets/img/stampede.png";
import imgStampedeWeb2 from "../assets/img/stampede2.png";
import imgStampedeWeb3 from "../assets/img/stampede3.png";
import imgStampedeMo1 from "../assets/img/stampedeMo1.png";
import imgStampedeMo2 from "../assets/img/stampedeMo2.png";
import imgStampedeMo3 from "../assets/img/stampedeMo3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Stampede",
      imgUrl: imgStampedeWeb,
    },
    {
      title: "Business Startup",
      description: "Stampede",
      imgUrl: imgStampedeWeb2,
    },
    {
      title: "Business Startup",
      description: "Stampede",
      imgUrl: imgStampedeWeb3,
    },
    {
      title: "Business Startup",
      description: "Stampede",
      imgUrl: imgStampedeMo1,
    },
    {
      title: "Business Startup",
      description: "Stampede",
      imgUrl: imgStampedeMo2,
    },
    {
      title: "Business Startup",
      description: "Stampede",
      imgUrl: imgStampedeMo3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div /*  className={isVisible ? "animate__animated animate__fadeIn": ""} */
                >
                  <h2>Projects</h2>
                  <p>
                    Develop web applications using React and Develop
                    cross-platform mobile applications using React Native
                    Collaborated with design and development teams. Utiliy tools
                    and techniques such as Redux, Context API, and Hooks.
                    Improved web application performance and fixed bugs. Develop
                    Functional, work with RESTful API backend, insert to
                    database.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Stampede Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Stampede Project</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
