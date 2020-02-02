import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import ControlledOpenSelect from './ControlledOpenSelect';
class FormDialog extends Component {
    constructor(props) {
        super(props);

        this.handleClickOpen.bind(this);
        this.handleClose.bind(this);
        this.handleSubmit.bind(this);

        this.state = {
            open: false,
            diseases: this.props.diseases,
            medicines: this.props.medicines,
            doctorId: this.props.doctorId,
            patiendId: '',
            date: '',
        };
    }

    handleClickOpen = () => this.setState({ open: true });

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = () => {
        alert(this.state.patiendId);
    };
    render() {
        return (
            <div>
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={this.handleClickOpen}
                >
                    <AddIcon />
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New visit</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill the form properly.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Patient National Id"
                            type="email"
                            fullWidth
                            onChange={e => {
                                const { value } = e.target;
                                this.setState({ patiendId: value });
                            }}
                        />
                        <ControlledOpenSelect
                            diseases={this.state.diseases}
                            medicines={this.state.medicines}
                        ></ControlledOpenSelect>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default FormDialog;
