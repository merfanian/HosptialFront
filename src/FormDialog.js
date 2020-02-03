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
import axios from 'axios';
import urls from './Urls';

class FormDialog extends Component {
    constructor(props) {
        super(props);

        this.handleClickOpen.bind(this);
        this.handleClose.bind(this);
        this.handleSubmit.bind(this);
        this.handleMedChange.bind(this);
        this.handleChangeDisease.bind(this);

        this.state = {
            open: false,
            diseases: this.props.diseases,
            medicines: this.props.medicines,
            doctorId: this.props.doctorId,
            patiendId: 'None',
            chosenMed: 'None',
            chosenDisease: 'None',
            date: '',
        };
    }

    handleClickOpen = () => this.setState({ open: true });

    handleClose = () => {
        this.setState({ open: false });
    };

    handleMedChange = med => {
        this.setState({ chosenMed: med });
    };

    handleChangeDisease = disease => {
        this.setState({ chosenDisease: disease });
    };

    handleSubmit = () => {
        let dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = year + '-0' + month + '-0' + day + 'T00:00:00';

        console.log(newdate);
        this.setState({ open: false, date: newdate });
        this.state.date = newdate;
        var disease_code = '',
            med_sci_name;

        for (const i in this.state.diseases) {
            if (this.state.diseases[i].name == this.state.chosenDisease) {
                disease_code = this.state.diseases[i].disease_code;
                break;
            }
        }

        for (const i in this.state.medicines) {
            if (this.state.medicines[i].brand_name == this.state.chosenMed) {
                med_sci_name = this.state.medicines[i].sci_name;
                break;
            }
        }

        let data = {
            doctor_id: parseInt(this.state.doctorId),
            patient_id: parseInt(this.state.patiendId),
            medicines: [
                { med_name: med_sci_name, amount: 10, each_n_hours: 10 },
            ],
            dis_code: parseInt(disease_code),
            vis_date: newdate,
        };
        console.log(JSON.stringify(data));

        axios.post(urls.postVisit, data).then(res => {
            alert('New visit added.');
        });
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
                            handleMedChange={this.handleMedChange}
                            handleChangeDisease={this.handleChangeDisease}
                            chosenMed={this.state.chosenMed}
                            chosenDisease={this.state.chosenDisease}
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
