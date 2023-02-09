import pic from '../Files/pic.jpg'
import pdf from '../Files/Vasile Radu - Front-End Dev.pdf'
import Skills from './Skills'

export default function AboutMe(){
    return(
        <div id = "about-me" className="about-me">

            <div className="about-me__title"><span class="underline--magical">About me</span></div>

            <div className="about-me__content">
                <div className="about-me__image"><img src={pic} alt = ""></img></div>
                <div className="about-me__description">
                    My journey in web development started at the age of 16 when I taught myself how to build websites using WordPress. This sparked a lifelong interest in coding and technology, leading me to pursue a degree in Computer Science.<br></br>
                    <br></br>During my time at the university, I honed my skills in HTML, CSS, JavaScript and NodeJs. I also gained a deeper understanding of the underlying principles of computer science and how they can be applied to web development.
                    I am excited to bring my passion and skills to new projects and continue to grow as a front-end developer.</div>
            </div>
            <a href={pdf} target="_blank" rel="noreferrer"><div className="about-me__resume typewriter">Check my resume {'>'}</div></a>
            <Skills/>
            
        </div>
            
    )
}