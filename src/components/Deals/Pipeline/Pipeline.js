import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import './Pipeline.css';
import {Container, Col, Row } from 'reactstrap';
import GridList from "@material-ui/core/es/GridList/GridList";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import List from "@material-ui/core/es/List/List";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const ItemSource = {
    beginDrag(props){
        return {};
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Item extends Component{
    render(){
        const {connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
               kevin
            </div>
        )
    }
}

Item.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

class Pipeline extends Component{
    state = {
        dealIn: [
            {name:"1", stage:1},
            {name:"1", stage:1},
            {name:"1", stage:1},
            {name:"1", stage:1},
            {name:"1", stage:1}
        ],
        contactMade: [
            {name:"2", stage:2},
            {name:"2", stage:2},
            {name:"2", stage:2},
            {name:"2", stage:2}
        ],
        demoScheduled: [
            {name:"3", stage:3},
            {name:"3", stage:3},
            {name:"3", stage:3}
        ],
        proposalMode: [
            {name:"4", stage:4},
            {name:"4", stage:4}
        ],
        negotiations: [
            {name:"5", stage:5}
        ]
    };
    render(){
        let dealIn = this.state.dealIn;
        let contactMade = this.state.contactMade;
        let demoScheduled = this.state.demoScheduled;
        let proposalMode = this.state.proposalMode;
        let negotiations = this.state.negotiations;
        const { connectDragSource, isDragging } =this.props;
        return(
            <div>
                <div className='TablePipeline'>
                    <table>
                        <tbody>
                            <tr className='HeadPipeline'>
                                <div className='HeadTable'>
                                    <div className='leadin'><h4>Lead In</h4></div>
                                    <div className='contactmade'><h4>Contact Made</h4></div>
                                    <div className='demoscheduled'><h4>Demos Scheduled</h4></div>
                                    <div className='proposalmade'><h4>Proposal Made</h4></div>
                                    <div className='negotiationsstarted'><h4>Negotiations Started</h4></div>
                                </div>
                            </tr>
                            <tr>
                                <div className='BodyTable'>
                                    <div className='first'>
                                        <List>
                                        {dealIn.map(item => (
                                            <ListItem>
                                                <ListItemText>{item.name}</ListItemText>
                                            </ListItem>
                                        ))}
                                        </List>
                                    </div>
                                    <div className='second'>
                                        <List>
                                            {contactMade.map(item => (
                                                <ListItem>
                                                    <ListItemText>{item.name}</ListItemText>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                    <div className='third'>
                                        <List>
                                            {demoScheduled.map(item => (
                                                <ListItem>
                                                    <ListItemText>{item.name}</ListItemText>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                    <div className='fourth'>
                                        <List>
                                            {proposalMode.map(item => (
                                                <ListItem>
                                                    <ListItemText>{item.name}</ListItemText>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                    <div className='five'>
                                        <List>
                                            {negotiations.map(item => (
                                                <ListItem>
                                                    <ListItemText>{item.name}</ListItemText>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Pipeline;