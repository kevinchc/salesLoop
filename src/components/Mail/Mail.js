import React, { Component } from 'react';
import './Mail.css'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Popper from "@material-ui/core/Popper/Popper";
import Grow from "@material-ui/core/Grow/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

class Mail extends Component{
    state = {
        filter: false,
        marker: false
    };

    handleOpenFilter = () => {
        this.setState(state => ({filter: !state.filter}));
        console.log(this.state.filter)
    };
    handleCloseFilter = event => {
        if (this.anchorEl1.contains(event.target)) {
            return;
        }
        this.setState({ filter: false });
    };
    handleOpenMarker = () => {
        this.setState(state => ({marker: !state.marker}))
        console.log(this.state.marker);
    };
    handleCloseMarker = event => {
        if( this.anchorEl2.contains(event.target)){
            return;
        }
        this.setState({marker: false})
    };

    render() {
        const {
            filter,
            marker
        } = this.state;

        return(
            <div className='RootMail'>
                <div className='Left'>
                    <Button><Icon style={{backgroundColor:'#00C862', width:'40px', height:'35px', color: 'white', paddingTop: '5px'}}>edit</Icon></Button>
                    <Button><Icon>person</Icon></Button>
                    <Button><Icon>person</Icon></Button>
                    <Button><Icon>person</Icon></Button>
                    <Button><Icon>person</Icon></Button>
                </div>
                <div className='Right'>
                    <header className='RightHeader'>
                        <div className='NavLeft'>
                            <ul>
                                <li>
                                    <Button><Icon>person</Icon></Button>
                                    <Button><Icon>person</Icon></Button>
                                </li>
                                <li><Button><Icon>person</Icon></Button></li>
                                <li>
                                    <Button
                                        buttonRef = { node => { this.anchorEl1 = node;}}
                                        aria-owns = { filter ? 'menu-list-grow' : null}
                                        aria-haspopup = 'true'
                                        onClick={this.handleOpenFilter}
                                    >
                                        <Icon>person</Icon>Filter
                                    </Button>
                                </li>
                                <Popper className='MenuFilter' open={filter} anchorEl={this.anchorEl1} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            id="menu-list-grow"
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={this.handleCloseFilter}>
                                                    <MenuList>
                                                        <MenuItem onClick={this.handleCloseFilter}>Profile</MenuItem>
                                                        <MenuItem onClick={this.handleCloseFilter}>My account</MenuItem>
                                                        <MenuItem onClick={this.handleCloseFilter}>Logout</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                                <li>
                                    <Button
                                        buttonRef = { node => {this.anchorEl2 = node;}}
                                        aria-owns = { marker ? 'menu-list-grow' : null}
                                        aria-haspopup = 'true'
                                        onClick = {this.handleOpenMarker}
                                    ><Icon>person</Icon>Mark</Button>
                                </li>
                                <Popper className='MenuMark' open={marker} anchorEl={this.anchorEl2} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            id="menu-list-grow"
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={this.handleCloseMarker}>
                                                    <MenuList>
                                                        <MenuItem onClick={this.handleCloseMarker}>Profile</MenuItem>
                                                        <MenuItem onClick={this.handleCloseMarker}>My account</MenuItem>
                                                        <MenuItem onClick={this.handleCloseMarker}>Logout</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </ul>
                        </div>
                        <div className='NavRight'>
                            <ul>
                                <li>
                                    <TextField className='textField'
                                               placeholder='Search'
                                               id="input-with-icon-textfield"
                                               InputProps={{
                                                   startAdornment: (
                                                       <InputAdornment position="start">
                                                           <Icon>search</Icon>
                                                       </InputAdornment>
                                                   )
                                               }}/>
                                </li>
                                <li>
                                    <Button>
                                        <Icon>person</Icon>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <main className='RightMain'>
                        <div className='MailCard'>
                            <div className='Scroll'>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                                <h1>Kevin</h1>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Mail;