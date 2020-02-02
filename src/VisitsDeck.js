import React, { Component } from 'react';
import MediaCard from './MediaCard';
import VisitCard from './VisitCard';

class VisitsDeck extends Component {
    listItems = this.props.cards.map(card => (
        <VisitCard patient={card.patient_id} date={card.vis_date}></VisitCard>
    ));

    render() {
        return <div>{this.listItems}</div>;
    }
}

export default VisitsDeck;
