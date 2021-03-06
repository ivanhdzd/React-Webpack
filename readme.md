# ReactJS project structure configured with Webpack

[Tutorial reference is here](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

## What does this project use?

This project uses:
- `ReactJS`: Front-End Javascript library developed by Facebook. It official site is [here](https://facebook.github.io/react/).
- `Webpack`: Module bundler for modern Javascript applications. It official site is [here](https://webpack.js.org/) and it [Github repository](https://github.com/webpack/webpack).

### Webpack development and production environment

By default, `webpack.config.js` has hardcoded `development` NodeJS environment. When this project is launched to `production`, you need to change it, like this:

```bash
module.exports = {
    ...
    plugins: [
		...
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		...
    ]
};
```

When it project is in `development` environment, ReactJS identify `bundle.min.js` code was minified and it show a warning asking you change NodeJS environment to `production`, because in `development` environment ReactJS launch develop warnings and comments in browser console. In production ReactJS ignore it messages.

### Webpack loaders

- `Webpack Babel Loader`: Loads ES2015+ code and transpiles to ES5 using Babel. This Github repository is [here](https://github.com/babel/babel-loader).
- `Webpack CSS loader`: Loads CSS file with resolved imports and returns CSS codes. This Github repository is [here](https://github.com/webpack-contrib/css-loader).
- `Webpack file loader`: Emits the file into the output folder and returns the (relative) url. this Github repository is [here](https://github.com/webpack-contrib/file-loader).

#### Are there more loaders?

If you want to check other loaders, you need to read [Webpack Github repository](https://github.com/webpack/webpack) in Loaders section.

### Webpack plugins

- `html-webpack-plugin`: Simplifies creation of HTML files (`index.html`) to serve your bundles. [Github repository here](https://github.com/jantimon/html-webpack-plugin).
- `extract-text-webpack-plugin`: Extracts Text (CSS) from your bundles into a separate file (`app.bundle.css`). [Github repository here](https://github.com/webpack-contrib/extract-text-webpack-plugin).

#### Are there more plugins?

If you want to check other plugins, you need to read [Webpack Github repository](https://github.com/webpack/webpack) in Plugins section. [Here](https://github.com/webpack-contrib) and [here](https://github.com/webpack/webpack/tree/master/lib/optimize) there are more plugins.

## What do I need?

You need to have installed only NodeJS. You can download it from [official NodeJS site](https://nodejs.org/en/).
If you have Windows 10, you can use PowerShell.
If tou have older Windows version than 10, you can install Gitbash from it [official site](https://git-scm.com/download/win) and work with it.
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
Then, open your favourite browser and go to `http://127.0.0.1:8080` ip.

## Where is production version project?

Production version project is `docs` directory.

## TO DO:

- Check how to minify `./docs/index.html` with `html-webpack-plugin`.