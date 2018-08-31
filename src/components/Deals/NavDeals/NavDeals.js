import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ButtonGroup } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';


import './NavDeals.css';
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Paper from "@material-ui/core/Paper/Paper";
import Grow from "@material-ui/core/Grow/Grow";
import Popper from "@material-ui/core/Popper/Popper";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import ListItem from "@material-ui/core/ListItem/ListItem";

import {Row, Col} from 'reactstrap';

import Radio from "@material-ui/core/es/Radio/Radio";

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});



class FormDialog extends React.Component{
    state = {
        currency: 'EUR',
        selectedValue: 'a',
        openCompany: false
    };

    handleClose = () => {
        this.props.onClose(this.props.selectedValue)
    };

    handleOpenCompany = () => {
        this.setState(state => ({openCompany: !state.openCompany}))
    };

    handleCloseCompany = (event) => {
        console.log(event);
        if (this.anchorEl.contains(event.target)){
            return;
        }
        this.setState({openCompany: false})
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleChangeCheked = event => {
        this.setState({selectedValue: event.target.value})
    };
    render(){
        const { onClose, selectedValue, ...other} = this.props;
        const { openCompany} = this.state;
        return(
            <Dialog onClose={this.handleClose} aria-labelledby='simple-dialog-title' {...other}>
                <Row className='titleAddDeal'>
                    <Col>
                        <DialogTitle id="form-dialog-title">Add deal</DialogTitle>
                    </Col>
                    <Col className='closeAddDeal'>
                        <div onClick={this.handleClose}>X</div>
                    </Col>
                </Row>
                <DialogContent className='formAddDeal'>
                    <ListItem>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Contact person name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>person</Icon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Organization name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>person</Icon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Deal title"
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Deal value"
                        />
                        <TextField
                            id="select-currency-native"
                            select
                            value={this.state.currency}
                            onChange={this.handleChange('currency')}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {currencies.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <div className='ListRadio'>
                            <Radio className='Radio'
                                checked={this.state.selectedValue === 'a'}
                                onChange={this.handleChangeCheked}
                                value="a"
                                name="radio-button-demo"
                                aria-label="A"
                            />
                            <Radio className='Radio'
                                checked={this.state.selectedValue === 'b'}
                                onChange={this.handleChangeCheked}
                                value="b"
                                name="radio-button-demo"
                                aria-label="B"
                            />
                            <Radio className='Radio'
                                checked={this.state.selectedValue === 'c'}
                                onChange={this.handleChangeCheked}
                                value="c"
                                name="radio-button-demo"
                                aria-label="C"
                            />
                            <Radio className='Radio'
                                checked={this.state.selectedValue === 'd'}
                                onChange={this.handleChangeCheked}
                                value="d"
                                color="default"
                                name="radio-button-demo"
                                aria-label="D"
                            />
                        </div>
                    </ListItem>
                    <ListItem>
                        <TextField
                                id="date"
                                label="Expected close date"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                        />
                    </ListItem>
                    <ListItem>
                        <div>
                            <Button
                                buttonRef={node => {
                                    this.anchorEl = node;
                                }}
                                aria-owns={openCompany ? 'menu-list-grow' : null}
                                onClick={this.handleOpenCompany}
                            >Entire company
                            </Button>
                            <Popper open={openCompany} anchorEl={this.anchorEl} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        id="menu-list-grow"
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={this.handleCloseCompany}>
                                                <MenuList>
                                                    <MenuItem onClick={this.handleCloseCompany}>Profile</MenuItem>
                                                    <MenuItem onClick={this.handleCloseCompany}>My account</MenuItem>
                                                    <MenuItem onClick={this.handleCloseCompany}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                        <div style={{position:'absolute', right:'0'}}>
                            <Button>Save</Button>
                        </div>
                    </ListItem>
                </DialogContent>
            </Dialog>
        )
    }
}

FormDialog.propTypes = {
    onClose: PropTypes.func,
    selectedValue: PropTypes.string
};


class NavDeals extends Component{
    state = {
        pipeline: true,
        deals: false,
        timeline: false,
        setting: false,
        user: false,
        exportE: false,
        value: 'one',
        open: false
    };
    handleOpenDialog = () => {
        this.setState({
            open: true
        })
    };
    handleCloseDialog = value => {
        this.setState({
            selectedValue: value,
            open: false
        })
    };

    handleChangePipe = () => {
        this.setState({
            pipeline: true,
            deals: false,
            timeline: false
        })
    };

    handleChangeDeal = () => {
        this.setState({
            pipeline: false,
            deals: true,
            timeline: false
        })
    };

    handleChangeTime = () => {
        this.setState({
            pipeline: false,
            deals: false,
            timeline: true
        })
    };

    handleToggle = () => {
        this.setState(state => ({setting : !state.setting}))
    };
    handleToggleUser = () => {
        this.setState(state => ({user : !state.user}))
        console.log(this.state.user);
    };
    handleToggleExport = () => {
        this.setState(state => ({exportE: !state.exportE}))
    };

    handleCloseSetting = event => {
        this.setState({ setting: false });
    };
    handleCloseUser = event => {
        this.setState({ user: false });
    };
    handleCloseExport = event => {
        this.setState({ exportE: false });
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render(){
        const {
            pipeline,
            deals,
            timeline,
            user,
            exportE,
            value
        } = this.state;
        const { classes} = this.props;

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
                        <IconButton onClick={this.handleChangeTime} component={Link} to="/timeline">
                            <Icon>
                                clear
                            </Icon>
                        </IconButton>
                        <Button className='ButtonAddDeal' onClick={this.handleOpenDialog}>
                            Add deal
                        </Button>
                        <FormDialog open={this.state.open} onClose={this.handleCloseDialog}/>
                        { timeline &&
                        <IconButton>
                            <Icon>
                                settings
                            </Icon>
                        </IconButton>
                        }{ timeline &&
                        <IconButton>
                            <Icon>
                                clear
                            </Icon>
                        </IconButton>
                        }
                    </ButtonGroup>
                </div>
                <div className='NavGroupCenter'>
                    {
                        timeline && (<div>
                            <Button><Icon>keyboard_arrow_left</Icon></Button>
                            <Button><Icon>keyboard_arrow_left</Icon></Button>
                            <Button>Today</Button>
                            <Button><Icon>keyboard_arrow_right</Icon></Button>
                            <Button><Icon>keyboard_arrow_right</Icon></Button>
                        </div>)
                    }
                </div>
                <div className='NavGroupRight'>
                    {deals && (<div>
                        <Button
                            className='ButtonUser'
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={user ? 'menu-list-grow' : null}
                            onClick={this.handleToggleUser}
                        >
                            <Icon className='IconSetting' style={{fontSize: 15, marginRight: 5}}>filter_list</Icon>
                            User
                        </Button>
                        <Popper className='PopperUser' open={user} anchorEl={this.anchorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseUser}>
                                            <div className={classes.root}>
                                                <div className='SearchUser'>
                                                    <TextField className='textField'
                                                               placeholder='Search owner or filter'
                                                               id="input-with-icon-textfield"
                                                               InputProps={{
                                                                   startAdornment: (
                                                                       <InputAdornment position="start">
                                                                           <Icon>search</Icon>
                                                                       </InputAdornment>
                                                                   ),
                                                               }}
                                                    />
                                                </div>
                                                <AppBar position="static">
                                                    <Tabs value={value} onChange={this.handleChange}>
                                                        <Tab value="one" label="FAVORITES" icon={<Icon>person</Icon>}/>
                                                        <Tab value="two" label="OWNERS" icon={<Icon>person</Icon>} />
                                                        <Tab value="three" label="FILTERS" icon={<Icon>person</Icon>}/>
                                                    </Tabs>
                                                </AppBar>
                                                {value === 'one' && <Favorite value={value}/>}
                                                {value === 'two' && <Favorite value={value}/>}
                                                {value === 'three' && <Favorite value={value}/>}
                                            </div>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <Button
                            className='ButtonSetting'
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={exportE ? 'menu-list-grow' : null}
                            onClick={this.handleToggleExport}
                        >
                            <Icon className='IconSetting' style={{fontSize: 15, marginRight: 5}}>more_horiz</Icon>
                        </Button>
                        <Popper open={exportE} anchorEl={this.anchorEl} transition disablePortal style={{zIndex: 4}}>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseExport}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleClose}>Export filter results...</MenuItem>
                                                <MenuItem onClick={this.handleClose}>Data import...</MenuItem>
                                                <MenuItem onClick={this.handleClose} disabled>Show on map</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>)}
                    {pipeline && (<div>
                        <Button
                            className='ButtonSetting'
                            onClick={this.handleToggle}
                            component={Link} to='/stages/pipelines'
                        >
                            <Icon className='IconSetting' style={{fontSize: 15, marginRight: 5}}>settings</Icon>
                            Pipeline settings
                        </Button>
                        <Button
                            className='ButtonUser'
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={user ? 'menu-list-grow' : null}
                            onClick={this.handleToggleUser}
                        >
                            <Icon className='IconSetting' style={{fontSize: 15, marginRight: 5}}>filter_list</Icon>
                            User
                        </Button>
                        <Popper className='PopperUser' open={user} anchorEl={this.anchorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{zIndex:9, transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseUser}>
                                            <div className={classes.root}>
                                                <div className='SearchUser'>
                                                    <TextField className='textField'
                                                               placeholder='Search owner or filter'
                                                                id="input-with-icon-textfield"
                                                                InputProps={{
                                                                    startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <Icon>search</Icon>
                                                                    </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </div>
                                                <AppBar position="static">
                                                    <Tabs value={value} onChange={this.handleChange}>
                                                        <Tab value="one" label="FAVORITES" icon={<Icon>person</Icon>}/>
                                                        <Tab value="two" label="OWNERS" icon={<Icon>person</Icon>} />
                                                        <Tab value="three" label="FILTERS" icon={<Icon>person</Icon>}/>
                                                    </Tabs>
                                                </AppBar>
                                                {value === 'one' && <Favorite value={value}/>}
                                                {value === 'two' && <Favorite value={value}/>}
                                                {value === 'three' && <Favorite value={value}/>}
                                            </div>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>)}
                    {timeline && (<div>
                        <Button
                            className='ButtonSetting'
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={exportE ? 'menu-list-grow' : null}
                            onClick={this.handleToggleExport}
                        >
                            <Icon className='IconSetting' style={{fontSize: 15, marginRight: 5}}>more_horiz</Icon>
                            Pipeline
                        </Button>
                        <Popper open={exportE} anchorEl={this.anchorEl} transition disablePortal style={{zIndex: 4}}>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseExport}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleClose}>Export filter results...</MenuItem>
                                                <MenuItem onClick={this.handleClose}>Data import...</MenuItem>
                                                <MenuItem onClick={this.handleClose} disabled>Show on map</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <Button
                            className='ButtonUser'
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={user ? 'menu-list-grow' : null}
                            onClick={this.handleToggleUser}
                        >
                            <Icon className='IconSetting' style={{fontSize: 15, marginRight: 5}}>filter_list</Icon>
                            User
                        </Button>
                        <Popper className='PopperUser' open={user} anchorEl={this.anchorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{zIndex:9, transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseUser}>
                                            <div className={classes.root}>
                                                <div className='SearchUser'>
                                                    <TextField className='textField'
                                                               placeholder='Search owner or filter'
                                                               id="input-with-icon-textfield"
                                                               InputProps={{
                                                                   startAdornment: (
                                                                       <InputAdornment position="start">
                                                                           <Icon>search</Icon>
                                                                       </InputAdornment>
                                                                   ),
                                                               }}
                                                    />
                                                </div>
                                                <AppBar position="static">
                                                    <Tabs value={value} onChange={this.handleChange}>
                                                        <Tab value="one" label="FAVORITES" icon={<Icon>person</Icon>}/>
                                                        <Tab value="two" label="OWNERS" icon={<Icon>person</Icon>} />
                                                        <Tab value="three" label="FILTERS" icon={<Icon>person</Icon>}/>
                                                    </Tabs>
                                                </AppBar>
                                                {value === 'one' && <Favorite value={value}/>}
                                                {value === 'two' && <Favorite value={value}/>}
                                                {value === 'three' && <Favorite value={value}/>}
                                            </div>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>)}
                </div>
            </header>
        )
    }
}

function Favorite(props) {
    return(
        <div className='Favorite'>
            { props.value === 'one' && (
                <div>
                    <div className='subtitle'>
                        <p>Mark an owner of filter as favorite to make it apper here.</p>
                    </div>
                <div className='owner'>
                    <h4>OWNER</h4>
                </div>
                <MenuItem className="ButtonBottom">
                    <ListItemIcon>
                        <Icon>person</Icon>
                    </ListItemIcon>
                    <ListItemText inset primary="User" />
                </MenuItem>
                <Divider/></div>)
            }
            {
                props.value === 'two' && (
                    <div>
                        <MenuItem className="ButtonBottom">
                            <ListItemText inset primary="Everyone" />
                        </MenuItem>
                        <MenuItem className="ButtonBottom">
                            <ListItemIcon>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText inset primary="User" />
                            <ListItemIcon>
                                <Icon>start</Icon>
                            </ListItemIcon>
                        </MenuItem>
                    </div>
                )
            }
            {
                props.value === 'three' && (
                    <div>
                        <MenuItem className="ButtonBottom">
                            <ListItemText inset primary="User" />
                            <ListItemIcon>
                                <Icon>edit</Icon>
                            </ListItemIcon>
                        </MenuItem>
                    </div>
                )
            }
            <MenuItem className="ButtonBottom">
                <ListItemIcon>
                    <Icon>add</Icon>
                </ListItemIcon>
                <ListItemText inset primary="Add new filter" />
            </MenuItem>
        </div>
    )
}

NavDeals.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(NavDeals);