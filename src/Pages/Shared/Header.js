import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
    
    <a target="_blank" href="https://github.com/RiadArefin40">  <img className='h-10 mx-5' src="https://i.ibb.co/5h0KJP7/github.png" alt="" /></a>
    {/* <Link to='/'><a className="btn btn-ghost normal-case text-3xl">R A</a></Link> */}
    <a target="_blank" href="https://www.linkedin.com/in/riad-likhon/"><img className='h-10' src="https://i.ibb.co/nbXVFqf/linkedin.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal mr-5">
      <li className='mr-2 text-xl'><Link to='/'><a>HOME</a></Link></li>
      
      <li className='ml-2 text-xl'><Link to="/about"><a>ABOUT</a></Link></li>
      <li className='ml-2 text-xl'><Link to='/projects'><a>PROJECTS</a></Link></li>
      <li className='ml-2 text-xl'><Link to="/blogs"><a>BLOGS</a></Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a  target="_blank" href='https://docs.google.com/document/d/1XFSbYjcCDcOhDKH8h3YuyYzC2FsHuYKv1uYy0w-16g0/edit?usp=sharing' className="btn px-10">Download Resume</a>
  </div>
</div>
        </div>
    );
};

export default Header;