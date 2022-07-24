import React from "react";
// import whatsapp from "./Gb/gbBG.jpg";
import "../components.css";
// import { Link } from "react-router-dom";
export default function Blogs(props) {
  return (
    <div className="container">
      <div className="startup  mx-auto my-5  w-75">
        <h1 className="text-center ">My Writings</h1>
        <p className="text-muted">
          I love to write. And I'm happy to write about various topics whether
          it's a technical deep dive or a soft skills piece Here are some of my
          articles according to my likings
        </p>
      </div>

      {/* THis is my blog template */}
      {/* <div className="row my-5">
        <div className="col-10 mx-auto ">


          <div className="row my-4 g-0">

            <div className=" text-portion bg-primary col-7 p-4">
              <h3 className={`text-${props.mode}`}>The Alternative version of 
              Whatsapp you should be using</h3>
              <p className={`text-${props.mode} fs-6 fw-light`}>These days the technology and internet has diminished the human efforts to an unimaginalbe extinct for example Messaging apps play a vital role in our daily life. You must be using Whatsapp which is the most popular....</p>
              <a href= "https://hamjaster.github.io/whatsapp/"  target="_blank" >
              <button className={`${props.mode==='dark'?"animated-btn3":"animated-btn2"}`}>Read</button>
                </a>
                
            </div>
            <div 
            style={
              {
                background:`url(${whatsapp}) center center `,
                backgroundSize:'cover'
              }
            }
            className="image-portion  col-5">

              
            </div>

          </div>


        </div>
      </div> */}
      <h1 className="text-center my-5 mt-5 text-primary">
        No blogs are written till now, hoping in the future free time :)
      </h1>
    </div>
  );
}
