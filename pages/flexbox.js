import React from 'react'

class Flexbox extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      default: 3,
      count: 3
    }
  }
  
  handleResetBtn = () => {
    console.log(this.state.default)

    this.setState({
      count: this.state.default
    })
  }

  handleCreateBtn = () => {
    let current = this.state.count
    let next = current + 1
    this.setState({
      count: next
    })
  }
  
  renderDivs() {
    let n = this.state.count
    let a = Array.apply(null, Array(n)).map((_, i) => i)
    console.log(a)
    return a.map((_, i) => <div key={i}>This is a box</div>)
  }

  render() {
    let divs = this.renderDivs()
    return (
  <div>
    <div className='default'>
      <h1> Default </h1>
      <section>
        <div>This is a box</div>
        <div>This is a box</div>
        <div>This is a box</div>
      </section>
      <button className="create">Create box</button>
      <button className="reset">Reset demo</button>
    </div>
    <hr />
    <div className='flex-box'>
      <h1> Flex box </h1>
      <section> {divs}
      </section>
      <button className="create" onClick={this.handleCreateBtn}>Create box</button>
      <button className="reset" onClick={this.handleResetBtn}>Reset demo</button>
    </div>
    <style jsx global>{`
      .flex-box {
        font-family: sans-serif;
      }
      .flex-box section {
        width: 93%;
        height: 240px;
        margin: 20px auto;
        background: purple;
        display: flex;
      }
      .flex-box div {
        color: white;
        background: orange;
        flex: 1;
        margin-right: 10px;
        text-shadow: 1px 1px 1px black;
      }
      .flex-box div:last-child {
        margin-right: 0;
      }
      .flex-box section, div {
        border: 5px solid rgba(0,0,0,0.85);
        padding: 10px;
      }
    `}</style>
  </div>
)
}
}

export default Flexbox

