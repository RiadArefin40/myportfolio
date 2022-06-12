import React from "react";

const Contactme = () => {
  return (
    <div className="hero  bg-base-100">
       
    
        <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Email Body"
              ></textarea>
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button className="btn w-60 mx-auto">Submit</button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Contactme;
