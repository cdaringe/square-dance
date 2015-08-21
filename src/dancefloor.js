import React from 'react';
import Square from './square';

export default class Dancefloor extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="dancefloor">
                <Square {...props} />
            </div>
        );
    }
};
