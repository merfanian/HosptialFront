import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { withRouter } from 'react-router-dom';

class Login extends Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
        this.state = { role: 'guest' };
    }

    onSubmit = e => {
        e.preventDefault();
        const form = {
            role: this.state.role,
        };

        window.location.href = '/' + 'patient' + '?' + 'id=' + form.role;
    };

    handleChange = e => {
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
