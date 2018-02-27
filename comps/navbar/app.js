import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      focused: parseInt(e.target.id, 10)
    })
  }

  render() {
    let theMenu = this.props.items.map((m, index) => {
      let style = (index === this.state.focused) ? 'item focused' : 'item'
      return (  
        <li key={index} id={index} className={style} onClick={this.handleClick}>{m}</li>
      )
    })
    return (
      <div className='container'>
        <ul> {theMenu }</ul>
        <p>Selected: {this.props.items[this.state.focused]}</p>
      </div>      
    )
  }
}

export default App
