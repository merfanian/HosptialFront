import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MediaCard from '../src/MediaCard';
import CardsDeck from '../src/CardsDeck';
import Axios from 'axios';
import urls from './Urls';

class Patinet extends Component {
    constructor(props) {
        super(props);
        var id = this.props.location.search;
        id = id.slice(4);

        this.state = {
            nationalId: id,
            firstName: null,
            lastName: null,
            phone: null,
            age: null,
            address: null,
            visits: null,
            isLoading: true,
            nameIsLoading: true,
        };
    }

    componentWillMount() {
        Axios.get(
            urls.getVisitsOfSpecialPatient.replace(
                '#id',
                this.state.nationalId,
            ),
        ).then(res => {
            console.log(res);
            this.setState({ visits: res.data });
            this.setState({ isLoading: false });
        });

        console.log(urls.getPatient.replace('#id', this.state.nationalId));

        Axios.get(urls.getPatient.replace('#id', this.state.nationalId)).then(
            res => {
                this.setState({
                    firstName: res.data[0].f_name,
                    lastName: res.data[0].l_name,
                });
                this.setState({ nameIsLoading: false });
            },
        );
    }

    render() {
        return (
            <div>
                <AppBar color={'default'} position="static">
                    {this.state.nameIsLoading ? (
                        <view>Fetching data ...</view>
                    ) : (
                        <Toolbar>
                            {' '}
                            Welcome back {this.state.firstName}{' '}
                            {this.state.lastName}
                        </Toolbar>
                    )}
                </AppBar>
                <div
                    style={{
                        paddingTop: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    {' '}
                    {this.state.isLoading ? (
                        <view>Fetching your data ... </view>
                    ) : (
                        <CardsDeck cards={this.state.visits}></CardsDeck>
                    )}
                </div>
            </div>
        );
    }
}

export default Patinet;
