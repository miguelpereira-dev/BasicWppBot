import puppeteer from 'puppeteer';

const main = async () => {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		page.setUserAgent(
			'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
		);

		await page.goto('https://web.whatsapp.com/');
		await page.waitForSelector('._1KBFI');
		await delay(5000);

		const contactName = '+55 33 8436-6446';
		await page.click(`span[title='${contactName}']`);
		await page.waitForSelector('._1JAUF');

		//Finds the message bar and focuses on it
		const editor = await page.$("div[data-tab='6']");
		await editor.focus();

		page.evaluate(() => {
			document.execCommand('insertText', false, 'afsfaffs fasfaf');
        });
        
        page.click("span[data-testid='send']");
        
	} catch (err) {
		console.log(err);
	}
};

function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}
main();
