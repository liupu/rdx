export default (state = 0, action) => {
    let { type } = action;
    switch(type){
        case 'ADD':
        return state + 1;
        case 'MINUS':
        return (state - 1) >= 0 ? state-1 : 0;
        case 'ADDASINPUT':
        return state + action.number;
        default: 
        return state;
    }
}