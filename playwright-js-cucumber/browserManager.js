const playwright = require('playwright');

async function launchBrowser() {
    const options = {
        headless: false,
        slowMo: 100,
        args: ["--start-maximized"]
    };
    return await playwright[global.BROWSER_NAME].launch(options);
}

async function closeBrowser(browser) {
    await browser.close();
}

module.exports = { launchBrowser, closeBrowser };
