import {createStore} from 'redux';


const Reducer = (state = [],action) => {
    switch (action.type) {
        case "ADD_ITEMS" :
            return [...state, action.item];
        case "DELETE_ITEMS" :
            return state.filter(item=>item.id!==action.id);
        default:
            return state;
    }
};


const input=[
    {id:0,type:"text"},
    {id:1,type:"date"},
]
export default createStore(Reducer,input);


