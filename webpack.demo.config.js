const path = require('path');
const webpack = require('webpack');

module.exports = (env) => ({
    entry: `./examples/${env}.js`,
    output: {
        path: path.join(__dirname, '/examples/js'), 
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './examples/', 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'}
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ]
        },]
    },
});
