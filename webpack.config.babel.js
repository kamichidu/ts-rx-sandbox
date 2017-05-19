import webpack from 'webpack';
import path from 'path';

const config= {
    entry: {
        app: path.join(__dirname, 'src', 'main', 'js', 'app.ts'),
    },
    output: {
        publicPath: '/assets/js/',
        path: path.join(__dirname, 'docs', 'assets', 'js'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['*', '.webpack.js', '.js', '.ts', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['babel-loader', {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader',
                    },
                    esModule: true,
                },
            }],
            exclude: /node_modules/,
        }, {
            test: /\.ts$/,
            use: ['babel-loader', {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            }],
            exclude: /node_modules/,
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    devtool: '#source-map',
};

if(process.env.NODE_ENV !== 'production')
{
    // want build performance
    // https://webpack.js.org/configuration/devtool/
    config.output.pathinfo= true;
    config.devtool= '#cheap-module-eval-source-map';
    config.devServer= {
        contentBase: path.join(__dirname, 'docs'),
        watchContentBase: true,
        inline: true,
    };
}

export default config;
