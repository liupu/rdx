export default (state, action) => {
    if (state == undefined) {
        state = {
            "cart": [
                {
                    "name": "Computer",
                    "price": 5000,
                    "amount": 1
                },
                {
                    "name": "Phone",
                    "price": 3000,
                    "amount": 1
                },
                {
                    "name": "book",
                    "price": 50,
                    "amount":1
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
            minusObj.cart[action.index].amount > 1 ? minusObj.cart[action.index].amount-- : (function(){
                let con = confirm('do you want to delete this item?');
                return con ? minusObj.cart.splice([action.index],1):''
            })();
            return minusObj;
        case 'EDIT':
            const editObj = JSON.parse(JSON.stringify(state));
            if(action.value>1){
                editObj.cart[action.index].amount = action.value;
            }
            return editObj;
            
        default:
            return state;
    }
}