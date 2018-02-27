import React from 'react'
import App from './app'

export default () => (
  <div className='css-menu'>
    <App />

    <style jsx global>{`
      :root {
        --bg: coral;
      }
      .css-menu {
        font-family: 'Fira Sans', 'Helvetica Neue', 'Helvetica', sans-serif;
        font-weight: 400;
        font-size: 24px;
        background-color: var(--bg);
      }
      #menu-button {
        position: fixed;
        top: 20px;
        left: 20px;
        display: block;
        width: 50px;
        height: 50px;
        background: #111;
        border-radius: 5px;
        z-index: 200;
      }
      #menu-button:after {
        position: absolute;
        content: "☰";
        font-size: 42px;
        color: #FFF;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
      #menu-button:hover {
        opacity: .8;
      }
      #menu-button.on:after {
        content: "x";
      }
      #overlay {
        display: none;
        height: 100vh;
        width: 100%;
        position: fixed;
        z-index: 99;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.4);
        bottom: 0;
        right: 0;
        left: 0;
      }
      #overlay.open {
        display: block;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      #hamburger-menu {
        height: 0;
        width: 0;
        background: #111;
        position: fixed;
        top: 20px;
        left: 90px;
        z-index: 101;
        overflow: hidden;
        border-radius: 5px;
      }
      #hamburger-menu nav {
        padding: 10px;
        z-index: 101;
        overflow-y: hidden;
        overflow-x: hidden;
      }
      #hamburger-menu nav a {
        display: block;
        padding: 10px;
        height: 1em;
        color: #CCC;
        font-size: 1em;
        line-height: 1em;
        text-decoration: none;
        overflow: hidden;
      }
      #hamburger-menu nav a:hover {
        cursor: pointer;
        color: #FFF;
        background: rgba(255, 255, 255, 0.02);
      }
    `}</style>
  </div>
)
