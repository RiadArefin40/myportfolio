import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import ProjectDetails from './Pages/Home/ProjectDetails';
import Projects from './Pages/Home/Projects';
import Blog from './Pages/Blogs/Blog';
import Banner from './Pages/Home/Banner';

function App() {
  return (
    <div className="">
      <Header></Header>
     
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Banner/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path='/projectdetails/:id' element={<ProjectDetails></ProjectDetails>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
