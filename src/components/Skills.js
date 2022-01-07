import React from 'react';
import ajax from '../images/AJAX_logo.png'
import css3 from '../images/CSS3_logo.png'
import Github from '../images/GitHub_logo.png'
import html from '../images/HTML5_logo.png'
import javascript from '../images/Javascript_logo.png'
import jquery from '../images/JQuery_Logo.png'
import less from '../images/LESS_Logo.png'
import react from '../images/React_logo.png'
import redux1 from '../images/Redux_logo1.png'
import redux2 from '../images/Redux_logo2.png'
import sass from '../images/Sass_Logo.png'
import styled from '../images/styled-components.png'
import styled2 from '../images/styled-components2.png'
import bootstrap from '../images/bootstrap_logo.png'

const Skills = ({darkmode}) => {
    return (
        <div>
            <div className='article-wrap'>
                <div className='article'>
                    <h1 className='article-header'>SKILLS : </h1>
                    <div className='skills-section'>
                        <h1>▪ Main Skills</h1>
                        <div className='skills-first'>
                            <img src={html} alt="HTML5" />
                            <img src={css3} alt="CSS3" />
                            <img src={javascript} alt="Javascript" />
                            <img src={jquery} alt="jQuery" />
                            <img src={react} alt="React" />
                            <img src={ajax} alt="AJAX" />
                            <img src={sass} alt="SASS" />
                            <img src={Github} alt="GitHub" />
                        </div>
                        <h1>▪ Experience</h1>
                        <div className='skills-second'>
                            <img src={bootstrap} alt="Bootstrap" />
                            {
                                darkmode ? <img src={styled2} alt="Styled-components" /> : <img src={styled} alt="Styled-components" />
                            }
                            
                            {
                                darkmode ? <img src={redux1} alt="Redux" /> : <img src={redux2} alt="Redux" /> 
                            }
                            
                            <img src={less} alt="Less" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

/*
    주사용기술 
    HTML5, CSS3, SASS, Javascript, jQuery, React, Ajax
    사용경험있는 기술
    Bootstrap, Styled-components, Redux, LESS


*/ 