import React from 'react';
import Banner from './Banner';
import Contactme from './Contactme';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-4xl text-center py-10 font-mono' >My Skills</h1>
            <Skills></Skills>
            <h1 className='text-4xl text-center py-10 font-mono' >My Projects</h1>
            <Projects></Projects>
            <h1 className='text-4xl text-center py-10 font-mono' >Feel free to Contact Me!</h1>
            <Contactme></Contactme>
        </div>
    );
};

export default Home;