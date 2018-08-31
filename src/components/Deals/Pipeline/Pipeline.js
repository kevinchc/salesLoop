import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pipeline.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

//Generador de mi data
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
 * Moves un item de una lista a otra lista.
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
    background: isDragging ? 'red' : 'grey',

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

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            switch (source.droppableId) {
                case 'droppable2':
                    state = { selected: items };
                    break;
                case 'droppable3':
                    state = { thirty: items };
                    break;
                case 'droppable4':
                    state = { forty: items };
                    break;
                case 'droppable5':
                    state = { five: items };
                    break;
                default:
                    break;
            }
            console.log(this.state.items)
            this.setState(state);

        }else if(
            source.droppableId === 'droppable'){
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
        }else if(source.droppableId === 'droppable2'){
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            switch (destination.droppableId) {
                case 'droppable':
                    this.setState({
                        items: result.droppable,
                        selected: result.droppable2,
                    });
                    break;
                case 'droppable3':
                    this.setState({
                        selected: result.droppable2,
                        thirty: result.droppable3,
                    });
                    break;
                case 'droppable4':
                    this.setState({
                        selected: result.droppable2,
                        forty: result.droppable4,
                    });
                    break;
                case 'droppable5':
                    this.setState({
                        selected: result.droppable2,
                        five: result.droppable5,
                    });
                    break;
                default:
                    break;
            }
        }else if(source.droppableId === 'droppable3'){
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            switch (destination.droppableId) {
                case 'droppable':
                    this.setState({
                        thirty: result.droppable3,
                        items: result.droppable,
                    });
                    break;
                case 'droppable2':
                    this.setState({
                        thirty: result.droppable3,
                        selected: result.droppable2,
                    });
                    break;
                case 'droppable4':
                    this.setState({
                        thirty: result.droppable3,
                        forty: result.droppable4,
                    });
                    break;
                case 'droppable5':
                    this.setState({
                        thirty: result.droppable3,
                        five: result.droppable5,
                    });
                    break;
                default:
                    break;
            }
        }else if(source.droppableId === 'droppable4'){
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            switch (destination.droppableId) {
                case 'droppable':
                    this.setState({
                        forty: result.droppable4,
                        items: result.droppable,
                    });
                    break;
                case 'droppable2':
                    this.setState({
                        forty: result.droppable4,
                        selected: result.droppable2,
                    });
                    break;
                case 'droppable3':
                    this.setState({
                        forty: result.droppable4,
                        thirty: result.droppable3,
                    });
                    break;
                case 'droppable5':
                    this.setState({
                        forty: result.droppable4,
                        five: result.droppable5,
                    });
                    break;
                default:
                    break;
            }
        }
        else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            switch (destination.droppableId) {
                case 'droppable':
                    this.setState({
                        five: result.droppable5,
                        items: result.droppable,
                    });
                    break;
                case 'droppable2':
                    this.setState({
                        five: result.droppable5,
                        selected: result.droppable2,
                    });
                    break;
                case 'droppable3':
                    this.setState({
                        five: result.droppable5,
                        thirty: result.droppable3,
                    });
                    break;
                case 'droppable4':
                    this.setState({
                        five: result.droppable5,
                        forty: result.droppable4,
                    });
                    break;
                default:
                    break;
            }
        }
        console.log(this.state.items);
        console.log(this.state.selected);
        console.log(this.state.thirty);
        console.log(this.state.forty);
        console.log(this.state.five);
    };
    render(){
        return(
            <div>
                <div className='TablePipeline'>
                    <div className='HeadPipeline'>
                        <ul>
                            <li><h4>Lead In</h4></li>
                            <li><h4>Contact Made</h4></li>
                            <li><h4>Demos Scheduled</h4></li>
                            <li><h4>Proposal Made</h4></li>
                            <li><h4>Negotiations Started</h4></li>
                        </ul>
                    </div>
                    <div className='BodyPipeline'>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Pipeline;