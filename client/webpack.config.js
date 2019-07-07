module.exports =
    {
        entry:
        {
            app: __dirname + '/src/index.tsx'
        },
        output:
        {
            path: __dirname + '/dist',
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader'
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loaders: ['raw-loader', 'img-loader']
                }
            ]
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
        mode: 'production'
    };
