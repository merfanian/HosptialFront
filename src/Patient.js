import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MaterialTableDemo from './PatientsTable';
import { ProductCard } from 'react-ui-cards';
import { UserCard } from 'react-ui-cards';
import MediaCard from '../src/MediaCard';
class Patinet extends Component {
    constructor() {
        super();
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
            <view>
                <AppBar color={'secondary'} position="static">
                    <Toolbar>
                        {' '}
                        Welcome back {this.state.firstName}{' '}
                        {this.state.lastName}
                    </Toolbar>
                </AppBar>
                {/* <MaterialTableDemo></MaterialTableDemo> */}
                <MediaCard doctor="mahdi" date="september 19th"></MediaCard>
            </view>
        );
    }
}

export default Patinet;
