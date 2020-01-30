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
            <div style={{ alignSelf: 'center', alignItems: 'center' }}>
                <AppBar color={'secondary'} position="static">
                    <Toolbar>
                        {' '}
                        Welcome back {this.state.firstName}{' '}
                        {this.state.lastName}
                    </Toolbar>
                </AppBar>
                <CardsDeck
                    cards={[
                        { doctor: 'mahdi', date: 'september 19th' },
                        { doctor: 'ali', date: 'today' },
                    ]}
                ></CardsDeck>
            </div>
        );
    }
}

export default Patinet;
