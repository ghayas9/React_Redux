import { combineReducers } from "redux";
import amount from "./AmountReducer";
const Reducers = combineReducers({
    amount:amount
});
export default  Reducers;