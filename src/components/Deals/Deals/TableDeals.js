import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import './TableDeals.css';
import Popper from "@material-ui/core/Popper/Popper";
import Grow from "@material-ui/core/Grow/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {Data} from '../../../api/Data';

class ItemTable extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        open: false,
        username: ''
    };

    handleToggleEdit = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleCloseEdit = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };
    updateInput = (event) => {
        this.setState({username: event.target.value});
    };
    handleSendValues = () => {
        console.log(this.state.username);
        this.handleToggleEdit()
    };

    render(){
        const {
          open
        } = this.state;
        return(
            <div className='ItemTable'>
                <Typography>
                    {this.props.name}
                </Typography>
                <div className='ItemButton'>
                    <IconButton
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggleEdit}
                    >
                        <Icon>edit</Icon>
                    </IconButton>
                    <Popper className='EditItemTable' open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper className='ItemContentButton'>
                                    <ClickAwayListener onClickAway={this.handleCloseEdit}>
                                        <MenuList>
                                            <MenuItem>Edit {this.props.name}</MenuItem>
                                            <MenuItem><Input
                                                type='text'
                                                defaultValue={this.props.name}
                                                inputProps={{
                                                    'aria-label': 'Description',
                                                }}
                                                onChange={this.updateInput}
                                            />
                                            </MenuItem>
                                            <div>
                                                <Button onClick={this.handleCloseEdit}>Cancel</Button>
                                                <Button
                                                    onClick={this.handleSendValues}
                                                    style={{backgroundColor: '#2FCF70', color:'white'}}
                                                >Save</Button>
                                            </div>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        )
    }
}


class TableDeals extends React.Component {
    state = {
        open: false,
        dealIn: [
            {name:"1", stage:1, status:0},
            {name:"1", stage:1},
            {name:"1", stage:1},
            {name:"1", stage:1},
            {name:"1", stage:1}
        ],
        contactMade: [
            {name:"2", stage:2},
            {name:"2", stage:2},
            {name:"2", stage:2},
            {name:"2", stage:2}
        ],
        demoScheduled: [
            {name:"3", stage:3},
            {name:"3", stage:3},
            {name:"3", stage:3}
        ],
        proposalMode: [
            {name:"4", stage:4},
            {name:"4", stage:4}
        ],
        negotiations: [
            {name:"5", stage:5}
        ]
    };
    render() {
        const { open } = this.state;
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow style={{height:'40px'}}>
                            <TableCell style={{borderRight:'1px solid'}}>Dessert</TableCell>
                            <TableCell style={{borderRight:'1px solid'}}>Calories</TableCell>
                            <TableCell style={{borderRight:'1px solid'}}>Fat (g)</TableCell>
                            <TableCell style={{borderRight:'1px solid'}}>Carbs (g)</TableCell>
                            <TableCell>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map(row => {
                            return (
                                <TableRow>
                                    <TableCell><ItemTable name={row.id}/></TableCell>
                                    <TableCell><ItemTable name={row.organization}/></TableCell>
                                    <TableCell><ItemTable name={row.value}/></TableCell>
                                    <TableCell><ItemTable name={row.stage}/></TableCell>
                                    <TableCell><ItemTable name={row.status}/></TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}


export default TableDeals;