import React from 'react';

export default class Square extends React.Component {
    posToStyles({ x, y }) {
        return {
            transform: `translate(${x}px, ${-y}px)`
        };
    }
    render() {
        const { move, square } = this.props;
        const styles = this.posToStyles(square);
        return (
            <div style={styles} className="square">
                <button
                    onClick={ () => move({dx: 0, dy: 50 }) }
                    className="square__arrow--up">&uarr;</button>
                <button
                    onClick={ () => move({dx: 50, dy: 0 }) }
                    className="square__arrow--right">&rarr;</button>
                <button
                    onClick={ () => move({dx: 0, dy: -50 }) }
                    className="square__arrow--down">&darr;</button>
                <button
                    onClick={ () => move({dx: -50, dy: 0 }) }
                    className="square__arrow--left">&larr;</button>
            </div>
        );
    }
};
