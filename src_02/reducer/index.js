export default (state = {num: 0}, action) => {
    const { type } = action;
    switch(type){
        case 'ADD':
        return {...state, num:state.num + 1 };
        case 'MINUS':
        return {...state, num:state.num - 1 };
        case 'ADDASINPUT':
        return {...state, num:state.num + action.number}
        default: 
        return state;
    }
}