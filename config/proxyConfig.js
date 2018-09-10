module.exports = {
  proxyList: {
    '/api': {
      target: 'http://ceshi.tower.haibian.com',
      changeOrigin: true,
      //pathRewrite: {'^/course': '' }
    }
    
  }
}
