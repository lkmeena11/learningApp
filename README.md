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




# Task List
- Basic reaact aop setup: Done
- Add bas components and basic styling: Done
- Add routing for navigating multiple vew: Done
- Add Functional components : Pending
- Add Styled components: Pending
- Add react context : Pending
- MUI: try for better UI : Pending
- Add Unit test: Pending