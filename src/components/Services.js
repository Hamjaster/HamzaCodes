import React, { useEffect } from "react";
import python from "./Images/python.png";
import react from "./Images/react.png";
import web from "./Images/web.png";
import bootstrap from "./Images/bootstrap.png";
import { motion } from "framer-motion";
import Aos from "aos";
// import services from "./Images/services.png"
export default function Services(props) {
  // const spinTransition = {
  //     // loop: Infinity,
  //     // ease: "linear",
  //     duration: 3.5
  //   };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div style={{ marginTop: "99px" }} className="row">
      <div className="services col-11   container-fluid ">
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="right  col-lg-7  col-md-6 "
          >
            <h2
              style={{ fontWeight: "600" }}
              className="fw-500  display-4 m_text text-primary"
            >
              My services
            </h2>

            <p style={{ fontSize: "21px" }} className="lead">
              I have much experience in the field of computer science. I had
              many opportunities to work in a vast spectrum of web technologies
              what let me gather a significant amount of various experience. I
              have also made bunch of projects that substantially represent my
              creativity and proficiency.
              <br />
              <span className="text-primary">
                {" "}
                Here are a few technologies I’ve been working with recently:
              </span>
              <div className=" d-flex flex-row justify-content-between service-list">
                <ul className="my-5 ul">
                  <li>Html, CSS and JS</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>Bootstrap 5</li>
                  <li>Responsive websites</li>
                </ul>
                <ul className="ul my-5">
                  <li>VS Code</li>
                  <li>Restful Apis</li>
                  <li>React </li>
                  <li>Github</li>
                </ul>
              </div>
            </p>
          </div>

          {/* <div className="col-lg-1 col-md-0"></div> */}

          <div className="left mt-sm-5  col-md-6 col-lg-5  mt-sm-3 mt-5  mx-auto">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              style={{
                boxShadow: ` ${
                  props.mode === "dark"
                    ? "rgb(32 32 32) -12px 12px 20px"
                    : "-12px 12px 20px rgb(210, 210, 210)"
                }`,
              }}
              className={`main_circle mx-auto bg-${
                props.mode === "dark" ? "black" : "white"
              } bg-gradient  `}
            >
              {/* <div className='main_circle mx-auto'> */}

              <div
                style={{
                  boxShadow: ` ${
                    props.mode === "dark"
                      ? "-6px 2px 20px 2px #2e2e2e"
                      : "-12px 12px 20px rgb(210, 210, 210)"
                  }`,
                }}
                className={`sec_circle bg-${
                  props.mode === "dark" ? "dark" : "white"
                } bg-gradient`}
              >
                <img
                  className="services_img"
                  width={72}
                  src={python}
                  alt=""
                  srcset=""
                />
              </div>

              <div
                style={{
                  boxShadow: ` ${
                    props.mode === "dark"
                      ? "-6px 2px 20px 2px #2e2e2e"
                      : "-12px 12px 20px rgb(210, 210, 210)"
                  }`,
                }}
                className={`sec_circle bg-${
                  props.mode === "dark" ? "dark" : "white"
                } bg-gradient`}
              >
                <img
                  className="services_img"
                  width={72}
                  src={react}
                  alt=""
                  srcset=""
                />
              </div>

              <div
                style={{
                  boxShadow: ` ${
                    props.mode === "dark"
                      ? "-6px 2px 20px 2px #2e2e2e"
                      : "-12px 12px 20px rgb(210, 210, 210)"
                  }`,
                }}
                className={`sec_circle bg-${
                  props.mode === "dark" ? "dark" : "white"
                } bg-gradient`}
              >
                <img
                  className="services_img"
                  width={72}
                  src={web}
                  alt=""
                  srcset=""
                />
              </div>

              <div
                style={{
                  boxShadow: ` ${
                    props.mode === "dark"
                      ? "-6px 2px 20px 2px #2e2e2e"
                      : "-12px 12px 20px rgb(210, 210, 210)"
                  }`,
                }}
                className={`sec_circle bg-${
                  props.mode === "dark" ? "dark" : "white"
                } bg-gradient`}
              >
                <img
                  className="services_img"
                  width={72}
                  src={bootstrap}
                  alt=""
                  srcset=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
