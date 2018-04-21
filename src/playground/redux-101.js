import { createStore } from 'redux';


// Action generator
// Return action object for using in dispatch
// payload defaults to empty object
// Destructuring payload-object
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action (just return state-object)
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {count: state.count - 1};
        case 'RESET': 
            return {count: 0};
        case 'SET': 
            return {count: action.count};
        default:
            return state;
        }
};

const store = createStore(countReducer);

// Jos subscriben asettaa muuttujaan, sitä voi käyttää tilauksen perumiseen
const unsuscribe = store.subscribe(()=> {
    console.log(store.getState());
});

// store.dispatch lähettää action objektin
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}));


// dispatch without action generator functions (bad way)
store.dispatch({
    type: 'DECREMENT'
})
store.dispatch({
    type: 'DECREMENT'
})
store.dispatch({
    type: 'RESET'
})
store.dispatch({
    type: 'SET',
    count: 101
})
unsuscribe();