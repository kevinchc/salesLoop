import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import './Pipeline.css';
import {Container, Col, Row } from 'reactstrap';
import GridList from "@material-ui/core/es/GridList/GridList";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import List from "@material-ui/core/es/List/List";


class Pipeline extends Component{
    state = {
        tasks: [{name:"Learn Angular",
            category:"wip",
            bgcolor: "yellow"},

            {name:"React",
                category:"wip",
                bgcolor:"pink"},

            {name:"Vue",
                category:"complete",
                bgcolor:"skyblue"}
        ]
    };
    onDragStart = (ev,id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("id",id);
    };
    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        let tasks = this.state.tasks.filter((task) => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });
        this.setState({
            ...this.state,
            tasks
        });
    }

    render(){
        var tasks = {wip:[], complete:[]};
        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <div key={t.name}
                     onDragStart={(e) => this.onDragStart(e,t.name)}
                     draggable
                     className="draggable"
                     style={{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            )
        });
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
                                            <ListItem>
                                                <ListItemText>Kevin</ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Kevin</ListItemText>
                                            </ListItem>
                                        </List>
                                    </div>
                                    <div className='second'>
                                        <List>
                                            <ListItem>
                                                <ListItemText>CHAGUA</ListItemText>
                                            </ListItem>
                                        </List>
                                    </div>
                                    <div className='third'><h4>Demos Scheduled</h4></div>
                                    <div className='fourth'><h4>Proposal Made</h4></div>
                                    <div className='five'><h4>Negotiations Started</h4></div>
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