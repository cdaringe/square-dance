import React from 'react';

export default class Square extends React.Component {
    constructor() {
        super();

        this.move.bind(this);
    }
    move(direction) {
        console.log('Square moved:', direction)
    }
    render() {
        return (
            <div className="square">
                <button
                    onClick={this.move('up')}
                    className="square__arrow--up">&uarr;</button>
                <button
                    onClick={this.move('right')}
                    className="square__arrow--right">&rarr;</button>
                <button
                    onClick={this.move('down')}
                    className="square__arrow--down">&darr;</button>
                <button
                    onClick={this.move('left')}
                    className="square__arrow--left">&larr;</button>
            </div>
        );
    }
};
