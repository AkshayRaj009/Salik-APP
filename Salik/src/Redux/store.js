import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "../Redux/reducers"

export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
    return store
}