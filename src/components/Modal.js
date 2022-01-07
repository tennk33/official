import React from 'react';
import { MdClose } from "react-icons/md";

const Modal = ({data, setModalActive, langK}) => {
    const {title, thumbnail, desc_k, desc_e, pic_pc, pic_pages, pic_respond, function_e, function_k, git, domain, skill} = data

    const modalOff = () => {
        setModalActive(false)
    }

    return (
        <div className='modal-wrap'>
            <div className='modal-bg' onClick={modalOff}></div>
            <div className='popup'>
                <p onClick={modalOff} className='modal-close'> <MdClose /></p>
                <div className='modal-section'>
                    <h1 className='modal-title'>{title}</h1>
                    <img src={process.env.PUBLIC_URL + thumbnail} alt="thumbnail" className='modal-thumb' />
                    
                    <div className='modal-info'>
                        {
                            langK ? <h1>{desc_k}</h1> : <h1>{desc_e}</h1> 
                        } <br />

                        <span>{ langK ? "주요기능 |" : "FUNCTION |"}</span> { langK ? <p>{function_k}</p> : <p>{function_e}</p>} <br />
                        <span>{ langK ? "사용된 언어 |" : "SKILL |"}</span> <p>{skill}</p> <br />
                        <span>GitHub |</span> <a href={git} target='_blank'>{git}</a> <br />
                        <span>Domain |</span> <a href={domain} target='_blank'>{domain}</a> <br />
                    </div>
                    
                    <div className='modal-detail'>
                        <h1>DETAIL VIEW</h1>
                        <h2>MAIN PAGE</h2>
                        <img src={process.env.PUBLIC_URL + pic_pc} alt="img" className='detail-imgs pc-img' />
                        <h2>PAGES</h2>
                        <img src={process.env.PUBLIC_URL + pic_pages} alt="img" className='detail-imgs' />
                        <h2>RESPONSIBILITY</h2>
                        <img src={process.env.PUBLIC_URL + pic_respond} alt="img" className='detail-imgs' />
                    </div>
                    <button onClick={modalOff}>CLOSE</button>
                </div>
                
            </div>
        </div>
    );
};

export default Modal;