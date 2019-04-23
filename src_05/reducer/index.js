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
            const addObj = JSON.parse(JSON.stringify(state));
            addObj.cart[action.index].amount++;
            return addObj;
        case 'MINUS':
            const minusObj = JSON.parse(JSON.stringify(state));
            minusObj.cart[action.index].amount > 0 ? minusObj.cart[action.index].amount-- : 0;
            return minusObj;
        default:
            return state;
    }
}