import React, { Component } from 'react';
import MediaCard from './MediaCard';

class CardsDeck extends Component {
    listItems = this.props.cards.map(card => (
        <MediaCard
            doctor={card.doctor_id}
            date={card.vis_date}
            medicines={card.medicines}
        ></MediaCard>
    ));
    render() {
        return <div>{this.listItems}</div>;
    }
}

export default CardsDeck;
