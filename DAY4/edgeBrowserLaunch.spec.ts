import { chromium, test } from "@playwright/test";

//Load Red Bus in an Edge browser instance and verify the page title and URL
test("Edge Browser Launch for RedBus",async()=>{
    
    let browser= await chromium.launch({channel:"msedge",headless:false});
    let context= await browser.newContext();
    let page= await context.newPage();
    await page.goto("https://www.redbus.in");

    const URL=page.url();
    console.log(URL);
    await page.waitForLoadState('domcontentloaded');

    const Title=await page.title();
    console.log(Title);


} )
