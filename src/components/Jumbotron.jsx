import React from "react";
import { AiFillLinkedin,AiFillGithub,AiOutlineMail,AiOutlineDownload } from 'react-icons/ai'
import { motion } from "framer-motion";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
function Jumbotron() {
   const tooltip = (
      <Tooltip id="tooltip">
        <strong><small>Download Resume</small></strong>
      </Tooltip>
    );
   
    
    return ( 
        <div className="jumbotron-section wrapper">
            <div className="title welcome">Welcome</div>
            <p className="text" > Hi, I'm</p>
            <motion.p
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
               delay: 2,
             }}
            className="text text-light">LANRE- ABASS AKEEM  AKINFOLARIN</motion.p>
            <span className="description">
               I develop sexy webpages 
               <br/>
               <small>.....I play with three js too ;)</small>
            </span>
            <ul className="links text-center ">
               <div className="  connect-links d-flex justify-content-center align-items-center">

               
                <li className="social-icon">
                    <a className="" href="https://github.com/abassakeem" target="_blank"> <AiFillGithub/></a>
                 </li>
                 <li className="social-icon">
                    <a className="" href="https://www.linkedin.com/in/akeem-lanre-abass-618199229/" target="_blank"><AiFillLinkedin/></a>
                 </li>
                
                 <li className="social-icon">
                    <a  href="mailto:lanreabassab1@gmail.com" target="_blank"><AiOutlineMail/></a>
                 </li>
                 <li className="social-icon">
                 <OverlayTrigger placement="top"  overlay={tooltip}>
                    <a  href="https://drive.google.com/drive/u/0/folders/1B8TVbnRmBd5oOcViu580ce4ZSN3wOKPp"><AiOutlineDownload/></a>
                    </OverlayTrigger>
                 </li>
                 </div>
            </ul>
        </div>
     );
}

export default Jumbotron;