import React, { createContext } from 'react'
import Display from './display'

class EnhancedProvider extends React.Component {
  state = {
    count: 0
  }
  render() {
    const Context = createContext()
    const { Provider } = Context

    return (
      <Provider
        value={{
          state: this.state
          actions: {
            increment: () => this.setState({ count: this.state.count + 1 }),
          }
        }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default EnhancedProvider
