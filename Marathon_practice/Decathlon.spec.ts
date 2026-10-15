// 1. Launch the browser.
import {test,expect} from "@playwright/test";

//2. Navigate to https://www.decathlon.in/.
test('Decathlon Shoe Ordering', async({page}) => {
await page.goto('https://www.decathlon.in/');
await page.waitForLoadState("domcontentloaded");
//3. Verify the user is navigated to the Decathlon home page.
await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App");
console.log(await page.title());
//4. Click on the Search icon on the home page.
await page.locator('//input[@type="search"]').click();
//5. Verify the search input field is enabled.
let searchEnabled = page.locator('//input[@type="search"]').isEnabled;
console.log("Search is enabled");
//6. Enter the product name as "shoes" in the search field.
await page.locator('//input[@type="search"]').fill("Shoes");
//7. Press Enter to search the product.
await page.locator('//input[@type="search"]').press('Enter');
//8. Capture and print the page title in the console.
await page.waitForTimeout(2000);
console.log(page.title());
//9. Verify the page title is displayed as "Search | shoes".
await expect(page).toHaveTitle("Search | Shoes")
//10. Click on the "Running" category filter.
await page.locator('//button[@aria-controls="sport_pratice_en"]').click()
await page.locator('//input[@data-test-id="filter-checkbox-sport_pratice_en-Running"]').click()
//11. Select Gender Men
await page.locator('//span[@data-test-id="title:Gender"]').click();
await page.locator('//input[@data-test-id="filter-checkbox-gender_id_en-MEN"]').click();
//12. Click on the shoe size filter "UK 10.5".
await page.locator('//span[@data-test-id="title:Size"]').click();
await page.getByRole('checkbox',{name:"10.5 17"}).click();
//13. Click on the "Most relevant" sorting dropdown.
await page.locator('//span[text()="Most relevant"]').click();
//14. Select "Price: Low to High" from the sorting options.
await page.locator('(//span[@class="flex items-center gap-2"])[2]').click();
//15. Click on the first product from the displayed product list.
await page.locator('//div[@data-test-id="product-card:product-card:title"]').first().click();
//16. Select the shoe size "UK 10.5 - EU 45" on the product detail page.
//await page.locator('//button[@aria-controls="indian_size"]').click();
await page.locator('//span[@data-test-id="pdp-size-option-text-6"][text()="10.5"]').click();
//17. Click on the "Add to Cart" button.
await page.getByRole('button',{name:"Add to cart"}).click();
//if the popup appears, click Close
setTimeout(()=>{debugger},4000);
await page.locator('//div[@class="dy-lb-close"]').click();
//18. Click on the Cart option.
await page.locator('//span[@data-test-id="header-desktop-cart:text"][text()="Cart"]').click();
//19. Fetch the total cart value.
let orderValue= await expect(page.locator('//span[@data-test-id="cart:product-selling-price"]')).toBeVisible();
let totalCartAmount= await page.locator('//p[@classname="font-semibold"][text()="₹1,599"]').innerText();

//20. Print the total cart amount in the console */
console.log("Total Value of th Shoe is", totalCartAmount);

})
