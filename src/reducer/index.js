const initState = [
    {
        id: 1,
        text: 'you should do your homework',
        done: true
    },
    {
        id: 2,
        text: 'you should go swimming',
        done: false
    },
    {
        id: 3,
        text: 'you should go shopping',
        done: true
    },
    {
        id: 4,
        text: 'you should go to school',
        done: false
    }
]
export default (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case 'CHECK':
            return state.map(item =>
                item.id === action.id ? { ...item, done: !item.done } : item
            )
        case 'REMOVE':
            return state.filter(item => item.id !== action.id);
        case 'ADD':
            return [
                ...state,
                {   
                    id:state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
                    text:action.txt,
                    done:false
                }
            ]
        default:
            return state;
    }
}
