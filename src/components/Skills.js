import {AiFillHtml5, AiOutlineConsoleSql} from 'react-icons/ai'
import {SiJavascript} from 'react-icons/si'
import {FaReact, FaSass, FaJava, FaRobot} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {BsBootstrap} from 'react-icons/bs'
import {DiPython} from 'react-icons/di'
import {VscTerminalCmd} from 'react-icons/vsc'
import {BiGitBranch} from 'react-icons/bi'

export default function Skills(){
    return(<div className="skills">
        <div className="skills_web card">
            <div className="skills__web-title">
                Web technical skills:<br></br><br></br>
            </div>

            <div className="skills__web-list">
                <li> <AiFillHtml5 className = 'icon'/> &nbsp; HTML/CSS </li>
                <li> <SiJavascript className = 'icon'/> &nbsp; JavaScript </li>
                <li> <FaReact className = 'icon'/> &nbsp; React JS</li>
                <li> <GrNode className = 'icon'/> &nbsp; Node JS</li>
                <li> <BsBootstrap className = 'icon'/> &nbsp; Bootstrap</li>
                <li> <FaSass className = 'icon'/> &nbsp; Sass</li>
            </div>
        </div>

        <div className="skills_other card">
            <div className="skills__other-title">
                Other technical skills:<br></br><br></br>
            </div>

            <div className="skills__other-list">
                <li> <DiPython className = 'icon'/> &nbsp; Python</li>
                <li> <FaRobot className = 'icon'/> &nbsp; UiPath</li>
                <li> <AiOutlineConsoleSql className = 'icon'/> &nbsp; SQL</li>
                <li> <FaJava className = 'icon'/> &nbsp;Java</li>
                <li> <VscTerminalCmd className = 'icon'/> &nbsp; C/C++</li>
                <li> <BiGitBranch className = 'icon'/> &nbsp; Git</li>
            </div>
        </div>
    </div>)
}