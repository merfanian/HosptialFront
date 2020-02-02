import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class ControlledOpenSelect extends Component {
    constructor(props) {
        super(props);
        this.handleChangeDisease.bind(this);
        this.handleClose.bind(this);
        this.handleOpen.bind(this);

        this.state = {
            open: false,
            diseases: this.props.diseases,
            medicines: this.props.medicines,
            chosenDisease: '',
            chosenMed: '',
        };
    }

    diseaseItems = this.props.diseases.map(disease => (
        <MenuItem value={disease.sci_name}>
            <em>{disease.brand_name}</em>
        </MenuItem>
    ));

    medItems = this.props.medicines.map(med => (
        <MenuItem value={med.sci_name}>
            <em>{med.brand_name}</em>
        </MenuItem>
    ));

    handleChangeDisease = event => {
        this.setState({ chosenDisease: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
        console.log(this.state);
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleOpen}>Choose medicine</Button>
                <FormControl>
                    <InputLabel id="demo-controlled-open-select-label">
                        medicines
                    </InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        // value={this.state.chosenMed}
                        onChange={e =>
                            this.setState({ chosenMed: e.target.value })
                        }
                        onSelect={e =>
                            this.setState({ chosenMed: e.target.value })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <div>{this.medItems}</div>
                    </Select>
                </FormControl>
            </div>
        );
    }
}
export default ControlledOpenSelect;
