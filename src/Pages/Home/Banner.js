import React from "react";

const Banner = () => {
  return (
    <div>




      <div className="hero min-h-screen bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/QryPDM2/likhon.jpg"
            className="max-w-md rounded-3xl shadow-2xl"
          />
          <div className="ml-10">
            <h1 className="text-6xl ">Mostofa Riad <br /> Arefin</h1>
            <h2 className="text-4xl pt-5 text-teal-600 font-bold">
              Full-Stack Web Developer
            </h2>
            <p className="py-6">
              I work as a MERN stack developer. Looking for an organisation
              where I can explore my talents in Front-End and Back-End Web
              Development to give excellent service and also sharpen my skills
              with a continuous learning environment..
            </p>
            <div className="grid grid-cols-6 py-10">
                <img className="h-16" src="https://i.ibb.co/q0SQp3F/structure.png" alt="" />
                <img className="h-16" src="https://i.ibb.co/SJnd7tQ/nodejs.png" alt="" />
                <img className="h-16" src="https://i.ibb.co/prZ82yP/html-5.png" alt="" />
                <img className="h-16" src="https://i.ibb.co/RNRyzqs/css.png" alt="" />
                <img className="h-16" src="https://i.ibb.co/G7yxL3t/java-script.png" alt="" />
            </div>
          <a target="_blank" href="https://www.linkedin.com/in/riad-likhon/">  <button className="btn px-10">Hire Me</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
