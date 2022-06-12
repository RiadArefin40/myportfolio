import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
  return (
    <div className="grid lg:grid-cols-3 my-10 mx-10">
     
     {
         projects.map(project=><Project key={project._id} project={project}></Project>)
     }
   

      


    </div>
  );
};

export default Projects;
