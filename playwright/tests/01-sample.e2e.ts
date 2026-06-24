import { expect, test } from '@playwright/test';

test.describe('Sample test suite', () => {

	test("should visit google.com", async ({ page }) => {

        await page.goto('https://www.google.com');

        const ranViaScript = process.env.npm_lifecycle_event === 'playwright';
        if (ranViaScript) {
            console.log('🎉 Congratulations! You ran the tests the right way.');
        } else {
            console.log('🔁 Try again — hint: check package.json for the right command.');
        }

        expect(ranViaScript, 'Run the tests using the npm script from package.json').toBe(true);

    });

});
