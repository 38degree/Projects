var path = require( 'path' ),
    webpack = require( 'webpack' ),
    DEVELOPMENT = process.env.NODE_ENV === 'development',
    PRODUCTION = process.env.NODE_ENV === 'production',

    entry = PRODUCTION
        ?   [
                './src/index.js'
            ]
        :   [
                './src/index.js',
                'webpack/hot/dev-server',
                'webpack-dev-server/client?http://localhost:8080'
            ],

    plugins = PRODUCTION
        ?   [
                new webpack.optimize.UglifyJsPlugin( {
                    comments: true,
                    mangle: false,
                    compress: {
                        warnings: true
                    }
                } )
            ]
        :   [
                new webpack.HotModuleReplacementPlugin()
            ];

module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [ {
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            exclude: '/node_modules/'
        } ]
    },
    output: {
        path: path.join( __dirname, 'dist' ),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
};
