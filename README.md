# Namaste React 🚀

## Notes

What is a bundler?
Bundler packages all files and packs into single box so that we can ship all the code into production

CRA internally uses webpack

# Types of bundlers

- Webpack
- Parcel
- Vite

# Type of dependancies

- Dev dependancies: Its is generally required in devlopment phase
- Normal dependancies: They're required in production also

## Difference betweek package.json and package-lock.json

Package.json file maintainse approximate version of packages while lock.json file maintains exact version of that particular library

## What is transitive dependancies

Our project needs parcel dependancy, but in behind parcel needs some other dependancies, that dependancies needs some other depencies and go one, this is called as transitive dependancies

## Why do we don't push node_modules to git

Node modules are heavy in size, and we can regerate them by using package.json and package-lock.json

## What does npx means

npx means executing a package, npm used for installation, npx used for execution

## Parcel commands

dev build and start application =>>> npx parcel index.html
prod build =>>> npx parcel build index.html

prod build with compress all the files from the project into 3 files
i.e index.html, index.js and index.js.mapper file

# What Parcel do

- Dev build on localhosts
- local server
- parcel is doing HMR - Hot module replacement
- how parcel do HMR by using file watching algorithm - written in C++
- also doing caching
- Catching - faster builds
- Image optimization
- Minification of files for production build (Bundling)
- Compression
- Consistent hashing
- Code splitting
- Differential bundling - to support older browser
- Dignostic for consoles
- Error handling
- HTTPs
- tree shaking (imp) - remove unused code
- different dev and prod bundle

## Production build

use npx parcel build index.html

now you'll get error, remove entry point from package.json of main to get rid of error

# Browserlist.dev

What all browser's your application supported in

Browserslist: [
"last 2 Chrome version",
"last 2 Firefox version"
]

this means your application will definately work in these mentioned version, it might or not work in other versions

# What is babel ?

Babel is Javascript compiler also called as Transpiler
It transpiles JSX code to React code

[Babel Website](https://babeljs.io/)

# JSX

You can write JSX in single line only, but if you want to write in multiline then you've to use
"( )".
This is because babel needs to know/understand where the JSX is starting and where its ending.

# Components in React

There are two types of components in React

- Class based component (old way)
- Functional components (new way)

## Function based component

Functional component are the normal javascript functions which returns some JSX

# What is Component composition

Breaking down code into separte blocks / function / files and use them using <></> is called as
component composition

```js
const Title = () => {
  return <h1 id="title">Title</h1>;
};

const Heading = () => {
  return (
    <div id="container">
      {/* This is component composition */}
      <Title />
      <h1 id="heading">Namaste React 🚀</h1>
    </div>
  );
};
```
