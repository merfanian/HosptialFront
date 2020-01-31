import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MediaCard from '../src/MediaCard';
import CardsDeck from '../src/CardsDeck';
import Axios from 'axios';

class Patinet extends Component {
    constructor(props) {
        super(props);
        var id = this.props.location.search;
        id = id.slice(4);

        this.state = {
            nationalId: id,
            firstName: '',
            lastName: '',
            phone: '',
            age: '',
            address: '',
        };
    }

    componentDidMount() {
        Axios.get(
            'https://jsonplaceholder.typicode.com/todos/' +
                this.state.nationalId,
        ).then(res => {
            let todo = res.data;
            this.setState({ firstName: todo.title });
        });
    }

    render() {
        return (
            <div>
                <AppBar color={'default'} position="static">
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
