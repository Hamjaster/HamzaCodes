import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./components.css";
import AOS from "aos";
import piano from "./Images/piano.png";
import calculator from "./Images/calculator.png";
import to_do from "./Images/to-do.png";
import converter from "./Images/converter.png";
import stopwatch from "./Images/stopwatch.png";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
export default function Projects() {
  // const animate_left = {
  //   offscreen:{x:"-100vw"},
  //   onscreen:{x:0,
  //     transition:{
  //       type:'spring',
  //       duration:1.5,
  //       bounce:0.4
  //     }
  //   }
  // }
  useEffect(() => {
    AOS.init();
  }, []);

  const Project1 = {
    title: "Piano",
    desc: "Experience the virtual piano keyboard online and enjoy the  interactive sounds ",
    img: [piano],
    techs: ["HTML", "CSS", "Javascript"],
    link: "https://hamjaster.github.io/Piano/",
  };
  const Project2 = {
    title: "Calculator",
    desc: "A beautiful, free online scientific calculator with advanced features for evaluating mathematic problems ",
    img: [calculator],
    techs: ["HTML", "CSS", "Javascript"],
    link: "https://hamjaster.github.io/Calculator/",
  };

  const Project3 = {
    title: "To-do list",
    desc: "Organize your time with this To-do list, It will be proved much beneficial for you ",
    img: [to_do],
    techs: ["HTML", "CSS", "Javascript"],
    link: "https://hamjaster.github.io/Todo/",
  };

  const Project4 = {
    title: "Unit Converter",
    desc: "Quick, free, online unit converter that converts feets to inches and inches to feets ",
    img: [converter],
    techs: ["HTML", "CSS", "Javascript"],
    link: "https://hamjaster.github.io/unit-converter/",
  };
  const Project5 = {
    title: "Stopwatch",
    desc: "A Free flash online stopwatch, quick easy to use flash stopwatch! also a countdown timer!",
    img: [stopwatch],
    techs: ["HTML", "CSS", "Javascript"],
    link: "https://hamjaster.github.io/stopwatch/",
  };

  return (
    <>
      <div className="container">
        <motion.div
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
          }}
          style={{
            marginBottom: "-140px",
          }}
          className="intro w-50 mx-auto text-center"
        >
          <h1
            style={{ fontSize: "50px !important" }}
            className="my-2 text-primary fw-bolder  "
          >
            My Portfolio
          </h1>
          <p className="text-center fs-6 w-100">
            I Sweat the little details that bring a design to life. I combine
            nuanced timing and motion with a deep understanding of browser
            rendering to deliver logical interactions that are both full of
            character and outrageously smooth.
            <br />
            Here are the variety of projects that will surely convince you. In
            order to get the source code of my works, feel free contact me.
          </p>
        </motion.div>

        {/* Project 1 */}
        <div style={{}} className="row mx-auto ">
          <div className="col-10 mx-auto">
            <div className="card_comp mb-3">
              <div className="row g-0 project-row">
                <div className="col-md-4 project-img">
                  {/* <div className="project-pngDIV"> */}
                  {/* <a href={Project1.link}> */}
                  {/* <img src={piano} width={600} className="project-png rounded-start" /> */}

                  <motion.div
                    initial={{ y: "100vw", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", delay: 0.5 }}
                    class="project-pngDIV"
                    style={{
                      position: "relative",
                      left: "-57px",
                      top: "191px",
                      background: `url(${Project1.img}) 73px 63px / contain no-repeat`,
                      height: "600px",
                      width: "600px",
                      overflow: "hidden",
                    }}
                  ></motion.div>

                  {/* </a> */}
                  {/* </div> */}

                  <motion.div
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, type: "spring", delay: 1 }}
                    className="col-md-8 my-auto project-content"
                  >
                    <div className="card-body text-end">
                      <h5
                        style={{
                          fontWeight: "900",
                        }}
                        className="card-title fs-1   fw-600"
                      >
                        {Project1.title}
                      </h5>
                      <div className=" w-100 project-desc ">
                        <p className="card-text">{Project1.desc}</p>
                        <div className="submitBTN">
                          <a href={`${Project1.link}`}>
                            <button className="animated-btn ">View</button>
                          </a>
                        </div>
                      </div>
                      <div className="techs">
                        <ul
                          style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            color: "#979797",
                          }}
                          className="mt-3"
                        >
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project1.techs[0]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project1.techs[1]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project1.techs[2]}
                          </li>
                          {/* <li className='me-md-3 me-lg-3 me-xl-4 me-1 '>REeact js</li> */}
                        </ul>
                      </div>
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" row">
          <div className="col-10 mx-auto">
            <div className="card mob-card">
              <div className="img_mob">
                <img src={Project1.img} className="card-img-top" alt="sdg" />
              </div>
              <div className="card-body text-dark">
                <h5 className="card-title">{Project1.title}</h5>
                <p className="card-text">{Project1.desc}</p>
                <a href={Project1.link} className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          style={{
            marginTop: "250px",
            marginBottom: "130px",
          }}
          className="row mx-auto "
        >
          <div className="col-10 mx-auto">
            <div className="card_comp mb-3">
              <div className="row project-row">
                <div className="col-md-8">
                  <div
                    style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      position: "relative",
                      zIndex: "100",
                    }}
                    data-aos="slide-right"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out-cubic"
                    className="project2-content"
                  >
                    <div className="card-body text-end">
                      <h5
                        style={{ fontWeight: "900" }}
                        className="card-title text-start fs-1   fw-600"
                      >
                        {Project2.title}
                      </h5>
                      <div
                        className=" w-100 project-desc"
                        style={{ position: "relative", zIndex: "11" }}
                      >
                        <p className="card-text text-start">{Project2.desc}</p>
                        <a href={`${Project2.link}`}>
                          <button className="animated-btn  float-start">
                            View
                          </button>
                        </a>
                      </div>
                      <div className="techs">
                        <ul
                          style={{
                            listStyle: "none",
                            color: "#979797",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                          }}
                          className="mt-3"
                        >
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project2.techs[0]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project2.techs[1]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project2.techs[2]}
                          </li>
                          {/* <li className='me-md-3 me-lg-3 me-xl-4 me-1 '>REeact js</li> */}
                        </ul>
                      </div>
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                  </div>
                </div>
                <div
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-up"
                  className="col-md-4 project2_pngDIV"
                >
                  {/* <img className='project2_png' style={{
                    position: "relative",
                    left: "-221px",
                
              }} width={600} src={piano} alt="" srcset="" /> */}
                  <div
                    class="project2_png"
                    style={{
                      position: "relative",
                      left: "-268px",
                      top: "-69px",
                      background: `url(${Project2.img}) 73px 63px no-repeat`,
                      height: "600px",
                      width: "600px",
                      backgroundSize: "contain",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" style={{ marginTop: "-195px" }} className="row">
          <div className="col-10 mx-auto">
            <div className="card mob-card">
              <div className="img_mob">
                <img src={Project2.img} className="card-img-top" alt="sdg" />
              </div>
              <div className="card-body text-dark">
                <h5 className="card-title">{Project2.title}</h5>
                <p className="card-text">{Project2.desc}</p>
                <a href={Project2.link} className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div
          style={{ marginBottom: "120px" }}
          className="row pro3 pro-row mx-auto "
        >
          <div className="col-10 mx-auto">
            <div className="card_comp mb-3">
              <div className="row g-0 project-row">
                <div className="col-md-4 project-img">
                  {/* <div className="project-pngDIV"> */}
                  {/* <a href={Project1.link}> */}
                  {/* <img src={piano} width={600} className="project-png rounded-start" /> */}

                  <div
                    data-aos-delay="50"
                    data-aos="fade-up"
                    class="project-pngDIV"
                    style={{
                      position: "relative",
                      left: "-57px",
                      top: "191px",
                      background: `url(${Project3.img}) 73px 63px / contain no-repeat`,
                      height: "600px",
                      width: "600px",
                      overflow: "hidden",
                    }}
                  ></div>

                  {/* </a> */}
                  {/* </div> */}

                  <div
                    data-aos="slide-left"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out-cubic"
                    className="col-md-8 my-auto project-content"
                  >
                    <div className="card-body text-end">
                      <h5
                        style={{
                          fontWeight: "900",
                        }}
                        className="card-title fs-1   fw-600"
                      >
                        {Project3.title}
                      </h5>
                      <div className=" w-100 project-desc ">
                        <p className="card-text">{Project3.desc}</p>
                        <div className="submitBTN">
                          <a href={`${Project3.link}`}>
                            <button className="animated-btn ">View</button>
                          </a>
                        </div>
                      </div>
                      <div className="techs">
                        <ul
                          style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            color: "#979797",
                          }}
                          className="mt-3"
                        >
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project3.techs[0]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project3.techs[1]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project3.techs[2]}
                          </li>
                          {/* <li className='me-md-3 me-lg-3 me-xl-4 me-1 '>REeact js</li> */}
                        </ul>
                      </div>
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="row">
          <div className="col-10 mx-auto">
            <div className="card mob-card">
              <div className="img_mob">
                <img src={Project3.img} className="card-img-top" alt="sdg" />
              </div>
              <div className="card-bod text-dark">
                <h5 className="card-title">{Project3.title}</h5>
                <p className="card-text">{Project3.desc}</p>
                <a href={Project3.link} className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div
          style={{
            marginTop: "111px",
            marginBottom: "120px",
          }}
          className="row mx-auto "
        >
          <div className="col-10 mx-auto">
            <div className="card_comp mb-3">
              <div className="row project-row">
                <div className="col-md-8">
                  <div
                    style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      position: "relative",
                      top: "65px",
                      zIndex: "100",
                    }}
                    data-aos="slide-right"
                    //  data-aos = 'slide-left'
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out-cubic"
                    className="project2-content"
                  >
                    <div className="card-body text-end">
                      <h5
                        style={{ fontWeight: "900" }}
                        className="card-title text-start fs-1   fw-600"
                      >
                        {Project4.title}
                      </h5>
                      <div
                        className=" w-100 project-desc"
                        style={{ position: "relative", zIndex: "11" }}
                      >
                        <p className="card-text text-start">{Project4.desc}</p>
                        <a href={`${Project4.link}`}>
                          <button className="animated-btn  float-start">
                            View
                          </button>
                        </a>
                      </div>
                      <div className="techs">
                        <ul
                          style={{
                            listStyle: "none",
                            color: "#979797",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                          }}
                          className="mt-3"
                        >
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project4.techs[0]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project4.techs[1]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project4.techs[2]}
                          </li>
                          {/* <li className='me-md-3 me-lg-3 me-xl-4 me-1 '>REeact js</li> */}
                        </ul>
                      </div>
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                  </div>
                </div>
                <div
                  data-aos-delay="50"
                  data-aos="fade-up"
                  className="col-md-4 project2_pngDIV"
                >
                  {/* <img className='project2_png' style={{
                    position: "relative",
                    left: "-221px",
                
              }} width={600} src={piano} alt="" srcset="" /> */}
                  <div
                    class="project2_png"
                    style={{
                      position: "relative",
                      left: "-268px",
                      top: "-69px",
                      background: `url(${Project4.img}) 73px 63px no-repeat`,
                      height: "600px",
                      width: "600px",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="row">
          <div className="col-10 mx-auto">
            <div className="card mob-card">
              <div className="img_mob">
                <img src={Project4.img} className="card-img-top" alt="sdg" />
              </div>
              <div className="card-body text-dark ">
                <h5 className="card-title">{Project4.title}</h5>
                <p className="card-text">{Project4.desc}</p>
                <a href={Project4.link} className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="row pro-row2 mx-auto ">
          <div className="col-10 mx-auto">
            <div className="card_comp mb-3">
              <div className="row g-0 project-row">
                <div className="col-md-4 project-img">
                  {/* <div className="project-pngDIV"> */}
                  {/* <a href={Project1.link}> */}
                  {/* <img src={piano} width={600} className="project-png rounded-start" /> */}

                  <div
                    data-aos-delay="50"
                    data-aos="fade-up"
                    class="project-pngDIV"
                    style={{
                      position: "relative",
                      left: "-57px",
                      top: "191px",
                      background: `url(${Project5.img}) 73px 63px / contain no-repeat`,
                      height: "600px",
                      width: "600px",
                      overflow: "hidden",
                    }}
                  ></div>

                  {/* </a> */}
                  {/* </div> */}

                  <div
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out-cubic"
                    data-aos="slide-left"
                    className="col-md-8 my-auto project-content"
                  >
                    <div className="card-body text-end">
                      <h5
                        style={{
                          fontWeight: "900",
                        }}
                        className="card-title fs-1   fw-600"
                      >
                        {Project5.title}
                      </h5>
                      <div className=" w-100 project-desc ">
                        <p className="card-text">{Project5.desc}</p>
                        <div className="submitBTN">
                          <a href={`${Project5.link}`}>
                            <button className="animated-btn ">View</button>
                          </a>
                        </div>
                      </div>
                      <div className="techs">
                        <ul
                          style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            color: "#979797",
                          }}
                          className="mt-3"
                        >
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project5.techs[0]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project5.techs[1]}
                          </li>
                          <li className="me-md-3 me-lg-3 me-xl-4 me-1 ">
                            {Project5.techs[2]}
                          </li>
                          {/* <li className='me-md-3 me-lg-3 me-xl-4 me-1 '>REeact js</li> */}
                        </ul>
                      </div>
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          style={{
            marginTop: "30rem",
          }}
          className="row"
        >
          <div className="col-10 mx-auto">
            <div className="card mob-card">
              <div className="img_mob">
                <img src={Project5.img} className="card-img-top" alt="sdg" />
              </div>
              <div className="card-body text-dark ">
                <h5 className="card-title">{Project5.title}</h5>
                <p className="card-text">{Project5.desc}</p>
                <a href={Project5.link} className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
