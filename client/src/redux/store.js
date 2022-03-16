import React from 'react'
import {createStore} from 'redux'
import rootreducer from './reducers/'
import {Provider} from 'react-redux'

const store = createStore(rootreducer)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function DataProvider({children}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
