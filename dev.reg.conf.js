exports.config = {
    runner: 'local',
    specs: [
        './test/reg/*.js'
        //'./test/reg/client.js',
        //'./test/reg/login.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    },{
        maxInstances: 1,
        browserName: 'firefox',
    }
    ],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://reactbugtracker.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['dot','spec','allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    },
}
