import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import persistStore from './redux/store'
ReactDOM.render(
  <Provider store={persistStore.store}>
    <BrowserRouter>
      <PersistGate persistor={persistStore.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
