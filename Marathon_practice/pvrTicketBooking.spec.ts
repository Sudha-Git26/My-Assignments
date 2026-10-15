import {test,expect} from "@playwright/test"
test('Launch the browser for PVR Cinemas Ticket Booking', async ({page}) => {
 //1.Launch the browser and open https://www.pvrcinemas.com/  
await page.goto('https://www.pvrcinemas.com/');

//2. Select the city as “Chennai” 
await page.locator('//div[@aria-label="[object Object]"]').click()
await page.locator('//div[@class="cities-names"]/following::span[text()="Chennai"][1]').click()

 /*  await expect(page.locator('(//span[text()="Delhi"])[2]')).toBeVisible();
await page.locator('(//span[text()="Delhi"])[2]').click();
  await page.locator('//input[@placeholder="Search for city"]').fill("Chennai");
  await page.locator('//li[text()="Chennai"]').click(); */
console.log('Selected city is Chennai');

//3. Choose cinema from the available list 
  //await page.locator('(//span[text()="Cinema"])').click();
await page.locator('(//div[@class="nav-icons"])[3]').click();
await page.getByRole('heading',{name:"INOX Chennai Citi Centre,Dr. R. K. Salai Chennai"}).click();

//4. Select movie date
 await page.locator('//span[text()="Tomorrow"]').click();
//5. Choose any available movie 6.Select available show time 
//await expect(page.getByText('DOROTHY')).toBeVisible();
await page.locator('//div[@class="show-times"]/h5[text()="10:40 PM"]').click();
await page.waitForTimeout(5000);
//7. Click on Book button 
await page.getByRole('button',{name:"Accept"}).click();
//8. Click on Accept for Terms & Conditions
await page.getByRole('button',{name:"Accept"}).click();

//9. Select the available seat 
await page.locator('//td[@class="seats-col"]//span[text()="18"]').first().click();
//10. Verify seat information and total ticket amount using assertions 
await expect(page.locator('//div[@class="booking-summary"]')).toBeVisible();
//11. Verify the Title of the page 
console.log(await page.title());
await expect(page).toHaveTitle("PVR Cinemas");

//12. Proceed to booking 
await page.getByRole('button',{name:"Proceed"}).click();

})