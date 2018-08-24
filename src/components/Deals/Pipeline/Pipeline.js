import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import './Pipeline.css';

class Pipeline extends Component{
    render(){
        return(
            <Paper className='RootPipeline'>
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
            </Paper>
        )
    }
}

export default Pipeline;