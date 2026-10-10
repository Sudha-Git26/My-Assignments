import { webkit,test } from "@playwright/test";
test("File lauch flipkart", async()=>{

let browser = await webkit.launch({headless:false});
let context = await browser.newContext();
let page = await context.newPage();
await page.goto("https://www.flipkart.com");


console.log(page.url());
page.waitForLoadState("domcontentloaded");
console.log(await page.title());

})

test.only('learn to launch the browser using page fixture',async({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')

}) 