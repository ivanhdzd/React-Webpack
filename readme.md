# ReactJS project structure configured with Webpack

[Tutorial reference is here](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

## What is it?

This project uses:
- `ReactJS`: Front-End Javascript library developed by Facebook. It official site is [here](https://facebook.github.io/react/).
- `Webpack`: Module bundler for modern Javascript applications. It official site is [here](https://webpack.js.org/) and it [Github repository](https://github.com/webpack/webpack).
- `Webpack Babel Loader`: Allows transpiling JavaScript files using Babel and webpack. This Github repository is [here](https://github.com/babel/babel-loader).
- `Webpack CSS loader`: Interprets @import and url() like requires. This Github repository is [here](https://github.com/webpack-contrib/css-loader).

## What do I need?

You need to have installed only NodeJS. You can download it from [Official NodeJS site](https://nodejs.org/en/).
If you have Windows 10, you can use PowerShell.
If tou have older Windows version than 10, you can install Gitbash from [it official site](https://git-scm.com/download/win) and work with it.
If you have Mac or Linux, you can use it terminal.

## How to run it?

Before run project, you need to install NPM dependencies with:

```bash
npm install
```

Then, you can run it:

```bash
npm start
```

After run it, terminal show a message like this `Project is running at http://localhost:8080`.
Finally, open your favourite browser and go to `http://127.0.0.1:8080` ip.

## Where is production version project?

Production version project is `docs` directory.

## TO DO:

- Minify `bundle.js` file in `docs` directory.
