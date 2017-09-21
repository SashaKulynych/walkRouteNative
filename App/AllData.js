import store from './store'
export const data = (state = [], action) => {
    switch (action.type) {
        case "DATA": {
            return action.payload;
        }
        default:
            return state;
    }
}
export const userData = (state = [], action) => {
    switch (action.type) {
        case "USER_DATA": {
            return action.payload;
        }
        default:
            return state;
    }
};
export function checkData(){
    return fetch('http://localhost:3000/db').then((response)=>response.json())
        .then((responseJson)=>{store.dispatch({type: 'DATA',payload:responseJson}); return true; });
}