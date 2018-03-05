import React from 'react'
import { initStore } from 'react-stateful'

const store = {
  initialState: { count: 0 },
  actions: {
    increment: ({ count }) => ({ count: count + 1 }),
  },
}

const { Provider, connect } = initStore(store)

let Count = ({ state, actions }) => (
  <div>
    {state.count}
    <button onClick={actions.increment}>+</button>
  </div>
)

Count = connect(['count'])(Count)

const App = () => (
  <Provider>
    <Count />
  </Provider>
)

export default App
