import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Project from './Project';

const ProjectDetails = () => {
    const {id} = useParams();
   
    console.log(id);
    const projects = [
        {
            name:"Bmoto-Parts",
            _id:"1",
            img:"https://i.ibb.co/g9kKYBc/Web-capture-11-6-2022-125937-bmoto-parts-web-app.jpg",
            des:"Bmoto-Parts is a full stack Responsive SPA for Wholesale moto-parts Supplier. Built with Mern-Stack. ",
            type:"Full-Stack",
            det:" • Admin Panel is Developed For Products & Order Management • Authentication & Authorization developed with Firebase & JWT•  Integration of stripe payment gateway .Technology: React,Tailwind,Daisy-UI, MongoDB, Express, Node, Firebase, Stripe",
            Client_side: "https://github.com/RiadArefin40/Bmoto-Parts-Clinet-Side-Full-stack-",
            Server_Side:"https://github.com/RiadArefin40/Bmoto-parts-server-side" 
    
        },
        {
            name:"Sky-gadgets",
            _id:"2",
            img:"https://i.ibb.co/6y0XKS7/Web-capture-11-6-2022-13328-sky-gadgets-web-app.jpg",
            des:"Sky-gadgets is a full stack ecommerce website for selling gadgets and electronics built with Mern-stack",
            type:"Full-Stack",
            det:"• Responsive SPA with product purchase facilities.• Authentication & Authorization developed with Firebase & JWT• React Router Implemented to Route through the SPA.Technology: React, Custom Hooks, Context API, MongoDB, Express,Firebase",
            Client_side:"https://github.com/RiadArefin40/Sky-gadgets-client-side" ,
            Server_Side: "https://github.com/RiadArefin40/Sky-gadgets-server-side" 
    
        },
        {
            name:"Fitness-press",
            _id:"3",
            img:"https://i.ibb.co/hKs70kz/Web-capture-11-6-2022-133219-fitness-press-84846-web-app.jpg",
            des:"Fitness-press is a Responsive SPA for fitness training institutes.",
            type:"Front-End",
            det:"• Firebase authentication system• Dynamic landing page and responsive design • Dynamic routing system using react-router-dom Technology: React,Tailwind,Daisy-UI, MongoDB, Express, Node, Firebase, Stripe",
            Client_side:"https://github.com/RiadArefin40/fitness-press"
        }

    ]
   
     const project = projects.find(project=> project._id === id);
    console.log(project)
   
    return (
        <div className='m-20'>
            <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={project.img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{project.name}</h1>
            <p className="py-6">{project.des}</p>
            <p className="py-6">{project.det}</p>
             <p className='py-6'>GitHub Clientside Link: {project. Client_side}</p>
             <p className='py-6'>GitHub Servertside Link: {project. Server_Side}</p>
          </div>
        </div>
      </div>
        </div>
        
    );
};

export default ProjectDetails;