import { createStore, combineReducers, applyMiddleware } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// THUNK MIDDLEWARE ALLOWS REDUX TO DISPATCH FUNCTIONS INSTEAD OF JUST OBJECTS
// Storen pystytys ja storen eri propertyjä vastaavat reducerit
// jotka hoitavat kyseisen osa-alueen staten hakemisen ja palautuksen
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
