# React JSX & Components

#### Getting Started with the previous project

#### Why jsx
It is faster because it performs optimization while compiling code to JavaScript.

It is also type-safe and most of the errors can be caught during compilation.

It makes it easier and faster to write templates, if you are familiar with HTML.


1. Create a seprate file Header.js which will be our first Component. It should extend  React.Component
2. It should export itself so we can import it in everywhere
3. Render should return only one html element which can have multiple child elements.
4. For inline styling, style attribute can have a object of object of style properties.
5. style properties should be camel cased but actual css property can be passed but will throw errors. So react recommends css properties to be camel cased.

#### CSS FILE Loader
1. npm install --save-dev style-loader css-loader
2. add loader in webpack
3. import in component
4. Add className
