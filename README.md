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

## basic boxes

### basic: floats

All layout techniques tend to override the default behavior of the browser.
* position: static (the default value), relative, absolute and fixed
* float: left, right, inherit, none (the default value)
* display: block, inline, inline-block, or others

The main uses of floats are to lay out columns and float text around an image.

### basic: position (top, bottom, left, and right)

Relative positioning is to move an element relative to its own default.

Absolute positioning is to move an element to anywhere in the page (or the element of \<html\> or the edge of its positioned parent). But if all the values are 0, what will happen?

Fixed is to the browser viewport's edges.

Positioned element is over non-positioned ones.
The z-index value of a positioned element is auto (0). To change the stacking order, change the z-index value explicitly. The higher z-index value goes above the lower one.

### basic: box model - the content in the box
The element's content is wrapped by adding any padding, border, and margin.

## HTML table vs. CSS table

## flexible boxes
1-D layout

## Grid layout
2-D layout, columns and rows, gutter (gap between each row or column)

## [Practical Design](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886)

* Use color and weight to create hierarchy instead of size
“Is this text important? Let’s make it bolder.” (instead of bigger)
“Is this text secondary? Let’s use a lighter color.” (instead of smaller)

Try and stick to two or three colors:
** A dark (but not black) color for primary content (like the headline of an article) (When you put pure black next to a set of meticulously picked colors, the black overpowers everything else)
** A grey for secondary content (like the date an article was published)
** A lighter grey for ancillary content (maybe the copyright notice in a footer)

Similarly, two font weights is usually enough for UI work:
A normal font weight (400 or 500 depending on the font) for most text
A heavier font weight (600 or 700) for text you want to emphasize

## references
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)
* [Hamburger Menu with REACT](https://codepen.io/naturalclar/pen/zEwvbg)
* [Never use black](https://ianstormtaylor.com/design-tip-never-use-black/)

