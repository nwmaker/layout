import React from 'react'
import { Subscribe, Container, Provider } from 'unstated'

type CounterState = {
  count: number
};

class CounterContainer extends Container<CounterState> {
  state = {
    count: 0
  };

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
}

export default () => (
  <Provider>
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <div>
          <button onClick={counter.decrement}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={counter.increment}>+</button>
        </div>
      )}
    </Subscribe>
  </Provider>
)
