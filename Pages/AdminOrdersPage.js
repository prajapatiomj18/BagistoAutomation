const { expect } = require('@playwright/test');
const { AdminLocators } = require('../Utils/adminLocators');

class AdminOrdersPage {
    constructor(page) {
        this.page = page;
        this.locators = new AdminLocators(page);
    }

    // --- Navigation ---
    async openOrdersPage() {
        await this.locators.salesMenu.click();
        await this.locators.ordersMenu.click();
        await this.page.waitForLoadState('networkidle');
    }

    // --- Search & Pagination (TC_02, 14, 16, 17) ---
    async verifySearchPlaceholder(expectedText) {
        await expect(this.locators.orderSearchInput).toHaveAttribute('placeholder', expectedText);
    }

    async searchOrder(value) {
        await this.locators.orderSearchInput.fill(value);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }

    async setPagination(value) {
        await this.locators.perPageDropdown.selectOption(value);
        await this.page.waitForLoadState('networkidle');
    }

    async applyStatusFilter(status) {
        await this.locators.statusDropdown.click();
        await this.page.locator('li', { hasText: new RegExp(`^${status}$`) }).click();
        await this.locators.applyFilterBtn.click();
    }

    async filterByDateRange(start, end) {
        await this.locators.startDateFilter.fill(start);
        await this.locators.endDateFilter.fill(end);
        await this.locators.applyFilterBtn.click();
    }

    async downloadExport(format) {
        const downloadPromise = this.page.waitForEvent('download');
        await this.locators.exportBtn.click();
        if (format === 'CSV') await this.locators.exportCSV.click();
        if (format === 'XLS') await this.locators.exportXLS.click();
        return await downloadPromise;
    }

    // --- Create Order Flow (TC_05, 25, 26, 27) ---
    async initiateCreateOrder() {
        await this.locators.createOrderBtn.click();
    }

    async searchCustomerInModal(query) {
        await this.locators.customerSearch.fill(query);
        await this.page.keyboard.press('Enter');
    }

    // --- Order Details Actions (TC_13, 28-46) ---
    async viewFirstOrderDetails() {
        await this.locators.viewOrderArrow.first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async cancelOrderWithConfirmation(confirm = true) {
        this.page.once('dialog', async dialog => {
            confirm ? await dialog.accept() : await dialog.dismiss();
        });
        await this.locators.cancelOrderBtn.click();
    }

    async addInternalComment(comment, notifyCustomer = false) {
        await this.locators.commentBox.fill(comment);
        if (notifyCustomer) {
            await this.locators.notifyCustomerCheckbox.check();
        } else {
            await this.locators.notifyCustomerCheckbox.uncheck();
        }
        await this.locators.submitCommentBtn.click();
    }

    // --- Complex Verifications ---
    async verifyFinancials(expectedSubtotal, expectedTotal) {
        await expect(this.locators.subtotal).toContainText(expectedSubtotal);
        await expect(this.locators.grandTotal).toContainText(expectedTotal);
    }

    async submitInternalComment(msg) {
        await this.locators.commentBox.fill(msg);
        await this.locators.notifyCustomerCheckbox.click();
        await this.locators.submitCommentBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { AdminOrdersPage };