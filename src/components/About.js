import React, { useEffect } from "react";
import "./components.css";
// import image from "./Image2.jpg"
// import photo from "./Images/photo5.png"
// import photo2 from "./Images/photo3.png"
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div
      style={{ height: "max-content" }}
      className="d-flex flex-row align-content-center mt-5 text-white mx-auto  row bg-primary container-fluid"
    >
      <div style={{}} className="container my-5">
        <div className="row featurette">
          <div className="col-md-7">
            <span
              data-aos="fade-up"
              data-aos-offset={250}
              className="portfolio-title"
            >
              <h2
                data-aos-offset={250}
                data-aos="fade-up"
                style={{ fontSize: "50px", fontWeight: "600" }}
                className="featurette-heading  text-white fw-500  display-3 m_text"
              >
                My Portfolio{" "}
              </h2>
            </span>
            <p
              data-aos-offset={250}
              data-aos="slide-up"
              style={{ fontSize: "20px", opacity: "0.7" }}
              className="lead "
            >
              <div className="my-4">
                Hy I am <b>Hamza</b> , A creative and talented Web Designer with
                front end development skills . I am passionate about leveraging
                my diverse backgrounds to decipher challenging problems and
                create delightful experiences.
              </div>
              I honed my skills at Python Programming, Technical writing, and
              Web development .I develop websites with HTML, CSS and JavaScript.
              I have top skills in using design softwares like PhotoShop,
              Illustrator and Premier Pro
              <div className="my-4">
                Being a diligent, hardworking and result oriented student, I
                always work towards achieving best result on each project I lay
                my hands on. For extra details, do check my Cv above
              </div>
            </p>
          </div>

          <div
            data-aos-offset={250}
            data-aos="fade-up"
            className="col-md-5 portfolio-div"
          >
            <div className="cardi">
              {/* <img data-aos-offset = {250} data-aos = "fade-up" width={400}  class="mx-auto d-block  bd-placeholder-img portfolio-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={portfolio_photo} alt="" srcset="" /> */}
            </div>
            {/* <img data-aos-offset = {250} data-aos = "fade-up" width={400}  class="mx-auto d-block  bd-placeholder-img portfolio-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={photo2} alt="" srcset="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
