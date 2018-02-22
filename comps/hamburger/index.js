import React from 'react'
import App from './app'

export default () => (
  <div className='hamburger'>
    <App />
    <style jsx global>{`
      .hamburger {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
      }
    `}</style>
  </div>
) 

