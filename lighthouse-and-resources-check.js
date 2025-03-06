import { chromium } from 'playwright';
import fs from 'fs';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const JDN_URL = "https://www.jdn.co.il";

async function generateLightHouseReportAsJson(url) {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'seo', 'accessibility', 'best-practices'],
    port: chrome.port};

const runnerResult = await lighthouse(url, options);

fs.writeFileSync('lhreport.json', JSON.stringify(runnerResult.lhr, null, 2));

chrome.kill();
}

async function validateResources(url) {
    const browser = await chromium.launch({headless: true});
    const page = await browser.newPage();

    console.log("Checking resources for the url: ", url);
    page.on("response", async (response) => {
        const _url = response.url();
        const status = response.status();
        if (status !== 200) {
            console.log(`Invalid URL: ${_url}. Status code: ${status}`);
        }
    });

    console.log("Navigating to url: ", url);
    await page.goto(url, {waitUntil: 'load'});

    console.log("Closing browser...");
    await browser.close();
    
}

// generateLightHouseReportAsJson(JDN_URL);
validateResources(JDN_URL);
