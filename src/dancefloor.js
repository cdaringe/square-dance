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
            if (evt.keyIdentifier !== undefined) {
                // Chrome and ...?
                switch (evt.keyIdentifier.toLowerCase()) {
                    case 'up':
                        dy += 10; break;
                    case 'down':
                        dy -= 10; break;
                    case 'left':
                        dx -= 10; break;
                    case 'right':
                        dx += 10; break;
                    default:
                        break;
               }
            } else if (evt.key !== undefined) {
                // play nicely with Firefox
                switch (evt.key.toLowerCase()) {
                    case 'arrowup':
                        dy += 10; break;
                    case 'arrowdown':
                        dy -= 10; break;
                    case 'arrowleft':
                        dx -= 10; break;
                    case 'arrowright':
                        dx += 10; break;
                    default:
                        break;
                }
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
