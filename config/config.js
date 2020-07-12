var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = getConfig = (parame) => {
    let htmlPath = parame.htmlPath || ''
    let jsPath = parame.jsPath || ''
    let title = parame.title || 'app'
    return {
        entry: './index',
        output:{
            filename:'index123.js',
            path:path.resolve(__dirname,'../dist/'+htmlPath),
            publicPath:''
        },
        module: {
            rules: [
                { 
                    test: /\.css$/,
                    use: [
                      { loader: "style-loader" },
                      { loader: "css-loader" }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    }, {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: "less-loader" // 将 Sass 编译成 CSS
                    }]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']
                      }
                    }
                },
                {
                    test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: [{
                        loader:'url-loader',
                        query:{
                            limit:10000,//用的图片并且会按照文件大小, 或者转化为 base64, 或者单独作为文件,这里大于1kb的图片会作为文件
                            name:'[path][name].[ext]'//在某个路径的文件夹下生成那个图片名字的文件
                        }
                    }]
                },
                {
                    test:/\.juicer$/,
                    loader:'juicer-loader',
                },
                
            ]
        },
        plugins: [
            //new HtmlWebpackPlugin()
            new HtmlWebpackPlugin({
                filename: 'home.html',
                title: 'My App',
                template: path.resolve('../../config/base.html'),
                inject:true
            }),
            
        ]
    }
}
