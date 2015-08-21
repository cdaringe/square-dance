/*
 * action types
 */
export const MOVE_SQUARE = 'MOVE_SQUARE';
export const SET_VISIBILITY = 'SET_VISIBILITY';

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_SQUARE: 'SHOW_SQUARE',
    HIDE_COMPLETED: 'HIDE_COMPLETED',
};

/*
 * action creators
 */

export function move(pos) {
  return { type: MOVE_SQUARE, pos };
}

export function setVisibility(filter) {
  return { type: SET_VISIBILITY, filter };
}