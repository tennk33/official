import React from 'react';

const WorkList = ({data, onModal }) => {
    const { id, thumbnail, title } = data

    return (
        <div>
            <div className="work-list"  >
                <img src={process.env.PUBLIC_URL + thumbnail} alt="thumbnail" className='work-thumb' onClick={()=>onModal(id)} />
                <div className='work-title'>
                    <span>{title}</span>
                </div>         
            </div>
        </div>
    );
};

export default WorkList;