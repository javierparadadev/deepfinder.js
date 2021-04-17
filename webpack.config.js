const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'deepgetter.js',
    path: path.resolve(__dirname, './dist/'),
    library: 'sf'
  },
  mode: 'production'
}
