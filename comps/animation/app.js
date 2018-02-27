import React from 'react'
import Card from './card'
import Board from './board'
import FadeTransition from './transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      cards: []
    }
    this.addCard = this.addCard.bind(this)
    this.delCard = this.delCard.bind(this)
    this.delLastCard = this.delLastCard.bind(this)
  }

  addCard() {
    const {cards} = this.state
    const id = cards.length + 1
    const newCard = {id, content: `card ${id}`}
    
    this.setState({
      cards: cards.concat([newCard])
    }) 
  }

  delCard(id) {
    const {cards} = this.state
    this.setState({
      cards: cards.filter(card => card.id !== id)
    })
  }

  delLastCard() {
    const {cards} = this.state
    this.setState({
      cards: cards.slice(0, -1)
    })
  }

  render() {
    const {cards} = this.state

    return (
      <div className='container'>
        <h1>React Transition Demo</h1>
        <button onClick={this.addCard}>Add a card</button>
        <button onClick={this.delLastCard}>Remove a card</button>
        <TransitionGroup component={Board}>
          {
            cards.map( card => {
              return (
                <FadeTransition duration={150} key={card.id}>
                <li className='board-item' key={card.id}>
                  <Card onRemove={() => {
                    this.delCard(card.id)
                  }}>{card.content}</Card>
                </li>
                </FadeTransition>
              )
            })
          }
        </TransitionGroup>
      </div>
    )
  }
}

export default App
