import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

class NavDeals extends Component{
    render(){
        return(
            <header>
                <IconButton component={Link} to="/pipeline">
                    <Icon>
                        bar_chart
                    </Icon>
                </IconButton>
                <IconButton component={Link} to="/deals">
                    <Icon>
                        format_align_justify
                    </Icon>
                </IconButton>
            </header>
        )
    }
}

export default NavDeals;