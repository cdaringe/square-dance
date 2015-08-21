import React from 'react';

export default class Square extends React.Component {
    move(direction) {
        console.log('Square moved:', direction)
    }
    render() {
        return (
            <div className="square">
                <button
                    onClick={this.move.bind(this, 'up')}
                    className="square__arrow--up">&uarr;</button>
                <button
                    onClick={this.move.bind(this, 'right')}
                    className="square__arrow--right">&rarr;</button>
                <button
                    onClick={this.move.bind(this, 'down')}
                    className="square__arrow--down">&darr;</button>
                <button
                    onClick={this.move.bind(this, 'left')}
                    className="square__arrow--left">&larr;</button>
            </div>
        );
    }
};
