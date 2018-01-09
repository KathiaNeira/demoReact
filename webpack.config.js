const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "ready.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            // Todos los archivos con una extensión '.ts' o '.tsx' serán manejados por 'awesome-typescript-loader
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // Todos los archivos de salida '.js' tendrán cualquier mapa de origen re-procesado por 'gestor de mapas de origen'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
}