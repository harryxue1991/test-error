const HtmlWebpackPlugin = require("html-webpack-plugin")
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/ //排除这些文件
            }
        ]
    },
    devtool:
        process.env.NODE_ENV === "production" ? false : "inline-source-map",
    devServer: {
        contentBase: "./dist",
        stats: "errors-only",
        compress: false,
        host: "localhost",
        port: 8888
    },
    plugins: [
        // 清除打包后的文件
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: ["./dist"]
        // }),
        // 模版文件
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
}
