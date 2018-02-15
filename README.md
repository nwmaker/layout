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

## basic: floats

All layout techniques tend to override the default behavior of the browser.
* position: static (the default value), relative, absolute and fixed
* float: left, right, inherit, none (the default value)
* display: block, inline, inline-block, or others

The main uses of floats are to lay out columns and float text around an image.

## basic: position (top, bottom, left, and right)

Relative positioning is to move an element relative to its own default.

Absolute positioning is to move an element to anywhere in the page (or the element of \<html\> or the edge of its positioned parent). But if all the values are 0, what will happen?

Fixed is to the browser viewport's edges.

Positioned element is over non-positioned ones.
The z-index value of a positioned element is auto (0). To change the stacking order, change the z-index value explicitly. The higher z-index value goes above the lower one.

## basic: box model - the content in the box
The element's content is wrapped by adding any padding, border, and margin.


## references
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)

