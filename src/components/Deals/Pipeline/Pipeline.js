import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pipeline.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});


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
        items: getItems(5),
        selected: getItems(5, 5),
        thirty: getItems(5,10),
        forty: getItems(5,15),
        five: getItems(5,20)

    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected',
        droppable3: 'thirty',
        droppable4: 'forty',
        droppable5: 'five'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        console.log(source.droppableId+":"+destination.droppableId);

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }
            this.setState(state);
        }else if(
            destination.droppableId === 'droppable2' || source.droppableId === 'droppable2' ||
            destination.droppableId === 'droppable3'||
            destination.droppableId === 'droppable4' || destination.droppableId === 'droppable5'){
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            switch (destination.droppableId) {
                case 'droppable2':
                    this.setState({
                        items: result.droppable,
                        selected: result.droppable2,
                    });
                    break;
                case 'droppable3':
                    this.setState({
                        items: result.droppable,
                        thirty: result.droppable3,
                    });
                    break;
                case 'droppable4':
                    this.setState({
                        items: result.droppable,
                        forty: result.droppable4,
                    });
                    break;
                case 'droppable5':
                    this.setState({
                        items: result.droppable,
                        five: result.droppable5,
                    });
                    break;
                default:
                    break;
            }
            switch (source.droppableId) {
                case 'droppable2':
                    this.setState({
                        items: result.droppable,
                        selected: result.droppable2,
                    });
                    break;
                case 'droppable3':
                    this.setState({
                        items: result.droppable,
                        thirty: result.droppable3,
                    });
                    break;
                case 'droppable4':
                    this.setState({
                        items: result.droppable,
                        forty: result.droppable4,
                    });
                    break;
                case 'droppable5':
                    this.setState({
                        items: result.droppable,
                        five: result.droppable5,
                    });
                    break;
                default:
                    break;
            }
        }else if(destination.droppableId === 'droppable3' || source.droppableId === 'droppable3'){
            console.log("hola");
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2,
            });
            console.log("hola")
        }else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                thirty: result.droppable3
            });
        }
        console.log(this.state.items);
        console.log(this.state.selected);
        console.log(this.state.thirty)
    };


    render(){
        let demoScheduled = this.state.demoScheduled;
        let proposalMode = this.state.proposalMode;
        let negotiations = this.state.negotiations;
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
                                <DragDropContext onDragEnd={this.onDragEnd}>
                                    <div className='BodyTable'>
                                        <div className='first'>
                                            <Droppable droppableId="droppable">
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}>
                                                        {this.state.items.map((item, index) => (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}>
                                                                        {item.content}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </div>
                                        <div className='second'>
                                            <Droppable droppableId="droppable2">
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}>
                                                        {this.state.selected.map((item, index) => (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}>
                                                                        {item.content}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </div>
                                        <div className='third'>
                                            <Droppable droppableId="droppable3">
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}>
                                                        {this.state.thirty.map((item, index) => (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}>
                                                                        {item.content}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </div>
                                        <div className='fourth'>
                                            <Droppable droppableId="droppable4">
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}>
                                                        {this.state.forty.map((item, index) => (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}>
                                                                        {item.content}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </div>
                                        <div className='five'>
                                            <Droppable droppableId="droppable5">
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}>
                                                        {this.state.five.map((item, index) => (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}>
                                                                        {item.content}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </div>
                                    </div>
                                </DragDropContext>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Pipeline;