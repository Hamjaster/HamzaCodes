import React, { useRef, useState } from "react";
import "./components.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
let r = "";

export default function Contact() {
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

  const form = useRef();

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
        style={{
          marginTop: "159px",
          // marginTop: "159px",
          marginLeft: "0",
          marginRight: "0",
          width: "100%",
        }}
        className="row contact bg-primary text-white "
      >
        <div id="background_contact">@</div>
        <div className=" container my-5 col-11">
          <h2
            style={{ fontWeight: "600" }}
            e
            className="m_text my-1 text-white display-4"
          >
            Contact Me
          </h2>
          <div className="lead mb-5">
            If you have any query or question, don't hesitate to use the form.
            <br />
            Don't worry, I will not bite you :)
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div class="mb-3">
              <label htmlFor="exampleFormControlInput1" class="form-label">
                Name :
              </label>
              <input
                value={inpVal}
                onChange={getInput}
                name="user_name"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address :
              </label>
              <input
                value={emailVal}
                onChange={getEmail}
                name="user_email"
                type="email"
                className="form-control EnterEmail"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>

            <div class="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message :
              </label>
              <textarea
                value={textaVal}
                onChange={getTexta}
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div
              style={{ width: "min-content", padding: 0 }}
              className="submitBTN d-block "
            >
              <button type="submit" className=" text-primary  submitbtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
