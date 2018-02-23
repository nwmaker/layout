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
      @keyframes appear {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes slideIn {
        0% {
          transform: translateX(-2%);
        }
        100% {
          transform: translateX(0);
        }
      }
      @keyframes shrink {
        0% {
          width: 95%;
        }
        100% {
          width: 90%;
        }
      }
    `}</style>
  </div>
) 

