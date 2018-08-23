import React, { Component } from 'react';

import './Pipeline.css';

class Pipeline extends Component{
    render(){
        return(
            <div className='RootPipeline'>
                <div className='LeadIn'>
                    1
                </div>
                <div className='ContactMade'>
                    2
                </div>
                <div className='DemoScheduled'>
                    3
                </div>
                <div className='ProposalMade'>
                    4
                </div>
                <div className='Negotiations'>
                    5
                </div>
            </div>
        )
    }
}

export default Pipeline;