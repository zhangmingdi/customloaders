const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolveLoader: {
        modules: ['node_modules', path.join(__dirname, 'loaders')]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
        ]
    }
}