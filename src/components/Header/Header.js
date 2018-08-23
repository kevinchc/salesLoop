import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './Header.css';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';


class Header extends Component{
    state = {
        auth : true,
        anchorEl: null,
        open: false
    };

    handleClose = event => {
        if(this.anchorEl.contains(event.target)){
            return
        }
        this.setState({ open: false});
    };
    handleUser = () => {
      this.setState(state => ({open: !state.open}))
    };

    render(){

        const {
            auth,
            open
        } = this.state;

        return(
            <div className='root'>
                <AppBar position="static" color="default">
                    <Toolbar variant="dense">
                        <div className="HeaderLogo">
                            <IconButton className='menuButton' color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className='HeaderSearch'>
                            <TextField
                                className='margin'
                                id="input-with-icon-textfield"
                                placeholder='Search'
                                InputProps={{
                                    startAdornment: (
                                        <IconButton position="start">
                                            <Icon>search</Icon>
                                        </IconButton>
                                    ),
                                }}
                            />
                        </div>
                        <div className='HeaderNav'>
                            <ul>
                                <li>
                                    <Button component={Link} to='/deals'>
                                        Deals
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        Mail
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        Activities
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        Contacts
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        Statistics
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className='HeaderNavRight'>
                            <ul>
                                <li>
                                    <Button>
                                        0 trial days left
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Icon>
                                            add_box
                                        </Icon>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Icon>
                                            record_voice_over
                                        </Icon>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Icon>
                                            notifications
                                        </Icon>
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        buttonRef={node => {
                                            this.anchorEl = node;
                                        }}
                                        aria-owns={open ? 'menu-list-grow': null}
                                        aria-haspopup="true"
                                        variant="contained"
                                        onClick={this.handleUser}>
                                        <Icon>person</Icon>
                                    </Button>
                                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                        {({TransitionProps, placement}) => (
                                            <Grow
                                                {...TransitionProps}
                                                id="menu-list-grow"
                                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
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
                                </li>
                            </ul>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default Header;