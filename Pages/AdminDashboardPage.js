const { expect } = require('@playwright/test');
const { AdminLocators } = require('../Utils/adminLocators');

class AdminDashboardPage {

    constructor(page) {
        this.page = page;
        this.locators = new AdminLocators(page);
    }

    // TC_DASH_02
    async verifyLogoVisible() {
        await expect(this.locators.logo).toBeVisible();
    }

    // TC_DASH_03
    async verifyMegaSearchVisible() {
        await expect(this.locators.searchBar).toBeVisible();
    }

    // TC_DASH_04
    async toggleTheme() {
        await this.locators.themeIcon.click();
    }

    // TC_DASH_05
    async clickVisitShop() {
        await this.locators.visitShopIcon.click();
    }

    // TC_DASH_06
    async clickNotificationBell() {
        await this.locators.notificationIcon.click();
    }

    // TC_DASH_07
    async verifyNotificationCountVisible() {
        await expect(this.locators.notificationCount).toBeVisible();
    }

    // TC_DASH_08
    async clickViewAllNotifications() {
        await this.locators.viewAllNotifications.click();
    }

    // TC_DASH_09
    async clickMarkAllAsRead() {
        await this.locators.markAsRead.click();
    }

    // TC_DASH_10
    async clickProfileIcon() {
        await this.locators.profileIcon.click();
    }

    // TC_DASH_11
    async clickMyAccount() {
        await this.locators.myAccountOption.click();
    }

    // TC_DASH_12
    async logout() {
        await this.clickProfileIcon();
        await this.locators.logoutButton.click();
    }

    // TC_DASH_13
    async verifyAllSidebarOptionsVisible() {
        await expect(this.locators.sidebarDashboard).toBeVisible();
        await expect(this.locators.sidebarSales).toBeVisible();
        await expect(this.locators.sidebarCatalog).toBeVisible();
        await expect(this.locators.sidebarCustomers).toBeVisible();
        await expect(this.locators.sidebarMarketing).toBeVisible();
        await expect(this.locators.sidebarSettings).toBeVisible();
    }

    // TC_DASH_14
    async verifySidebarNavigationWork() {
        await this.locators.sidebarDashboard.click();
        await this.locators.sidebarSales.click();
        await this.locators.sidebarCatalog.click();
        await this.locators.sidebarCustomers.click();
        await this.locators.sidebarMarketing.click();
        await this.locators.sidebarSettings.click();
    }

    // TC_DASH_15
    async collapseSidebar() {
        await this.locators.sidebarCollapseBtn.click();
    }

    // TC_DASH_16 & 17
    async selectStartDate() {
        await expect(this.locators.startDate).toBeVisible();
    }

    async selectEndDate() {
        await expect(this.locators.endDate).toBeVisible();
    }

    // TC_DASH_18
    async verifyOverallDetails() {
        await expect(this.locators.overallDetails).toBeVisible();
    }

    // TC_DASH_19
    async verifyTodayDetails() {
        await expect(this.locators.todayDetails).toBeVisible();
    }

    // TC_DASH_20
    async verifyStockThreshold() {
        await this.page.mouse.wheel(0, 1000);
        await expect(this.locators.stockThreshold).toBeVisible();
    }

    // TC_DASH_21
    async verifyStoreStats() {
        await expect(this.locators.storeStats).toBeVisible();
    }

    // TC_DASH_22
    async verifyTotalSalesSection() {
        await expect(this.locators.totalSalesChart).toBeVisible();
    }

    // TC_DASH_23
    async verifyVisitorsSection() {
        await expect(this.locators.visitorsChart).toBeVisible();
    }

    // TC_DASH_24
    async verifyTopSellingProducts() {
        await this.page.mouse.wheel(0, 1000);
        await expect(this.locators.topSellingProducts).toBeVisible();
    }

    // TC_DASH_25
    async verifyCustomerWithMostSales() {
        await this.page.mouse.wheel(0, 1000);
        await expect(this.locators.customerMostSales).toBeVisible();
    }

}

module.exports = { AdminDashboardPage };
