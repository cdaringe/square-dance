import React from 'react';

export default class Square extends React.Component {
    render() {
        const { move, square } = this.props;
        console.dir(this.props);
        return (
            <div className="square">
                <button
                    onClick={ () => move({x: 0, y: 100 }) }
                    className="square__arrow--up">&uarr;</button>
                <button
                    onClick={ () => move({x: 100, y: 0 }) }
                    className="square__arrow--right">&rarr;</button>
                <button
                    onClick={ () => move({x: 0, y: -100 }) }
                    className="square__arrow--down">&darr;</button>
                <button
                    onClick={ () => move({x: -100, y: 0 }) }
                    className="square__arrow--left">&larr;</button>
            </div>
        );
    }
};
