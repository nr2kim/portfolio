module.exports = {
    name: "katekimPortfolio",
    context: __dirname + "/src",
    entry: [
        './katekimPortfolio.tsx'
    ],
    output: {
        filename: "katekimPortfolio.js",
        path: __dirname + "/dist"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".css"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /.tsx?$/, loader: "ts-loader" },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
              },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /.js$/, loader: "source-map-loader" },
        ]
    },
    node: {
        fs: 'empty'
    }
};
