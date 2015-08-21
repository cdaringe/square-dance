import React from 'react';
import Square from './square';

let noMove = false; // prevent keys from moving the square

export default class Dancefloor extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', (evt) => {
            // detect if we are permitted to move during a transition,
            // and block subsquent keys from interrupting existing css transition
            if (noMove) return;
            noMove = true;
            setTimeout(() => {
                noMove = false;
            }, 100); // css transition delay
            let dx = 0;
            let dy = 0;
            let key = evt.keyCode.toString();
            switch (key) {
                // 37 <, 38 ^, 39 v, 40 >
                case '37':
                    dx -= 10; break;
                case '38':
                    dy += 10; break;
                case '39':
                    dx += 10; break;
                case '40':
                    dy -= 10; break;
                default:
                    break;
            }
            this.props.move({ dx, dy });
        });
    }

    componentWillUnMount() {
        window.removeEventListener('keydown', () => {
            console.log(this.props.move);
        });
    }

    render() {
        const props = this.props;
        return (
            <div className="dancefloor">
                <Square {...props} />
            </div>
        );
    }
};
