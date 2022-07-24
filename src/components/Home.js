import React, { useEffect } from "react";
import Image1 from "./Image1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
// import emoji from "./Images/glassesimoji.png";
import twitter from "./Images/twitter.png";
import insta from "./Images/insta.png";
import github from "./Images/github.png";
import Services from "./Services";
import Contact from "./Contact";
import { motion } from "framer-motion";
import Footer from "./Footer";

export default function Home(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section>
        <div
          className="container-fluid "
          style={{ marginTop: "110px", height: "80vh" }}
        >
          <div className="col-11 mx-auto top_cont  row">
            <div
              style={{ marginTop: "160px" }}
              className=" cont-1  d-flex d-sm-flex d-lg-block d-md-block flex-column  col-md-6  my-auto order-2 order-md-1 order-lg-1"
            >
              <div className=" ">
                <motion.h1
                  initial={{ y: "-40vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                  }}
                  className="fs-1  m_text"
                >
                  {" "}
                  <span className="text-nowrap display-4 text-resp">
                    Hello there, I am
                  </span>{" "}
                  <br />{" "}
                  <strong className="text-primary display-5 text-resp2">
                    Hamza Shah
                  </strong>{" "}
                </motion.h1>
              </div>
              <motion.h5
                initial={{ y: "-40vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                }}
                className="lead m_text  fs-5"
              >
                {" "}
                I am Front-end developer and a Python programmer based in
                Pakistan{" "}
              </motion.h5>

              <a href="https://hamjaster.github.io/Cv/">
                <motion.button
                  initial={{ x: "-40vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                  }}
                  className=" my-1 cv "
                >
                  Check my CV
                </motion.button>
              </a>
              <div
                style={{ marginTop: "12rem !important" }}
                className="socials d-md-block d-lg-block  d-none justify-content-center align-items-center "
              >
                <a
                  className="social_media_icons"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/dev_hamzashah"
                >
                  <motion.img
                    initial={{ y: "70vh" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.4,
                      type: "spring",
                      bounce: 0.3,
                      delay: 1.3,
                    }}
                    className="mx-3"
                    width={57}
                    src={twitter}
                    alt=""
                    srcset=""
                  />
                </a>
                <a
                  className="social_media_icons"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/techy_hamza/?hl=en"
                >
                  <motion.img
                    initial={{ y: "70vh" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.4,
                      type: "spring",
                      bounce: 0.3,
                      delay: 1.5,
                    }}
                    className="mx-3"
                    width={50}
                    src={insta}
                    alt=""
                    srcset=""
                  />
                </a>
                <a
                  rel="noreferrer"
                  className="social_media_icons"
                  target="_blank"
                  href="https://github.com/Hamjaster"
                >
                  <motion.img
                    initial={{ y: "70vh" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.4,
                      type: "spring",
                      bounce: 0.3,
                      delay: 1.7,
                    }}
                    className="mx-3"
                    width={50}
                    src={github}
                    alt=""
                    srcset=""
                  />
                </a>
              </div>
            </div>

            <div className="cont-2  col-md-6 order-1  order-md-2 order-lg-2">
              <motion.img
                initial={{ x: "30vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 2.5,
                }}
                width={800}
                src={Image1}
                className="mx-auto d-block img-fluid w-100 my-auto animated  "
                alt="vector"
              />
              {/* <img width={154} src={emoji} className="emoji" alt="" srcset="" /> */}
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services mode={props.mode} />
      <Contact />
      <Footer />
    </>
  );
}
