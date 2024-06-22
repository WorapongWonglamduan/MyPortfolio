// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import imgReact from "../assets/img/react-js.png";
import imgReactNative from "../assets/img/mobile.png";
import imgHtml from "../assets/img/html.png";
import imgCss from "../assets/img/css-icon.png";
import imgJs from "../assets/img/javascript.png";
import imgNodeJs from "../assets/img/nodejs.png";
import imgGit from "../assets/img/git.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const config = { autoPlay: true, autoPlaySpeed: 2000 };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Programming Languages, Frameworks and Libraries, Tools and
                Techniques, Others{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                {...config}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={imgReact} alt="cv" className="carousel-image" />
                  <h5>React Web</h5>
                </div>

                <div className="item">
                  <img
                    src={imgReactNative}
                    alt="cv"
                    className="carousel-image"
                  />
                  <h5>React Native (Mobile)</h5>
                </div>

                <div className="item">
                  <img src={imgHtml} alt="cv" className="carousel-image" />
                  <h5>Html</h5>
                </div>

                <div className="item">
                  <img src={imgCss} alt="cv" className="carousel-image" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={imgJs} alt="cv" className="carousel-image" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={imgNodeJs} alt="cv" className="carousel-image" />
                  <h5>Node js</h5>
                </div>
                <div className="item">
                  <img src={imgGit} alt="cv" className="carousel-image" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
