const { test, expect } = require('@playwright/test');
const { AdminLoginPage } = require('../Pages/AdminLoginPage');
const { AdminDashboardPage } = require('../Pages/AdminDashboardPage');
const { ADMINLOGIN } = require('../Utils/testData');

test.describe('Bagisto Admin Dashboard Test Cases', () => {

    let dashboard;
    let login;

    test.beforeEach(async ({ page }) => {
        login = new AdminLoginPage(page);
        await login.open();
        await login.login(ADMINLOGIN.EMAIL, ADMINLOGIN.PASSWORD);
        dashboard = new AdminDashboardPage(page);
    });

    test('TC_ADASH_01 - Verify dashboard page correctly loaded', async ({ page }) => {
        await expect(page).toHaveURL(/dashboard/);
    });


    test('TC_ADASH_02 - Verify Bagisto Logo is visible', async () => {
        await dashboard.verifyLogoVisible();
    });

    test('TC_ADASH_03 - Verify Mega Search box is visible', async () => {
        await dashboard.verifyMegaSearchVisible();
    });

    test('TC_ADASH_04 - Click theme moon/sun icon', async () => {
        await dashboard.toggleTheme();
    });

    test('TC_ADASH_05 - Click Visit Shop icon', async () => {
        await dashboard.clickVisitShop();
    });

    test('TC_ADASH_06 - Click Notification Bell icon', async () => {
        await dashboard.clickNotificationBell();
    });

    test('TC_ADASH_07 - Verify Notification Count visible', async () => {
        await dashboard.verifyNotificationCountVisible();
    });

    test('TC_ADASH_08 - Click View All notifications', async () => {
        await dashboard.clickNotificationBell();
        await dashboard.clickViewAllNotifications();
    });

    test('TC_ADASH_09 - Click Mark as Read', async () => {
        await dashboard.clickNotificationBell();
        await dashboard.clickMarkAllAsRead();
    });

    test('TC_ADASH_10 - Click Profile icon', async () => {
        await dashboard.clickProfileIcon();
    });

    test('TC_ADASH_11 - Click My Account', async () => {
        await dashboard.clickProfileIcon();
        await dashboard.clickMyAccount();
    });

    test('TC_ADASH_12 - Logout functionality', async () => {
        await dashboard.logout();
    });

    test('TC_ADASH_13 - Verify all sidebar options visible', async () => {
        await dashboard.verifyAllSidebarOptionsVisible();
    });

    test('TC_ADASH_14 - Verify sidebar navigation working', async () => {
        await dashboard.verifySidebarNavigationWork();
    });

    test('TC_ADASH_15 - Collapse Sidebar', async () => {
        await dashboard.collapseSidebar();
    });

    test('TC_ADASH_16 - Verify Start Date calendar', async () => {
        await dashboard.selectStartDate();
    });

    test('TC_ADASH_17 - Verify End Date calendar', async () => {
        await dashboard.selectEndDate();
    });

    test('TC_ADASH_18 - Verify Overall Details section', async () => {
        await dashboard.verifyOverallDetails();
    });

    test('TC_ADASH_19 - Verify Today Details section', async () => {
        await dashboard.verifyTodayDetails();
    });

    test('TC_ADASH_20 - Verify Stock Threshold section', async () => {
        await dashboard.verifyStockThreshold();
    });

    test('TC_ADASH_21 - Verify Store Stats section', async () => {
        await dashboard.verifyStoreStats();
    });

    test('TC_ADASH_22 - Verify Total Sales section', async () => {
        await dashboard.verifyTotalSalesSection();
    });

    // test('TC_ADASH_23 - Verify Visitors section', async () => {
    //     await dashboard.verifyVisitorsSection();
    // });

    test('TC_ADASH_24 - Verify Top Selling Products section', async () => {
        await dashboard.verifyTopSellingProducts();
    });

    test('TC_ADASH_25 - Verify Customer with Most Sales section', async () => {
        await dashboard.verifyCustomerWithMostSales();
    });

});
