const playwright = require('@playwright/test');

async function launchBrowser(browserName) {
    let options = {};

    switch (browserName) {
        case 'chromium':
            options = {
                headless: false, slowMo: 100, args: ["--start-maximized"]
            };
            break;
        case 'firefox':
            options = {
                headless: false, slowMo: 100, args: ["--kiosk"]
            };
            break;
        case 'webkit':
            options = {
                headless: false, slowMo: 100
            };
            break;
        default:
            throw new Error(`Unsupported browser: ${browserName}`);
    }

    return await playwright[browserName].launch(options);
}

async function closeBrowser(browser) {
    await browser.close();
}

module.exports = {launchBrowser, closeBrowser};
