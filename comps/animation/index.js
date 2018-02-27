import App from './app'

export default () => (
  <div className='animation'>
    <App />
    <style jsx global>{`
      .animation {
        margin: 0;
        padding: 0;
        background: #fff;
        color: #2a2a2a;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        line-height: 1.5;
      }

      h1 {
        margin-top: 0;
      }

      ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

.container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 1rem 0.5rem;
}

.board {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.board-item {
  flex: 0 0 300px;
  padding: 0.5rem;
}

.card {
  border: 1px solid #dadada;
  display: block;
  flex: 0 1 300px;
  padding: 0.5rem;
}

.fade {
  transition: ease-in 0.15s;
  transition-property: opacity, transform;
}

.fade-entering {
  opacity: 0
  transform: translateY(-10%);
}
    `}</style>
  </div>
)
