const { expect } = require('@playwright/test');

class CommonMethods {

    async acceptCookiesIfPresent(page) {
        const acceptBtn = page.locator('//button[contains(text(),"Accept")]');
        if (await acceptBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
            await acceptBtn.click();
        }
    }

    async fillField(locator, value) {
        await locator.fill('');
        await locator.type(value, { delay: 50 });
        await locator.page().waitForTimeout(300);
    }

    async clickElement(locator) {
        await locator.scrollIntoViewIfNeeded();
        await locator.click();
        await locator.page().waitForTimeout(500);
    }

    async verifyElementVisible(locator) {
        await expect(locator).toBeVisible();
    }

    async verifyTextVisible(locator, text) {
        await expect(locator).toBeVisible();
        await expect(locator).toContainText(text);
    }

    async verifyURL(page, value) {
        await expect(page).toHaveURL(value);
    }

    async getAttribute(locator, attr) {
        return await locator.getAttribute(attr);
    }
}

module.exports = { CommonMethods };
