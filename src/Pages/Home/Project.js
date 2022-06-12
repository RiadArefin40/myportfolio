import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const navigate = useNavigate();
    const navigateToProjectDetails = id=>{
        navigate(`/projectdetails/${id}`)
    }
    console.log(project.img)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className='h-80'
            src={project.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl text-center ">
            {project.name}
            <div className="badge badge-warning ml-2">{project.type}</div>
          </h2>
          <p>{project.des}</p>
          <div className="card-actions justify-end">
              {(project._id==="1")&& <>  <div className="badge badge-accent">NodeJs</div>
            <div className="badge badge-accent">ReactJs</div>
            <div className="badge badge-accent">ExpressJs</div>
            <div className="badge badge-accent">MongoDB</div>
            <div className="badge badge-accent">FireBase</div>
            <div className="badge badge-accent">Tailwind</div>
            <div className="badge badge-accent">DaisyUI</div>

            <div className="badge badge-accent">Stripe</div></>}
            {(project._id==="2")&& <>  <div className="badge badge-accent">NodeJs</div>
            <div className="badge badge-accent">ReactJs</div>
            <div className="badge badge-accent">ExpressJs</div>
            <div className="badge badge-accent">MongoDB</div>
            <div className="badge badge-accent">FireBase</div>
            <div className="badge badge-accent">Bootstrap</div>
            <div className="badge badge-accent">React-Router</div>
        

            </>}
            {(project._id==="3")&& <>  
            <div className="badge badge-accent">ReactJs</div>
            <div className="badge badge-accent">ReactHooks</div>
          
            <div className="badge badge-accent">FireBase-Hooks</div>
            <div className="badge badge-accent">FireBase</div>
            <div className="badge badge-accent">Bootstrap</div>
            <div className="badge badge-accent">ReactRouter</div>
        

            </>}
          

          </div>
          <div className='flex justify-around mt-10'>
           <button className='btn  px-8' onClick={()=>navigateToProjectDetails(project._id)}>Details</button>
         
           {
            (project._id==="1")&& <a target="_blank" href="https://bmoto-parts.web.app/"><button className='btn  px-8'>Live Prev</button></a>
           }
            {
            (project._id==="2")&& <a target="_blank" href="https://sky-gadgets.web.app/"><button className='btn  px-8'>Live Prev</button></a>
           }
            {
            (project._id==="3")&& <a target="_blank" href="https://fitness-press-84846.web.app/"><button className='btn  px-8'>Live Prev</button></a>
           }
          </div>
       
        </div>
      </div>
    );
};

export default Project;