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
        deals: false
    };

    handleChangePipe = () => {
        this.setState({
            pipeline: true,
            deals: false
        })
    };

    handleChangeDeal = () => {
        this.setState({
            pipeline: false,
            deals: true
        })
    }

    render(){
        const {
            pipeline,
            deals
        } = this.state;

        return(
            <header className='NavDeals'>
                <div className='NavGroupLeft'>
                    <ButtonGroup>
                        <IconButton onClick={this.handleChangePipe} component={Link} to="/pipeline">
                            <Icon>
                                bar_chart
                            </Icon>
                        </IconButton>
                        <IconButton onClick={this.handleChangeDeal} component={Link} to="/deals">
                            <Icon>
                                format_align_justify
                            </Icon>
                        </IconButton>
                        <IconButton component={Link} to="/timeline">
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
                    {pipeline && <p>pipeline</p>}
                    {deals && <p>deals</p>}
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