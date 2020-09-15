import {combineReducers} from "redux"
import appReducer from "./app-reducer"

export let reducers = combineReducers({
  app: appReducer
})

/*
let store = createStore(reducers)

export default store
*/
