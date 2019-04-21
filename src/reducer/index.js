export default (state = { r: 20, g: 220, b: 220 }, action) => {
    let { type } = action;
    switch (type) {
        case 'R':
            return { ...state, r: state.r + action.v };
        case 'G':
            return { ...state, g: state.g + action.v };
        case 'B':
            return { ...state, b: state.b + action.v };
        default:
            return state;
    }
}