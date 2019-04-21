export default (state = { r: 20, g: 220, b: 220 }, action) => {
    let { type } = action;
    switch (type) {
        case 'R':
            return { ...state, r: state.r + 1 };
        case 'G':
            return { ...state, g: state.g + 1 };
        case 'B':
            return { ...state, b: state.b + 1 };
        default:
            return state;
    }
}