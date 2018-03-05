import React, { createContext } from 'react'

export default () => {
  const Context = createContext()
  const { Consumer } = Context

  return (
    <Consumer>
      { 
        ({ state, action }) => ( 
          <div>
            <span>{state.count}</span>
            <button onClick={action.increment}>+</button>
          </div>
        )
      }
    </Consumer>
  )
}
