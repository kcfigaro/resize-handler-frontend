# KC's sdi frontend development
sdi frontend development - project by KC Chang

## Summary
- Develop javascript horizontal handler function to resize html section(div tag).
- The user can change section size up and down with mouse.
- The sizeable section change height using below method.

  ```javascript
  // startHeight = the section's original height(using getComputedStyle).
  // startY = the orignal section height from client(browser).
  // e.clientY = the change section height from client(browser).
  section.style.height = (startHeight + e.clientY - startY) + "px";
  ```

- If you need more explaination of get style, please check [Here](http://www.w3schools.com/jsref/jsref_getcomputedstyle.asp)
- If you need more explaination of click location, please check [Here](http://felixblog.tistory.com/50).
- If you need more mouse event, please check [Here](https://developer.mozilla.org/en-US/docs/Web/Events/click).

## Installation
**1**. CSS
- .handler_horizontal
- .window
- .top
- .bottom
- .of

**2**. JS
- set variables for resizing functions.
- use initialiseResize()
- use startResizing()
- use stopResizing()

**3**. HTML
- set id and class(id="row-resizer" class="handler_horizontal") in div tag which you need to resize.

## Resource
Essentials:
- Click location and Change height.
- Handle mouse events.

Useful Links:
- How to adjust the size of multiple adjacent textareas like in jsfiddle.net? [Links](http://stackoverflow.com/questions/8819328/how-to-adjust-the-size-of-multiple-adjacent-textareas-like-in-jsfiddle-net)
- Building interactive elements with HTML and javascript: Resizing [Links](https://blog.codezero.xyz/building-interactive-elements-with-html-and-javascript-resizing/)
- jsfiddle example [Links](http://jsfiddle.net/3jMQD/)

## Validate source code
- [JShint](http://jshint.com/)
- [jsbeautifier](http://jsbeautifier.org/)
