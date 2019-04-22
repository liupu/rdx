export default (state, action) => {
    if (state == undefined) {
        state = {
            "cart": [
                {
                    "name": "Computer",
                    "price": 5000,
                    "amount": 0
                },
                {
                    "name": "Phone",
                    "price": 3000,
                    "amount": 0
                },
                {
                    "name": "book",
                    "price": 50,
                    "amount": 0
                }
            ],
            "tatal": 0
        }
    }
    const { type } = action;
    switch (type) {
        case 'ADD':
            const s = state;
            s.cart[action.index].amount++;
            console.log(JSON.stringify(state))
            return s;
        case 'MINUS':
            const ss = state;
            s.cart[action.index].amount--;
            return ss;
        default:
            return state;
    }
}