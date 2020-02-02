import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import VisitsDeck from './VisitsDeck';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AlertDialog from './AlertDialog';
import FormDialog from './FormDialog';
import Axios from 'axios';
import urls from './Urls';

class Doctor extends Component {
    constructor(props) {
        super(props);
        var id = this.props.location.search;
        id = id.slice(4);
        this.state = {
            firstName: null,
            lastName: null,
            employeeId: id,
            speciality: null,
            open: false,
            visits: null,
            isLoading: true,
            diseases: null,
            medicines: null,
        };
        console.log('props', this.props);
    }

    renderMyData() {
        var url = urls.getVisitsOfSpecialDoctor.replace(
            '#id',
            this.state.employeeId,
        );

        Axios.get(url).then(res => {
            let visits = res.data;
            this.setState({ visits: visits });
            this.setState({ isLoading: false });
        });

        Axios.get(urls.getMedicines).then(res => {
            let medicines = res.data;
            this.setState({ medicines: medicines });
        });

        Axios.get(urls.getDiseases).then(res => {
            let diseases = res.data;
            this.setState({ diseases: diseases });
        });

        Axios.get(
            urls.getSpecialDoctorInfo.replace('#id', this.state.employeeId),
        ).then(res => {
            let info = res.data;
            console.log(info);
            this.setState({
                firstName: info.f_name,
                lastName: info.l_name,
                speciality: info.speciality,
            });
        });
    }

    componentWillMount() {
        this.renderMyData();
    }
    handleClick = () => {
        let s = this.state;
        s.open = true;
        alert(s.open, s.firstName);
        this.setState(s);
    };
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        {this.state.firstName != null &&
                        this.state.lastName != null ? (
                            <div>
                                <h3>
                                    Welcome back Dr. {this.state.firstName}
                                    {this.state.lastName}
                                </h3>
                            </div>
                        ) : (
                            <view></view>
                        )}
                        {/* <h4>speciality: {this.state.speciality}</h4> */}
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
                    {this.state.isLoading ? (
                        <view>Please wait, Page is Loading ...</view>
                    ) : (
                        <VisitsDeck cards={this.state.visits}></VisitsDeck>
                    )}
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 80,
                        right: 80,
                    }}
                >
                    {this.state.diseases != null &&
                    this.state.medicines != null ? (
                        <FormDialog
                            medicines={this.state.medicines}
                            diseases={this.state.diseases}
                        ></FormDialog>
                    ) : (
                        <view></view>
                    )}
                </div>
            </div>
        );
    }
}

export default Doctor;
