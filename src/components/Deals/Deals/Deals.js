import React, { Component } from 'react';
import TableDeals from './TableDeals';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import './Deals.css';
import Paper from "@material-ui/core/Paper/Paper";
import Grow from "@material-ui/core/Grow/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList/MenuList";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List/List";

class Deals extends Component{
    state = {
        open: false,
        checkedA: true,
        type: 'deal'
    };
    handleClick = () => {
        this.setState(state => ({open: !state.open}))
    };
    handleClose = event => {
        if(this.anchorEl.contains(event.target)){
            return;
        }
        this.setState({open: false})
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    DealsPaper = event => {
        this.setState({type: event.target.value})
    };

    render(){
        const {open, type} = this.state;
        return(
            <div className='DealsBody'>
                <div className='DealsColumn'>
                    <Button style={{zIndex:1}}
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns = {open ? 'menu': null}
                        aria-haspopus='true'
                        onClick={this.handleClick}
                    >
                        <Icon>settings</Icon>
                    </Button>
                </div>
                <div className='ContentDeals'>
                    <Popper
                        className='PaperDeals'
                        open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            <label style={{textAlign: 'center'}}><h3>Choose Columns</h3></label>
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
                                            <div className='DealsPaperBody'>
                                                <div style={{paddingLeft: '10px'}}>Visible</div>
                                                <ListItem>
                                                    <Checkbox
                                                        checked={this.state.checkedA}
                                                        onChange={this.handleChange('checkedA')}
                                                        value="checkedA"
                                                    />
                                                    <ListItemText>
                                                        asd
                                                    </ListItemText>
                                                </ListItem>
                                                <div style={{paddingLeft: '10px'}}>Not Visible</div>
                                                <div className='DealsPaperBodyButton'>
                                                    <button value='deal' onClick={this.DealsPaper}>Deal</button>
                                                    <button value='person' onClick={this.DealsPaper}>Person</button>
                                                    <button value='organization' onClick={this.DealsPaper}>Organization</button>
                                                </div>
                                                {type === 'deal' && (
                                                    <ListItem>
                                                        <Checkbox
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleChange('checkedA')}
                                                            value="checkedA"
                                                        />
                                                        <ListItemText>
                                                            Deal
                                                        </ListItemText>
                                                    </ListItem>
                                                )}
                                                {type === 'person' && (
                                                    <ListItem>
                                                        <Checkbox
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleChange('checkedA')}
                                                            value="checkedA"
                                                        />
                                                        <ListItemText>
                                                            Person
                                                        </ListItemText>
                                                    </ListItem>
                                                )}
                                                {type === 'organization' && (
                                                    <List>
                                                        <ListItem>
                                                            <Checkbox
                                                                checked={this.state.checkedA}
                                                                onChange={this.handleChange('checkedA')}
                                                                value="checkedA"
                                                            />
                                                            <ListItemText>
                                                                Organization
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <Checkbox
                                                                checked={this.state.checkedA}
                                                                onChange={this.handleChange('checkedA')}
                                                                value="checkedA"
                                                            />
                                                            <ListItemText>
                                                                Organization
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <Checkbox
                                                                checked={this.state.checkedA}
                                                                onChange={this.handleChange('checkedA')}
                                                                value="checkedA"
                                                            />
                                                            <ListItemText>
                                                                Organization
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                )}
                                            </div>
                                            <ListItem className='LeftRight'>
                                                <div className='Left'>
                                                    <Button>Default</Button>
                                                </div>
                                                <div className='Right'>
                                                    <Button>Cancel</Button>
                                                    <Button>Save</Button>
                                                </div>
                                            </ListItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
                <div>
                    <TableDeals/>
                </div>
            </div>
        )
    }
}
export default Deals;