# CSS Layout with Next.js and React.js

## set up
```
git init
npm init -y
yarn add next@latest react@latest react-dom@latest
```

## index.js
The default CSS like this with Chrome. The HTML is displayed in the exact order in which it appears in the source code.
```
html {
  display: block;
}

head {
    display: none;
}

body {
  display: block;
  margin: 8px;
}
```

## basic
All layout techniques tend to override the default behavior of the browser.
* position: static is the default value
* floats
* display: block, inline, inline-block, or others

## references
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)

