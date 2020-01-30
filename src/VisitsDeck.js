import React, { Component } from 'react';
import MediaCard from './MediaCard';
import VisitCard from './VisitCard';

class VisitsDeck extends Component {
    listItems = this.props.cards.map(card => (
        <VisitCard patient={card.patient} date={card.date}></VisitCard>
    ));
    render() {
        return <div>{this.listItems}</div>;
    }
}

export default VisitsDeck;
