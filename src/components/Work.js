import React from 'react';
import WorkList from './WorkList';

const Work = ({datas, onModal, langK}) => {

    return (
        <div>
            <div className='article-wrap'>
                <div className='article'>
                    <h1 className='article-header'>WORK :</h1>
                    
                    {/* map */}
                    <div className='work-wrap'>
                        {
                            datas.map( data => <WorkList key={data.id} data={data} onModal={onModal} langK={langK} /> )
                        }
                    </div>
                    <h1>♥</h1>
                </div>
            </div>
        </div>
    );
};

export default Work;

/*

*/ 