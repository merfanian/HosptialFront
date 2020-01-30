import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import VisitsDeck from './VisitsDeck';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AlertDialog from './AlertDialog';
import FormDialog from './FormDialog';

class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Mahdi',
            lastName: 'Erfanian',
            employeeId: '',
            speciality: 'Nothing',
            open: false,
        };
        console.log('props', this.props);
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
                        <h3>
                            Welcome back Dr. {this.state.firstName}
                            {this.state.lastName}
                        </h3>
                        <h4>speciality: {this.state.speciality}</h4>
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
                    <VisitsDeck
                        cards={[
                            { patient: 'ali', date: 'emrooz' },
                            { patient: 'mahdi', date: 'farda' },
                        ]}
                    ></VisitsDeck>
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
                    <FormDialog medicine={[]}></FormDialog>
                </div>
            </div>
        );
    }
}

export default Doctor;
