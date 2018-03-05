import React, { createContext } from 'react'

export default () => {
  const Context = createContext()
  const { Consumer } = Context

  return (
    <Consumer>
      { 
        ({ firstName, lastName }) => <span>{`${firstName} ${lastName}`}</span>
      }
    </Consumer>
  )
}
