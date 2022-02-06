# learningApp
# Lets build a Endpoint manager with React

# Getting Started
 Setup basic react app
- create package.json
```
npm init -y
```
- add dependencies
```
npm i react react-dom
npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D
```
- Create src folder
- add index.js and index.html inside src
```index.js
import ReactDOM from ‘react-dom’;
import React from ‘react’;
const App = () => {
 return <h1>This is my React app!</h1>;
 }
ReactDOM.render(<App />, document.getElementById(‘app’));
```
```index.html
<!doctype html>
<html lang=”en”>
<head>
 <meta charset=”utf-8">
 <title>My React App from Scratch</title>
</head>
<body>
 <div id=”app”></div>
</body>
</html>
```
- Configure add to root folder .bablerc and webpack.config.js
```.bablerc
{
 “presets”: [“@babel/preset-react”],
 “plugins”: [“@babel/plugin-proposal-class-properties”]
}
```
```webpack.config.js
const HtmlWebPackPlugin = require(“html-webpack-plugin”);
const htmlPlugin = new HtmlWebPackPlugin({
 template: “./src/index.html”,
 filename: “./index.html”
});
module.exports = {
mode: ‘development’,
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: “babel-loader”
   }
 },
  {
   test: /\.css$/,
   use: [“style-loader”, “css-loader”]
  }
]},
 plugins: [htmlPlugin]
};
```
- Add start script to package.json
```
"start": "webpack serve --config webpack.config.js"
```
- Time to cheer, navigate to root folder of your app and hit command for moment of truth
```
npm run start
```
- Go to browser and type http://localhost

# Additional dependencies added
```
npm i react-router-dom
npm i styled-components
npm i @material-ui/core
```

# Dependencies for unit testing 
```
npm i -D enzyme
npm i -D @wojtekmaj/enzyme-adapter-react-17
npm i -D jest
npm i -D babel-jest @babel/preset-env
```
- Run unit test
1. Add below key to scripts in package.json
```
"test": "jest"
```
- add babel.config.js with below content to use presets and plugins
```
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}
```

- Good to go and hit
```
npm run test
```

# Task List
- Basic react app setup: Done
- Add basic components and basic styling: Done
- Add routing for navigating multiple view: Done
- Add Functional components : Done
- Add Styled components: Done
- Add react context : Done
- MUI: try for responsive UI : Done
- Add Unit test: Done
- Add pagination: Pending
- Add theme: Pending


