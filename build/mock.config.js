const config = require('../config')
// mock配置
module.exports =  mockChuncks = (() => {
    const envArgs = JSON.parse(process.env.npm_config_argv).original;
    let mockConfig = {
        isMock: false,
        chuncks : ['app'],
        proxy : config.dev.proxyTable
    };
    if(envArgs.indexOf('--mock') !== -1) {
        mockConfig = {
            isMock: true,
            chuncks : ['mock', 'app'],
            proxy : {}
        }
    }
    return mockConfig;
})();
