import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Radio from '@material-ui/core/Radio';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { withRouter } from 'react-router-dom';

class Login extends Component {
    constuctor() {
        this.state = { id: '', role: '' };
    }

    onSubmit = e => {
        e.preventDefault();
        const form = {
            id: this.state.id,
        };
        if (this.state.role == '' || this.state.role == null)
            window.location.href = '/' + 'patient' + '?' + 'id=' + form.id;
        else
            window.location.href =
                '/' + 'doctor' + '?' + 'id=' + this.state.role;
    };

    handleChange = e => {
        this.setState({
            id: e.target.value,
        });
    };

    handleDoctorChange = e => {
        this.setState({
            role: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <Dialog
                    open
                    onRequestClose={this.props.toggleLogin}
                    fullScreen={this.props.fullScreen}
                >
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            type="username"
                            onChange={e => this.handleChange(e)}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="doctorname"
                            label="EmpId"
                            type="username"
                            onChange={e => this.handleDoctorChange(e)}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={e => this.onSubmit(e)} color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withMobileDialog()(Login);
