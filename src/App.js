
import './Styles/App.css';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import {useEffect, useState} from 'react'
import AboutMe from './components/AboutMe';
import {AiOutlineLinkedin, AiFillGithub, AiFillMail, AiFillFilePdf, AiOutlineFilePdf} from 'react-icons/ai'
import pdf from './Files/Vasile Radu - Front-End Dev.pdf'
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const [navbarColor, setNavbarColor] = useState("");



  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY < window.innerHeight){
        setNavbarColor("")
      }else if(window.scrollY > window.innerHeight && window.scrollY < window.innerHeight*2){
        setNavbarColor("#EBA687");
      }
    })
    
  })
  

  return (
    <div className="App">
      <Navbar color = {navbarColor}></Navbar>
      <div id="home">
        <div className='home__wrapper'>
          <div className='home__title'>Hi, I'm Vasile Radu | <br></br> <span class="underline--magical">Front-End</span> Developer</div>
          <div className='home__icons'><a href='https://www.linkedin.com/in/radu-vasile-4281671ba/' target="_blank" rel="noreferrer"><AiOutlineLinkedin className='icon'/></a>
          <a href='https://github.com/Rakooa37' target="_blank" rel="noreferrer"><AiFillGithub className='icon'/></a>
          <a href={pdf} target="_blank" rel="noreferrer"><AiOutlineFilePdf className='icon'/></a>
          <a href="mailto:vasile.radu.cristian@gmail.com?Subject=Hello%20User" target="_blank" rel="noreferrer"><AiFillMail className='icon'/></a>
          </div>
          <div className='home__description'>Highly motivated and technically skilled Cybernetics Graduate. &#127891;
            With a perspective of lifelong learning and passionate about the creative aspect of this field. &#127912;</div>
        </div>
        <div className='cloud one'></div>
        <div className='cloud two'></div>
        <div className='cloud three'></div>
        <div className='cloud four'></div>
        <div className='cloud five'></div>
        <div className='cloud six'></div>
        <div className='cloud seven'></div>
        <div className='cloud eight'></div>
        <div className='cloud nine'></div>
        <div className='cloud ten'></div>
      </div>
      
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        
    </div>
  );
}

export default App;
