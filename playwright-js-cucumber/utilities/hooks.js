const { BeforeAll, Before, After, AfterAll, Status } = require('@cucumber/cucumber');
const { launchBrowser, closeBrowser } = require('./driverManager');


Before(async () => {
    console.log('before');
    global.browser = await launchBrowser(global.BROWSER_NAME);
    global.context = await global.browser.newContext({ viewport: null });
    global.page = await global.context.newPage();
});

After(async function (scenario) {
    console.log('after');
    if (scenario.result.status === Status.FAILED) {
        const currentDate = new Date().toISOString().replace(/:/g, '-');
        const screenshotName = `${scenario.pickle.name.replace(/\s+/g, '_')}_${currentDate}.png`;
        const buffer = await global.page.screenshot({ path: `reports/${screenshotName}`, fullPage: true });
        this.attach(buffer, 'image/png');
    }
    await global.page.close();
    await global.context.close();
    await closeBrowser(global.browser);
});