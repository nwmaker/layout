import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleButtonClick = () => {
    console.log('button clicked')
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    // 
    let button = document.getElementById('menu-button')
    let overlay = document.getElementById('overlay')
    
  }

  renderButton() {
    return this.state.menuOpen ? 
      <div id='menu-button' className='on' onClick={this.handleButtonClick}></div> : 
      <div id='menu-button' onClick={this.handleButtonClick}></div> 
  }

  renderOverlay() {
    return this.state.menuOpen ?
      <div id='overlay' className='open'></div> :
      <div id='overlay' className='close'></div>
  }

  /* should add handler to submenu */
  renderMenu() {
    return this.state.menuOpen ? 
      (<div id='hamburger-menu'>
        <nav>
          <a href=''>Home</a>
          <a href=''>Works</a>
          <a href=''>Contact</a>
          <a href=''>About</a>
        </nav>
        <style jsx>{`
          #hamburger-menu {
            width: 200px;
            height: 196px;
          }
        `}</style>
      </div>) :
      (<div id='hamburger-menu'>
        <nav>
          <a href=''>Home</a>
          <a href=''>Works</a>
          <a href=''>Contact</a>
          <a href=''>About</a>
        </nav>
      </div>)
  }

  render() {
    return (
        <div className='app-hamburger'>
          {this.renderButton()}
          {this.renderMenu()}
          {this.renderOverlay()}
        </div>
    )
  }
}

export default App

