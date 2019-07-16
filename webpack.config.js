var Visualizer = require("webpack-visualizer-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "index.js",
        library: "ConditionalManager",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    plugins: [new Visualizer()]
};
