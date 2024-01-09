import { combineReducers } from "redux";

import leftMenuReducer from "./leftmenu.reducer";
import indexReducer from "./index.reducer";

export default combineReducers({
    leftMenu: leftMenuReducer,
    index: indexReducer
});