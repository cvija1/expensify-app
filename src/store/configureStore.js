import {createStore,combineReducers,applyMiddleware} from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

export default()=>{
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    }),applyMiddleware(thunk));
    return store;
};