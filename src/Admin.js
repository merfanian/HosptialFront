import React, { Component } from 'react';
import SimpleTable from './PatientsTable';
import { Dialog } from '@material-ui/core';

class Admin extends Component {
    render() {
        return (
            <div>
                <SimpleTable></SimpleTable>
            </div>
        );
    }
}

export default Admin;
