export const checkFun = (id) => ({ type: 'CHECK', id });
export const removeFun = (id) => ({ type: 'REMOVE', id });
export const addFun = (txt) => ({ type: 'ADD', txt });
export const changeItem = (id, txt) => ({ type: 'UPDATE', id, txt });