import React, { Component } from 'react';
import MediaCard from './MediaCard';

class CardsDeck extends Component {
    listItems = this.props.cards.map(card => (
        <MediaCard doctor={card.doctor} date={card.date}></MediaCard>
    ));
    render() {
        return <view>{this.listItems}</view>;
    }
}

export default CardsDeck;
