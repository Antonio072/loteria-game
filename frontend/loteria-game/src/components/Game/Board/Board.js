import React, { Component } from 'react';
import Card from '../Card/Card';

export default class Board extends Component {
    renderCard(i){
        return <Card value={this.props.Cards[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
   
    render() {
        return (
            <div class="board">
                <div className="row">
                    {this.renderCard(0)}
                    {this.renderCard(1)}
                    {this.renderCard(2)}
                    {this.renderCard(3)}
                    {this.renderCard(4)}
                </div>
                <div className="row">
                    {this.renderCard(5)}
                    {this.renderCard(6)}
                    {this.renderCard(7)}
                    {this.renderCard(8)}
                    {this.renderCard(9)}
                </div>
                <div className="row">
                    {this.renderCard(10)}
                    {this.renderCard(11)}
                    {this.renderCard(12)}
                    {this.renderCard(13)}
                    {this.renderCard(14)}
                </div>
                
            </div>
        )
    }
}
