import actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    counter: 0
};

const increment = (state = INITIAL_STATE, action) => {
    if(action.type === actionTypes.INC) {
        return {...state, counter: state.counter + 1};
    }
    return state;
};

export default increment;