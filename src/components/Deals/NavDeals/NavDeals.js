import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ButtonGroup, Button, ButtonDropdown, DropdownMenu, DropdownItem,DropdownToggle } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

import './NavDeals.css';


export class Setting extends Component{
    constructor(props){
        super(props);
        this.toogle = this.toogle.bind(this);
        this.state = {
            dropdownOpen:false
        }
    }

    toggle(){
        this.setState({
            dropdownOpen : !this.state.dropdownOpen
        })
    }


    render(){
        return(
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        )
    }
}

class NavDeals extends Component{
    state = {
        pipeline: true,
        deals: false,
        timeline: false,
    };

    changePipeline = () => {
        this.setState({
            pipeline: true,
            deals: false,
            timeline: false
        })
    };

    changeDeals = () => {
        this.setState({
            pipeline: false,
            deals: true,
            timeline: false
        })
    }

    render(){
        const {
            pipeline,
            deals,
            timeline
        } = this.state;

        return(
            <header className='NavDeals'>
                <div className='NavGroupLeft'>
                    <ButtonGroup>
                        <IconButton component={Link} to="/pipeline" onClick={this.changePipeline}>
                            <Icon>
                                bar_chart
                            </Icon>
                        </IconButton>
                        <IconButton component={Link} to="/deals" onClick={this.changeDeals}>
                            <Icon>
                                format_align_justify
                            </Icon>
                        </IconButton>
                        <IconButton component={Link} to="/deals">
                            <Icon>
                                clear
                            </Icon>
                        </IconButton>
                        <Button className='ButtonAddDeal'>
                            AddDeal
                        </Button>
                    </ButtonGroup>
                </div>
                <div className='NavGroupCenter'>
                </div>
                <div className='NavGroupRight'>
                    {pipeline && (<p>Hi</p>)}
                </div>
            </header>
        )
    }
}

function Price() {
}



function User() {
    
}
function AddDeal() {

}

function f() {
    
}

export default NavDeals;