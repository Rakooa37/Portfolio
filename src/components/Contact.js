
import {AiOutlineLinkedin, AiFillGithub, AiFillMail, AiOutlineFilePdf} from 'react-icons/ai'
import pdf from '../Files/Vasile Radu - Front-End Dev.pdf'

export default function Contact(){
    return(
        <div className="contact" id="#contact">
            <div className="contact__title">Get in <span class="underline--magical">touch</span></div>
            <div className="contact__email">vasile.radu.cristian@gmail.com</div>
            <div className="contact__icons">
                <a href='https://www.linkedin.com/in/radu-vasile-4281671ba/' target="_blank" rel="noreferrer"><AiOutlineLinkedin className='icon'/></a>
                <a href='https://github.com/Rakooa37' target="_blank" rel="noreferrer"><AiFillGithub className='icon'/></a>
                <a href={pdf} target="_blank" rel="noreferrer"><AiOutlineFilePdf className='icon'/></a>
                <a href="mailto:vasile.radu.cristian@gmail.com?Subject=Hello%20User" target="_blank" rel="noreferrer"><AiFillMail className='icon'/></a>
            </div>
        </div>
    )
}