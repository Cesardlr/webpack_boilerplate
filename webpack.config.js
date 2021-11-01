const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'client/src/index.js')
    },
output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
},
plugins: [new HtmlWebpackPlugin({
    title: 'Wepack',
    template: path.join(__dirname, 'client/templates/index.ejs'),
    filename: 'index.html'
})],
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|express)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                },
            }
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            use: [
                {
                    loader: 'url-loader?limit=100000'
                }
            ]
        }
    ]
},
devServer: {},
resolve: {
    extensions: ["*", ".js", ".jsx"]
},
resolveLoader: {
    extensions: ["babel-loader"]
},
devtool: 'source-map',
mode: 'development',
resolve: {
    fallback: {
        fs: false
    }
}

};