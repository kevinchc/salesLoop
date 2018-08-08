import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Icon from '@material-ui/core/Icon';

export default class SearchForm extends Component{
    render(){
        return(
            <div>
                <Icon>search</Icon>
                <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
            </div>
        )
    }
}