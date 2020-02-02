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

        this.state = {
            open: false,
            diseases: this.props.diseases,
            medicines: this.props.medicines,
            chosenMed: 'None',
            chosenDisease: 'None',
        };
    }

    diseaseItems = this.props.diseases.map(disease => (
        <option id={disease.disease_code}>{disease.name}</option>
    ));

    medItems = this.props.medicines.map(med => (
        <option id={med.sci_name}>{med.brand_name}</option>
    ));

    handleMedChange = med => {
        this.setState({ chosenMed: med });
    };

    handleChangeDisease = disease => {
        this.setState({ chosenDisease: disease });
    };

    render() {
        return (
            <div>
                <FormControl>
                    Choose medicise:
                    <select
                        name="chosenMed"
                        value={this.state.chosenMed}
                        onChange={event => {
                            this.handleMedChange(event.target.value);
                            this.props.handleMedChange(event.target.value);
                        }}
                    >
                        <option id="None">None</option>
                        {this.medItems}
                    </select>
                    Choose disease:
                    <select
                        name="chosenDisease"
                        value={this.state.chosenDisease}
                        onChange={event => {
                            this.handleChangeDisease(event.target.value);
                            this.props.handleChangeDisease(event.target.value);
                        }}
                    >
                        <option id="None">None</option>

                        {this.diseaseItems}
                    </select>
                </FormControl>
            </div>
        );
    }
}
export default ControlledOpenSelect;
