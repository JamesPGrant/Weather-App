/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable indent */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name][contenthash].js',
        clean:true,
        assetModuleFilename: '[name][ext]',
    },
    devtool:'source-map',
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },
    module:{
        rules:[
            {
            test:/\.scss$/,
            use:['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.css$/i,
            use:['style-loader', 'css-loader'],
        },
        {
            test: /\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type:'asset/resource',
            resolve: {    
                modules: [
                  path.join(__dirname, '../node_modules')
                ]
              }
        }
    ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template:'src/template.html',
        })
    ]

}