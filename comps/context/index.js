import React, { createContext } from 'react'
import App from './app'

export default () => {
  const Context = createContext()
  const { Provider, Consumer } = Context

  return (
    <Provider value={{firstName: 'Joe', lastName: 'Smith'}}>
      <App />
    </Provider>
  )
}
