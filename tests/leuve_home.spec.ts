import { test, expect } from '@playwright/test';

test('Open homppage and get products between 10 and 20.5 pounds', async ({ page }) => {
 await page.goto('https://leuvelondon.com/');
 await page.getByRole('link', { name: 'Shop all' }).click();
 await page.getByRole('button', { name: 'Price' }).click();
 await page.getByRole('spinbutton', { name: 'From' }).click();
 await page.getByRole('spinbutton', { name: 'From' }).fill('10');
 await page.getByRole('spinbutton', { name: 'To' }).click();
 await page.getByRole('spinbutton', { name: 'To' }).fill('20.5');
 await page.getByRole('spinbutton', { name: 'To' }).press('Escape');

 await page.waitForTimeout(1000);
 const productsParentLocator = page.locator("//ul[@id='product-grid']");
 // Get all li elements (children)
 const liChildren = productsParentLocator.locator('li');

 // Get the count of li elements
 const liCount = await liChildren.count();

 // Iterate over each li element
 for (let i = 0; i < liCount; i++) {
     const li = liChildren.nth(i);
     const text = await li.innerText();
     console.log(`List Item ${i}: ${text}`);
 }

});
