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


let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function createDate() {
    
}

class ItemTable extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className='ItemTable'>
                <Typography>
                    {this.props.name}
                </Typography>
                <div className='ItemButton'>
                    <IconButton
                        onClick={this.props.handleToggleEdit}
                    >
                        <Icon>edit</Icon>
                    </IconButton>
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
    handleToggleEdit = () => {
        console.log("hola");
        this.setState(state => ({ open: !state.open }));
    };

    handleCloseEdit = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
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
                        {rows.map(row => {
                            return (
                                <TableRow>
                                    <ItemTable name={row.calories}/>
                                    <TableCell>{row.calories}</TableCell>
                                    <TableCell>{row.fat}</TableCell>
                                    <TableCell>{row.carbs}</TableCell>
                                    <TableCell>{row.protein}</TableCell>
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