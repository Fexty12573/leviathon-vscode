'use strict';

const merge = require('merge-options');

module.exports = function extendBaseConfig(subConfig) {
  let baseConfig = {
    mode: 'none', // The npm task `compile` overrides this to 'production' mode via webpack-cli
    target: 'node',
    resolve: { extensions: ['.ts', '.js'] },
    module: {
      rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            compilerOptions: { sourceMap: true }  // Maps are excluded from the extension bundle
          }
        }]
      }]
    },
    externals: { vscode: 'commonjs vscode' },
    output: {
      libraryTarget: 'commonjs',
      devtoolModuleFilenameTemplate: (info) => `file:///${info.absoluteResourcePath.replace(/\\/g, '/')}`
    },
    devtool: 'source-map'
  };

  return merge(baseConfig, subConfig);
};
