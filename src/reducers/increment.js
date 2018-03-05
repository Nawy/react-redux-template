const INITIAL_STATE = {
    counter: 0
};

const increment = (state = {}, action) => {
    if(action.type === "INC") {
        return Object.assign(state, {counter: state.counter + 1});
    }
    return state;
};

export default increment;