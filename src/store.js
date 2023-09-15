import { createStore, combineReducers } from 'redux';
import warehouseReducer from './reducers/warehouseReducer';

const rootReducer = combineReducers({
  warehouse: warehouseReducer,
});

const store = createStore(rootReducer);

export default store;
