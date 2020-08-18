# angusexposed
## Angus' Professional Exposé  
---
### The What and the Why?
This is my professional exposé. That means it's going to showcase as much of what I know as possible--and still be intellible. This is also a guide to setting up and using any of the technologies and frameworks used herein. I hope this demonstrates not only what I can do, but how I can communicate it to others. It's also  just me having fun and will always be a work in progress!
### More of the What
This project is enitrely written in javascript, with the exception of any JSON configuration syntax. I'm using React for the front-end, express for the back-end, various middleware, some web-workers to offload some of the front-end-related visual computations, OAuth for authentication, Jest and Enzyme because this is a test-driven development, and webpack and babel for all the bundling and translating. Everything has been set up from scratch--no create-react-app here.
####  Get Started!
##### Set up the Environment
1. Ensure you have Node.js installed.
2. Create a new project directory, and enter it.
3. Initialize a new project:
``` bash
npm init -y
```
> Omit the `-y` if you want to specify the project meta data manually. Alternatively, just create a `package.json` yourself.
3. Install all of the packages:
``` bash
  npm i webpack webpack-dev-server webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-class-properties autoprefixer clean-webpack-plugin copy-webpack-plugin css-loader file-loader html-webpack-partials-plugin html-webpack-plugin mini-css-extract-plugin node-sass postcss-loader react react-dom react-router-dom sass-loader style-loader url-loader webpack-merge jest enzyme express
```

To be continued...
