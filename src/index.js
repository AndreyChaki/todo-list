import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {Provider} from "react-redux"
import {loadState, saveState} from "./localStorage"
import {reducers} from "./redux/redux-store"
import {createStore} from "redux";

const persistedState = loadState()
const store = createStore(reducers, persistedState)

store.subscribe(() => {
  saveState(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <App className='app-root'/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
