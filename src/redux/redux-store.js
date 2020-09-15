import {combineReducers, createStore} from "redux"
import appReducer from "./app-reducer"

let reducers = combineReducers({
  app: appReducer
})

let store = createStore(reducers)

window.store = store

export default store