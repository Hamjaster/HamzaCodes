import React, { useRef, useState, useEffect } from "react";
import "./ContactMe.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mapIMG from "./Images/map.png";

let r = "";
export default function ContactMe(props) {
  const form = useRef();
  // const [dis, setdis] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {}, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let [inpVal, setinpVal] = useState("");
  let [emailVal, setemailVal] = useState("");
  let [textaVal, settextaVal] = useState("");
  const getInput = (e) => {
    setinpVal(e.target.value);
  };
  const getEmail = (e) => {
    setemailVal(e.target.value);
  };
  const getTexta = (e) => {
    settextaVal(e.target.value);
  };

  const sendEmail = (e) => {
    // notify();
    e.preventDefault();

    if ((inpVal === "") | (emailVal === "") | (textaVal === "")) {
      toast.warn("You missed a field", {
        autoClose: 500,
        hideProgressBar: false,
      });
    } else {
      emailjs
        .sendForm(
          "service_vxyotcd",
          "template_umq2uh5",
          e.target,
          "0kaS0Fh3vdQJZwSbc"
        )
        .then(
          (result) => {
            r = result.text;
            console.log(r);
            toast.success("Done", { autoClose: 500, hideProgressBar: false });
          },
          (error) => {
            console.log(error);
            r = error;
            toast.error("Error", { autoClose: 500, hideProgressBar: false });
          }
        );

      document.getElementById("exampleFormControlInput1").value = "";
      document.getElementById("exampleFormControlTextarea1").value = "";
      document.querySelector("input.EnterEmail").value = "";
    }
  };
  return (
    <>
      <ToastContainer />

      <div
        style={{ height: "90vh" }}
        className="row  mx-auto  contact my-5  text-primary "
      >
        <motion.div
          initial={{ x: "100vw", y: "-100vh" }}
          animate={{
            x: ["50vw", "10vw", "50vw", "10vw"],
            y: ["-10vh", "-20vh", "60vh", "-4vh"],
            rotate: [0, 45, 90, 45, 0],
          }}
          transition={{ duration: 15 }}
          style={{
            // cursor: "pointer",
            pointerEvents: "none",
          }}
          id="background_contact"
        >
          @
        </motion.div>
        <div className=" container mx-auto contact col-5 my-5    ">
          <motion.h2
            initial={{ x: "-500vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.3,

              type: "spring",
              bounce: 0.3,
            }}
            style={{ fontWeight: "600" }}
            e
            className="m_text my-1 text-primary display-4"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 1.2,
            }}
            className="lead mb-5"
          >
            If you have other request or question, don’t hesitate to use the
            form.
            <br />I promise I don't bite :)
          </motion.div>
          <motion.form
            initial={{ y: "30vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.8,
              duration: 1.6,
            }}
            className={``}
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="forms g-1 row mb-3">
              <div className="col-6 ">
                <input
                  style={{
                    background:
                      props.mode === "dark" ? "#2056a7d0" : "#98c0fdd0",
                    color: props.mode === "dark" ? "black" : "white",
                    height: "54px",
                  }}
                  placeholder="Name"
                  value={inpVal}
                  onChange={getInput}
                  autoComplete="off"
                  name="user_name"
                  type="text"
                  className={`form-control w-100  `}
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="col-6 ">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address :</label> */}
                <input
                  style={{
                    background:
                      props.mode === "dark" ? "#2056a7d0" : "#98c0fdd0",
                    color: props.mode === "dark" ? "black" : "white",
                    height: "54px",
                  }}
                  placeholder="Email"
                  value={emailVal}
                  onChange={getEmail}
                  autoComplete="off"
                  name="user_email"
                  type="email"
                  className="form-control   EnterEmail"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div
              style={{ marginTop: "-10px" }}
              className="forms  d-flex flex-column-reverse mb-3"
            >
              <textarea
                style={{
                  background: props.mode === "dark" ? "#2056a7d0" : "#98c0fdd0",
                  color: props.mode === "dark" ? "black" : "white",
                }}
                placeholder="Brief your message here"
                value={textaVal}
                onChange={getTexta}
                autoComplete="off"
                name="message"
                className="form-control   border-0"
                id="exampleFormControlTextarea1"
                rows="9"
              ></textarea>
              {/* <label htmlFor="exampleFormControlTextarea1" className="form-labels textarea-label">Message :</label> */}
            </div>

            <div
              style={{ width: "min-content", padding: 0 }}
              className="submitBTN d-block "
            >
              <button type="submit" className=" text-primary   animated-btn2">
                Submit
              </button>
            </div>
          </motion.form>
        </div>
        <motion.div
          className="container mx-auto location col-5  my-2  "
          initial={{ x: "10vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0.2,
            delay: 2.3,
          }}
          style={{
            color: "black",
          }}
        >
          <div
            style={{
              background: "#3883f3",
            }}
            className={`location d-flex  text-${
              props.mode === "dark" ? "black" : "white"
            }   flex-row justify-content-between  p-4    `}
          >
            <i height={100} class="fa-solid fa-location-dot fa-2x"></i>
            <h4>Wah Cantt, Pakistan</h4>
          </div>
          <div
            style={{
              background: "#3883f3",
            }}
            className={`phone d-flex    text-${
              props.mode === "dark" ? "black" : "white"
            }    flex-row justify-content-between  p-4    `}
          >
            <i class="fa-solid fa-phone fa-2x"></i>
            <h4>+92 333 5475431</h4>
          </div>
          <div
            style={{
              background: "#3883f3",
            }}
            className={`email d-flex text-${
              props.mode === "dark" ? "black" : "white"
            }   flex-row justify-content-between  p-4    `}
          >
            <i class="fa-solid fa-envelope fa-2x"></i>
            <h4>hamzashah.dev@gmail.com</h4>
          </div>
          <div
            style={{
              background: `url(${mapIMG}) center center no-repeat`,
              width: "100%",
              height: "400px",
              backgroundSize: "cover",
            }}
            className="mapIMG-portion"
          >
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7026307.316086195!2d66.86805668749999!3d30.695505619728344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1656662534448!5m2!1sen!2s" width={"100%"} height={400} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            {/* <img src={mapIMG} width = {'100%'} height = {400} alt="" srcset="" /> */}
          </div>
        </motion.div>
      </div>
    </>
  );
}
