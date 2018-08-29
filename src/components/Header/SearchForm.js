import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default class SearchForm extends Component{
    state = {
      search: false
    };

    handleOpen = () => {
        console.log("asdasd");
    };
    handleClose = (event) => {
        if(this.anchorEl.contains(event.target)){
            return;
        }
        this.setState({search: false})
    };

    render(){
        const {
          search
        } = this.state;

        return(
            <div>
                <Button onClick={this.handleOpen}>
                    <Icon>search</Icon>
                </Button>
                <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                <Popper open={search} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        )
    }
}