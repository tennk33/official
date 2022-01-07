import React from 'react';
import flower from '../images/flower2.png'

const About = ({langK}) => {
    return (
        <div>
            <div className='article-wrap'>
                <div className='article'>
                    <h1 className='article-header'>ABOUT ME : </h1>
                    <img src={flower} alt="flower" className='flower' />
                    {
                        langK &&
                        <div className='about-section'>
                            <ul>
                                <li>▪ 안녕하세요!</li>
                                <li>▪ 프론트엔드 개발자를 꿈꾸는 <span>김태은</span>입니다.</li>
                                <li>▪ 현재 웹 프론트엔드 분야를 공부하고 있습니다.</li>
                                <li>▪ 저는 호기심이 많고 새로운 것을 배우는 걸 좋아하며 여러가지 도전을 통해 성장하고 배우려고 합니다.</li>
                                <li>▪ 또한 웹 사이트를 만들고 직접 사용해보며 더 나은 편의성을 추구하고 있습니다.</li>
                                <li>▪ 지금은 프론트엔드 분야만 공부하고 있지만 언젠가는 백엔드 지식 또한 습득하고 싶습니다.</li>
                            </ul>
                            <div className='about-card'>
                                <div className='about-card1'>
                                    <span>이름 | </span><p>김태은</p>
                                    <span>사는 곳 | </span><p> 인천</p>
                                </div>
                                <div className='about-card2'>
                                    <span>학력 | </span><p> 명지전문대학교</p>
                                    <span>전공 | </span><p> 영어과</p>
                                    <span>프론트엔드 | </span><p>그린 컴퓨터 아트학원 <br/>이젠 아카데미</p>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        !langK &&
                        <div className='about-section'>
                            <ul>
                                <li>▪ Hello!</li>
                                <li>▪ I am <span>Kim Taeeun</span>, who dreams of becoming a Front-end developer.</li>
                                <li>▪ I am currently studying the web front-end field.</li>
                                <li>▪ I am curious and like to learn new things, and I try to improve and learn through various challenges.</li>
                                <li>▪ Also, I'm looking for better convenience by creating and using websites myself.</li>
                                <li>▪ Now I'm only studying the front-end field, but I also want to acquire back-end knowledge one day.</li>
                            </ul>
                            <div className='about-card'>
                                <div className='about-card1'>
                                    <span>Name | </span><p>Kim Taeeun</p>
                                    <span>Location | </span><p>Incheon, Korea</p>
                                </div>
                                <div className='about-card2'>
                                    <span>College | </span><p> Myongji College</p>
                                    <span>Major | </span><p>English</p>
                                    <span>Front-End | </span><p>Green Computer Academy <br/>EZEN Academy</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default About;

/*


*/ 