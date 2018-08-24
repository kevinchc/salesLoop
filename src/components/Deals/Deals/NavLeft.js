import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class NavLeft extends Component{
    render(){
        return(
            <div>
                <Button>
                    <Icon>filter_list</Icon>
                    All open dails
                    <Icon>keyboard_arrow_down</Icon>
                </Button>
                <Button>
                    <Icon>
                        edit
                    </Icon>
                </Button>
                <Button>
                    <Icon>
                        more_horiz
                    </Icon>
                </Button>
            </div>
        )
    }
}

export default NavLeft;