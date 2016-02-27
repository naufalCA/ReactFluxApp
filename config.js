var Config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths:{
    html: './src/*.html',
    js: './src/**/*.js',
    img:'./src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/build/toastr.min.css'
    ],
    mainJs: './src/main.js',
    dist: './dist'
  }
};

module.exports = Config;
