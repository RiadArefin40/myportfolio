import React from "react";

const Skills = () => {
  return (
    <div className="">
      <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">HTML</h2>
            <h2 className="card-title">92%</h2>
          </div>

          <progress
            className="progress progress-accent "
            value="92"
            max="100"
          ></progress>
           <div className="flex justify-between">
            <h2 className="card-title">CSS</h2>
            <h2 className="card-title">90%</h2>
          </div>
          <progress
            className="progress progress-accent "
            value="90"
            max="100"
          ></progress>
           <div className="flex justify-between">
            <h2 className="card-title">JAVA_SCRIPT</h2>
            <h2 className="card-title">85%</h2>
          </div>
          <progress
            className="progress progress-accent "
            value="85"
            max="100"
          ></progress>
           <div className="flex justify-between">
            <h2 className="card-title">REACT</h2>
            <h2 className="card-title">85%</h2>
          </div>
          <progress
            className="progress progress-accent "
            value="85"
            max="100"
            
          ></progress>
           <div className="flex justify-between">
            <h2 className="card-title">NodeJs</h2>
            <h2 className="card-title">70%</h2>
          </div>
          <progress
            className="progress progress-warning "
            value="70"
            max="100"
            
          ></progress>
           <div className="flex justify-between">
            <h2 className="card-title">ExpressJs</h2>
            <h2 className="card-title">75%</h2>
          </div>
          <progress
            className="progress progress-warning "
            value="75"
            max="100"
            
          ></progress>
           <div className="flex justify-between">
            <h2 className="card-title">TailWind</h2>
            <h2 className="card-title">90%</h2>
          </div>
          <progress
            className="progress progress-accent "
            value="85"
            max="100"
            
          ></progress>
           <div className="flex justify-between">
            <h2 className="card-title">BootsTrap</h2>
            <h2 className="card-title">85%</h2>
          </div>
          <progress
            className="progress progress-accent "
            value="85"
            max="100"
            
          ></progress>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.55" d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
};

export default Skills;
