const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Just to help us with directories and folders path
const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {
    //Entry: main file that init our application
    entry: path.resolve(__src, 'main.js'),

    //Output: result of the bundle after webpack run
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__base, 'dist'),
        clean: true
    },

    //Plugins to help and include additionals functionalities to webpack
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Minimal Vue Webpack',
            favicon: path.resolve(__src, 'static', 'favicon.ico'),
            template: path.resolve(__src, 'templates', 'index.html'),
        })
    ]
}