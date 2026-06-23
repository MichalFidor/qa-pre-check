import { expect, test } from '@playwright/test';

test.describe('Sample test suite', () => {

	test("should visit google.com", async ({ page }) => {

        await page.goto('https://www.google.com');
        expect(true).toBe(true);

    });

});
