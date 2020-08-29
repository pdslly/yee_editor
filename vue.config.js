module.exports = {
    pages: {
        index: {
            entry: 'src/editor/main.js',
            template: 'public/index.html',
            title: '爱前端H5可视化编辑',
            chunks: ['index', 'chunk-vendors', 'chunk-common', 'chunk-element-ui']
        },
        preview: {
            entry: 'src/preview/main.js',
            template: 'public/preview.html',
            title: '爱前端H5预览页',
            chunks: ['preview', 'chunk-vendors', 'chunk-common']
        },
        screenshot: {
            entry: 'src/screenshot/main.js',
            template: 'public/screenshot.html',
            title: '爱前端H5截屏页',
            chunks: ['screenshot', 'chunk-vendors', 'chunk-common']
        }
    },
    publicPath: process.env.NODE_ENV === "production" ? "/yee/" : "/",
    devServer: {
        port: 8080,
        host: "0.0.0.0",
        proxy: process.env.VUE_APP_DOMAIN
    },
    productionSourceMap: false,
    parallel: true,
    css: {
        // 是否提取css 生产环境可以配置为 true
        extract: process.env.NODE_ENV === "production"
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === "production") {
          // 删除系统默认的splitChunk
          config.optimization.delete("splitChunks");
        }
    },
    configureWebpack: config => {
        config.output.filename = "[name].[hash].js";
        config.output.chunkFilename = "[name].[hash].js";

        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    common: {
                        name: "chunk-common",
                        chunks: "initial",
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    },
                    vendors: {
                        name: "chunk-vendors",
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "initial",
                        priority: 2,
                        reuseExistingChunk: true,
                        enforce: true
                    },
                    element: {
                        name: "chunk-element-ui",
                        test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                        chunks: "all",
                        priority: 3,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        }
    }
}