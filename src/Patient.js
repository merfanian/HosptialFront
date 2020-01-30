import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MediaCard from '../src/MediaCard';
import CardsDeck from '../src/CardsDeck';

class Patinet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nationalId: '',
            firstName: 'Mahdi',
            lastName: 'Erfanian',
            phone: '',
            age: '',
            address: '',
        };
    }

    render() {
        return (
            <div>
                <AppBar color={'secondary'} position="static">
                    <Toolbar>
                        {' '}
                        Welcome back {this.state.firstName}{' '}
                        {this.state.lastName}
                    </Toolbar>
                </AppBar>
                <div
                    style={{
                        paddingTop: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    <CardsDeck
                        cards={[
                            { doctor: 'mahdi', date: 'September 19th' },
                            { doctor: 'asghar', date: 'November 12th' },
                            { doctor: 'akbar', date: 'January 11th' },
                            { doctor: 'ali', date: 'February 14th' },
                        ]}
                    ></CardsDeck>
                </div>
            </div>
        );
    }
}

export default Patinet;
