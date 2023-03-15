import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import allReducers from "./reducers/reducer";

const reducers = combineReducers({
    result: allReducers,
})

const store = createStore(reducers,applyMiddleware(thunk,logger));

export default store;

