module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
    resolve: {
        fallback: {
            "url": require.resolve("url/"),
            "assert": require.resolve("assert/"),
            stream: require.resolve('stream-browserify'),
            https: require.resolve('https-browserify'),
            zlib: require.resolve('browserify-zlib'),
            buffer: require.resolve('buffer/'),
            crypto: require.resolve('crypto-browserify'),
        }
    }
};

