import React, { Component } from 'react';

import './Header.css';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';


class Header extends Component{
    state = {
        auth : true,
        open: false,
        notification: false,
        support: false,
        add: false,
        search: false,
        input:'',
        value: 1
    };
    handleUser = () => {
        this.setState(state => ({open: !state.open, notification:false, support:false}));
    };
    handleClose = event => {
        if(this.anchorEl3.contains(event.target)){
            return;
        }
        this.setState({ open: false});
    };

    handleSearch = (event) => {
        if(event.target.value !== ''){
            this.setState({search: true, input: event.target.value});
        }else {
            this.setState({search: false, input: event.target.value});
        }

    };
    handleCloseSearch = event => {
        this.setState({search: false})
    };

    handleNotification = () => {
        this.setState(state => ({notification: !state.notification, open: false,support:false}));
        console.log(this.state.notification)
    };

    handleCloseNotification = event => {
        if(this.anchorEl2.contains(event.target)){
            return;
        }
        this.setState({ notification: false});
    };
    handleSupport = () => {
        this.setState(state => ({support: !state.support, notification: false, open: false}));
    };

    handleCloseSupport = event => {
        if(this.anchorEl3.contains(event.target)){
            return;
        }
        this.setState({ support: false});
    };

    IconButtonClick (value) {
        this.setState({value: value})
    };

    render(){

        const {
            open,
            notification,
            support,
            search,
            value,
            input
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
                                onChange={this.handleSearch}
                                aria-owns={search ? 'menu-list-grow' : null}
                                aria-haspopup="true"
                                className='margin'
                                id="input-with-icon-textfield"
                                placeholder='Search'
                                InputProps={{
                                    startAdornment: (
                                        <IconButton position="start" >
                                            <Icon>search</Icon>
                                        </IconButton>
                                    ),
                                }}
                            />
                            <Popper className='SearchPanel' open={search} anchorEl={this.anchorEl} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        id="menu-list-grow"
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={this.handleCloseSearch}>
                                                <div className='IconsSearch'>
                                                    <div>
                                                    <Button onClick={() => this.IconButtonClick(1)}><Icon>person</Icon></Button>
                                                    <Button onClick={() => this.IconButtonClick(2)}><Icon>person</Icon></Button>
                                                    <Button onClick={() => this.IconButtonClick(3)}><Icon>person</Icon></Button>
                                                    <Button onClick={() => this.IconButtonClick(4)}><Icon>person</Icon></Button>
                                                    <Button onClick={() => this.IconButtonClick(5)}><Icon>person</Icon></Button>
                                                    </div>
                                                    <div>
                                                        {value === 1 && (<p>No results for '{input}'</p>)}
                                                        {value === 2 && (<p>No results for '{input}'</p>)}
                                                        {value === 3 && (<p>No results for '{input}'</p>)}
                                                        {value === 4 && (<p>No results for '{input}'</p>)}
                                                        {value === 5 && (<p>No results for '{input}'</p>)}
                                                    </div>
                                                </div>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                        <div className='HeaderNav'>
                            <ul>
                                <li>
                                    <Button component={Link} to='/deals'>
                                        Deals
                                    </Button>
                                </li>
                                <li>
                                    <Button component={Link} to='/mail/inbox'>
                                        Mail
                                    </Button>
                                </li>
                                <li>
                                    <Button component={Link} to='/activities/list'>
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
                                    <Button
                                        buttonRef={node => {
                                            this.anchorEl1 = node;
                                        }}
                                        aria-owns={support ? 'menu-list-grow1': null}
                                        aria-haspopup="true"
                                        variant="contained"
                                        onChange={this.handleSupport}
                                    >
                                        <Icon>
                                            record_voice_over
                                        </Icon>
                                    </Button>
                                    <Popper className='MenuSupport' open={support} anchorEl={this.anchorEl1} transition disablePortal>
                                        {({TransitionProps, placement}) => (
                                            <Grow
                                                {...TransitionProps}
                                                id="menu-list-grow1"
                                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={this.handleCloseSupport}>
                                                        <MenuList>
                                                            <MenuItem onClick={this.handleCloseSupport}>No notification</MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </li>
                                <li>
                                    <Button
                                        buttonRef={node => {
                                            this.anchorEl2 = node;
                                        }}
                                        aria-owns={notification ? 'menu-list-grow2': null}
                                        aria-haspopup="true"
                                        variant="contained"
                                        onClick={this.handleNotification}
                                    >
                                        <Icon>
                                            notifications
                                        </Icon>
                                    </Button>
                                    <Popper className='MenuNotification' open={notification} anchorEl={this.anchorEl2} transition disablePortal>
                                        {({TransitionProps, placement}) => (
                                            <Grow
                                                {...TransitionProps}
                                                id="menu-list-grow2"
                                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={this.handleCloseNotification}>
                                                        <MenuList>
                                                            <MenuItem onClick={this.handleCloseNotification}>No notification</MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </li>
                                <li>
                                    <Button
                                        buttonRef={node => {
                                            this.anchorEl3 = node;
                                        }}
                                        aria-owns={open ? 'menu-list-grow': null}
                                        aria-haspopup="true"
                                        variant="contained"
                                        onClick={this.handleUser}>
                                        <Icon>person</Icon>
                                    </Button>
                                    <Popper className='MenuUser' open={open} anchorEl={this.anchorEl3} transition disablePortal>
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
                                                            <Divider/>
                                                            <MenuItem onClick={this.handleClose}>Apps & Integrations</MenuItem>
                                                            <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                                                            <Divider/>
                                                            <MenuItem onClick={this.handleClose}>Automation</MenuItem>
                                                            <Divider/>
                                                            <MenuItem onClick={this.handleClose}>Upgrade Plan</MenuItem>
                                                            <MenuItem onClick={this.handleClose}>Add more Users</MenuItem>
                                                            <MenuItem onClick={this.handleClose}>Invite friends & earn money</MenuItem>
                                                            <Divider/>
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