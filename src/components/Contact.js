import React from 'react';
import { BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { FcCloseUpMode } from "react-icons/fc";
import img from '../images/leaf.png'

const Contact = () => {
    return (
        <div>
            <div className='article-wrap'>
                <div className='article'>
                    <h1 className='article-header'>CONTACT :</h1>

                    <div className='contact-header'>
                        <h1><FcCloseUpMode/></h1>
                        <h2>Thank you for visiting </h2>
                    </div>

                    <div className='contact-section'>
                        <p>Kim Taeeun</p> <br />
                        <span><GrMail/></span><p>tennk33@gmail.com</p> <br />
                        <span><FaPhoneAlt /></span><p>(+82)010-7236-0330</p> <br />
                        <span><BsGithub /></span><a href='https://github.com/tennk33' target="_blank">https://github.com/tennk33</a>
                    </div>

                    <img src={img} alt="" className='contact-img' />
                    <img src={img} alt="" className='contact-img' />

                </div>
            </div>
        </div>
    );
};

export default Contact;

/*
    연락처
    이름
    메일주소 지메일
    폰번호 (+82) 010-7236-0330
    깃허브주소

*/ 