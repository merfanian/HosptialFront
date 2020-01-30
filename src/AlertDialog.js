import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends Component {
    // listItems = ;

    constructor(props) {
        super(props);
        console.log(this);

        this.handleClickOpen.bind(this);
        this.handleClose.bind(this);

        this.state = {
            open: false,
        };
    }

    handleClickOpen = () => this.setState({ open: true });

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={this.handleClickOpen}
                >
                    Show prescription
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {'Your prescription is:'}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.medicine.map(med => (
                                <li>{med}</li>
                            ))}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleClose}
                            color="primary"
                            autoFocus
                        >
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AlertDialog;
