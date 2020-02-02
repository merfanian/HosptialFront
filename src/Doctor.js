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
            nameIsLoading: true,
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
            let info = res.data[0];
            console.log(info);
            this.setState({
                firstName: info.f_name == null ? '' : info.f_name,
                lastName: info.l_name == null ? '' : info.l_name,
                speciality: info.speciality == null ? '' : info.speciality,
            });

            this.setState({ nameIsLoading: false });
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
                <div>
                    {this.state.nameIsLoading == true ? (
                        <AppBar>
                            <Toolbar> Waiting for your data ...</Toolbar>
                        </AppBar>
                    ) : (
                        <AppBar>
                            <Toolbar>
                                {' '}
                                Hi Doctor {this.state.firstName}{' '}
                                {this.state.lastName} / Speciality:{' '}
                                {this.state.speciality}
                            </Toolbar>
                        </AppBar>
                    )}
                </div>
                <div
                    style={{
                        paddingTop: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    {this.state.isLoading ? (
                        <view>Please wait, Your visits are Loading ...</view>
                    ) : (
                        <view>
                            Your Visits:
                            <VisitsDeck cards={this.state.visits}></VisitsDeck>
                        </view>
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
                            doctorId={this.state.employeeId}
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
