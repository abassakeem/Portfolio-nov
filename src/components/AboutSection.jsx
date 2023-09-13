import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhp,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faCodepen,
 
  faSquareGithub,
  faGithub,
  faBootstrap,
  faFigma,
  faNodeJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import {
  faLinkedinIn,
  faInstagram,
 
  

} from '@fortawesome/free-brands-svg-icons'

import { AiFillGithub } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from "framer-motion";
function AboutSection() {
    
    
    return ( 
        <div className="sound-section wrapper ">
            <div className="body">
                <div className="sound-section-content content">
                       <div className="top d-flex flex-col align-items-center justify-content-center gap-5">
                        <p className="text about-header">About Me</p>
                        <div className="hmm ">
                        {/* <div className="stage-cube-cont ">
      <div className="cubespinner ">
                            <div className="face face1  ">
                            <FontAwesomeIcon icon={faReact} color="#61dafb" />
                            </div>
                            <div className="face face2 main-face-2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                            </div>
                            <div className="face face3">
                            <FontAwesomeIcon icon={faCss3} color="#2965f1" />
                            </div>
                            <div className="face face4">
                            <FontAwesomeIcon icon={faBootstrap} color="#F8F9FA" />
                            </div>
                            <div className="face face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#f0db4f" />
                            </div>
                            <div className="face face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#171515 " />
                            </div>
                        </div>
                        </div> */}
      </div></div>
                        <motion.span className="about-description "
                        initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                          }}
                        >"I hold a degree in computer science from Babcock University, with my primary focus being on frontend development using React. However, I also have a strong fascination with Node.js, Three.js, and the intricate world of cloud engineering. I excel in collaborating closely with clients to construct solutions that are not only efficient and scalable but also deeply attuned to user needs. I'm enthusiastic about the prospect of partnering with you to transform your ideas into tangible outcomes!"</motion.span>
                        <ul className="unordered">
                            <li>
                                <h5>
                                    Front-end 
                                </h5>
                                <motion.div 
                                initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.9,
                          }}
                                className="tech-logo tech-logo1">
                                <BiLogoReact/>
                                </motion.div>
                                <p className="about-text"><small>Proficient in front-end technologies including React.js, HTML, CSS, and Bootstrap, complemented by strong skills in JavaScript.</small></p>
                                
                            </li>
                            <li>
                                <h5>
                                   Back-end
                                </h5>
                                <motion.div 
                                initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 1.15,
                          }}
                                className="tech-logo2 tech-logo">
                                <FaNodeJs/>
                                </motion.div>
                                <p className="about-text"><small>Well-versed in back-end development with experience in Node.js, PHP, and database optimization.</small></p>
                                
                            </li>
                            <li>
                                <h5>
                                  Version Control
                                </h5>
                                <motion.div 
                                initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 1,
                          }}
                                className="tech-logo tech-logo3">
                                <AiFillGithub/>
                                </motion.div>
                                <p className="about-text"><small>I have a strong background in using Git and GitHub for continuous integration and deployment of software.</small></p>

                                
                            </li>
                            
                        </ul>
                </div>
            </div>
        </div>
     );
}

export default AboutSection;