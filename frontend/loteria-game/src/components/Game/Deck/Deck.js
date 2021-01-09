import React, { Component } from 'react';
import Card from '../Card/Card';

export default class Deck extends Component {
    render() {
        return (
            <div class="deck">
                <Card value={this.props.DeckCards[i]}
                    onClick={()=>this.props.onClick(i)}
                />               
            </div>
        )
    }
}
