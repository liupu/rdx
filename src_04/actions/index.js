// export const changeR = (v) => ({ type: 'R', v: v });
// export const changeG = (v) => ({ type: 'G', v: v });
// export const changeB = (v) => ({ type: 'B', v: v });
export const change = (v,color) => ({type:'CHANGE',v:v,color:color});