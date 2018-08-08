import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './Header.css';
import SearchForm from './SearchForm';


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
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 2,
    },
    nav: {
        flexGrow:1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    searchForm: {
        flexGrow: 1
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});


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
    handleToggle = () => {
        this.setState(state => ({open: !this.open}))
    };

    render(){

        const { classes } = this.props;
        const {
            auth,
            open
        } = this.state;

        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <SearchForm className={classes.searchForm}/>
                        <div className={classes.nav}>
                            <Button className="btn-nav">
                                <Icon>attach_money</Icon>
                                <Typography variant="subheading" color="inherit">Deals</Typography>
                            </Button>
                            <Button>
                                <Icon>email</Icon>
                                <Typography variant="subheading" color="inherit">Deals</Typography>
                            </Button>
                            <Button>
                                <Icon>calendar_today</Icon>
                                <Typography variant="subheading" color="inherit">Deals</Typography>
                            </Button>
                            <Button>
                                <Icon>person</Icon>
                                <Typography variant="subheading" color="inherit">Deals</Typography>
                            </Button>
                            <Button>
                                <Icon>trending_up</Icon>
                                <Typography variant="subheading" color="inherit">Deals</Typography>
                            </Button>
                        </div>
                        {auth && (
                            <div>
                                <IconButton>
                                    <Icon>
                                        add_circle_outline
                                    </Icon>
                                </IconButton>
                                <IconButton>
                                    <Icon>
                                        contact_support
                                    </Icon>
                                </IconButton>
                                <IconButton>
                                    <Icon>
                                        notification_important
                                    </Icon>
                                </IconButton>
                                <Button
                                    buttonRef = { node => {
                                        this.anchorEl = node;
                                    }}
                                    aria-owns={open ? 'menu-list-grow' : null }
                                    aria-haspopup="true"
                                    onClick={this.handleToggle}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                    <Typography color="white">
                                        SalesLoop
                                    </Typography>
                                </Button>
                                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            id="menu-list-grow"
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={this.handleClose}>
                                                    <MenuList>
                                                        <MenuItem onClick={this.handleClose}>User profile</MenuItem>
                                                        <MenuItem onClick={this.handleClose}>Apps & integrations</MenuItem>
                                                        <MenuItem onClick={this.handleClose}>Setting</MenuItem>
                                                        <Divider/>
                                                        <MenuItem onClick={this.handleClose}>Upgrade plan</MenuItem>
                                                        <MenuItem onClick={this.handleClose}>Add more users</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Header.propTypes = {
    classes : PropTypes.object.isRequired
};

export default withStyles(styles)(Header);