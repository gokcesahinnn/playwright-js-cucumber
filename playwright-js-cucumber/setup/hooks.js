const { BeforeAll, Before, After, AfterAll, Status } = require('@cucumber/cucumber');
const { launchBrowser, closeBrowser } = require('../browserManager');

BeforeAll(async () => {
    console.log('before all ...');
    global.browser = await launchBrowser();
});

AfterAll(async () => {
    console.log('after all ...');
    await closeBrowser(global.browser);
});

Before(async () => {
    console.log('before ...');
    global.context = await global.browser.newContext({ viewport: null });
    global.page = await global.context.newPage();
});

After(async () => {
    console.log('after pass...');
    await global.page.close();
    await global.context.close();
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        var buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true })
        this.attach(buffer, 'image/png');
    }
});