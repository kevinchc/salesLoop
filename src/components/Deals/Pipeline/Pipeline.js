import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import './Pipeline.css';

import {
    Table,

} from 'reactstrap';

class Pipeline extends Component{
    render(){
        return(
            <Table bordered>
                <thead>
                    <tr>
                        <th>Lead In</th>
                        <th>Contact Made</th>
                        <th>Demo Scheduled</th>
                        <th>Proposal Made</th>
                        <th>Negotiations Started</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default Pipeline;