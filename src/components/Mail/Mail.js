import React, { Component } from 'react';
import './Mail.css'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class Mail extends Component{
    render() {
        return(
            <div className='RootMail'>
                <div className='Left'>
                    <Button><Icon style={{backgroundColor:'#00C862', width:'40px', height:'35px', color: 'white', paddingTop: '5px'}}>person</Icon></Button>
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
                                <li><Button><Icon>person</Icon>Filter</Button></li>
                                <li><Button><Icon>person</Icon>Mark</Button></li>
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
                                <li><Button><Icon>person</Icon></Button></li>
                            </ul>
                        </div>
                    </header>
                    <main className='RightMain'>
                        asdas
                    </main>
                </div>
            </div>
        )
    }
}

export default Mail;