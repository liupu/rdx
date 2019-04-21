export default (state = { r: 20, g: 220, b: 220 }, action) => {
    let { type } = action;
    switch (type) {
        case 'CHANGE':
            console.log([action.color])
            return { ...state, [action.color]:action.v+state.r};
        // case 'G':
        //     return { ...state, g: state.g + action.v };
        // case 'B':
        //     return { ...state, b: state.b + action.v };
        default:
            return state;
    }
}