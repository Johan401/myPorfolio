// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Add rule for pdf files
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/files',
              outputPath: 'static/files',
              name: '[name].[ext]',
            },
          },
        ],
      });
  
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
        };
      }
  
      return config;
    },
  };
  