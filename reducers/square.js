import { MOVE_SQUARE, SET_VISIBILITY } from '../actions/actions';

const initialState = {
  x: 0,
  y: 0,
  visible: true
};

export default function square(state = initialState, action) {
    switch (action.type) {
        case MOVE_SQUARE:
            return Object.assign({}, state, {
                x: state.x + action.pos.dx,
                y: state.y + action.pos.dy
            });

        case SET_VISIBILITY:
            return Object.assign({}, state, {
                visible: action.visible
            });

      default:
        return state;
    }
};
