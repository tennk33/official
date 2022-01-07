import React, { useState } from 'react';
import './style.scss'
import datalist from './workdata.json'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Work from './Work';
import Modal from './Modal';


const Home = () => {

    // language
    const [langK, setLangK] = useState(true)
    // mode
    const [darkmode, setDarkmode] = useState(false)
    // hamburger toggle
    const [hamtoggle, setHamtoggle] = useState(false)

    // data
    const [datas, setDatas] = useState(datalist)
    const [data, setData] = useState(datalist[0])


    // body bg-color
    const bg = document.getElementById('bg')

    if(darkmode) {
        bg.style.background = "rgb(20, 19, 49)";
        bg.style.transition = "2s background";

    } else {
        bg.style.background = "rgb(189, 237, 255)";
        bg.style.transition = "2s background";
    }

    // pages
    const [home, setHome] = useState(true)
    const [about, setAbout] = useState(false)
    const [skills, setSkills] = useState(false)
    const [work, setWork] = useState(false)
    const [contact, setContact] = useState(false)

    const homeview = () => {
        setHome(true)
        setAbout(false)
        setSkills(false)
        setWork(false)
        setContact(false)
        setHamtoggle(false)
    }
    const aboutview = () => {
        setHome(false)
        setAbout(true)
        setSkills(false)
        setWork(false)
        setContact(false)
        setHamtoggle(false)
    }
    const skillsview = () => {
        setHome(false)
        setAbout(false)
        setSkills(true)
        setWork(false)
        setContact(false)
        setHamtoggle(false)
    }
    const workview = () => {
        setHome(false)
        setAbout(false)
        setSkills(false)
        setWork(true)
        setContact(false)
        setHamtoggle(false)
    }
    const contactview = () => {
        setHome(false)
        setAbout(false)
        setSkills(false)
        setWork(false)
        setContact(true)
        setHamtoggle(false)
    }

    // modal
    const [modalActive, setModalActive] = useState(false)
    const onModal = (id) => {
        setData(datas.find(item => item.id === id))
        setModalActive(true)
        
        // scroll top
        window.scrollTo(0,0)
    }

    return (
        <div>
            <div>
                <div className={darkmode ? 'darkmode no-drag' : 'lightmode no-drag'} id={home ? 'wrap1' : 'wrap2'}>
                    <header>
                        {/* toggle */}
                        <div className='toggles'>
                                <div onClick={()=>setLangK(!langK)} className='langToggle'>
                                    {
                                        langK ? 'KOREAN' : 'ENGLISH'
                                    }
                                </div>
                            
                            <div className='mode-switch'>
                                <input type="checkbox" name="switch" id="switch" className='on-off' checked={darkmode} onChange={e => setDarkmode(e.target.checked)} />
                                <label htmlFor="switch" className='switch-label'>
                                    <span className='marble'></span>
                                    <span className='switch-on'><RiSunFill /></span>
                                    <span className='switch-off'><BsFillMoonStarsFill /></span>
                                </label>
                            </div>

                            <div className='hamburger' onClick={()=>setHamtoggle(!hamtoggle)}>
                                <span><GiHamburgerMenu /></span>        
                            </div>
                        </div>

                        {/* gnb */}
                        <ul className='gnb'>
                            <li onClick={homeview}>HOME</li>
                            <li onClick={aboutview}>ABOUT</li>
                            <li onClick={skillsview}>SKILLS</li>
                            <li onClick={workview}>WORK</li>
                            <li onClick={contactview}>CONTACT</li>
                        </ul>
                        {/* toggle gnb */}
                        <div className={hamtoggle ? 'ham-toggle' : 'off'}>
                            <ul className='ham-menu'>
                                <li className="close" onClick={()=>setHamtoggle(!hamtoggle)}><MdClose/></li>
                                <li onClick={homeview}>HOME</li>
                                <li onClick={aboutview}>ABOUT</li>
                                <li onClick={skillsview}>SKILLS</li>
                                <li onClick={workview}>WORK</li>
                                <li onClick={contactview}>CONTACT</li>
                            </ul>
                        </div>

                    </header>

                    {/* background */}
                    <div className={ home ? 'home-section' : 'section-off'}>
                        <div className='circle'></div>
                        <div className='mountains'>
                            <div className='mountain m1'></div>
                            <div className='mountain m2'></div>
                            <div className='mountain m3'></div>
                            <div className='mountain m4'></div>
                            <div className='mountain m5'></div>
                            <div className='mountain m6'></div>
                            <div className='mountain m7'></div>
                            <div className='mountain m8'></div>
                            <div className='mountain m9'></div>
                            <div className='mountain m10'></div>
                        </div>
                        
                        

                        {/* section */}
                        <section>
                            <div className='first-section'>
                                <span>H</span>
                                <span>e</span>
                                <span>l</span>
                                <span>l</span>
                                <span>o</span>
                                <span>!</span>
                            </div>
                            <div className='second-section'>
                                <span>I am Taeeun.</span>
                            </div>
                        </section>
                    </div>

                    {
                        about && <About langK={langK}  />
                    }

                    {
                        skills &&  <Skills langK={langK} darkmode={darkmode} />
                    }
                    {
                        work && <Work langK={langK} data={data} datas={datas} onModal={onModal} />
                    }
                    {
                        contact && <Contact langK={langK}  />
                    }

                    


                    {/* footer */}
                    <div className='footer'>
                        Front-End Portfolio Kim Taeeun
                    </div>
                </div>
            </div>
            
            
            {/* modal */}
            {
                    modalActive && <Modal data={data} setModalActive={setModalActive} setWork={setWork} langK={langK} />
            }


        </div>
    );
};

export default Home;

/*

*/ 