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

    test('TC_DASH_01 - Verify dashboard page correctly loaded', async ({ page }) => {
        await expect(page).toHaveURL(/dashboard/);
    });


    test('TC_DASH_02 - Verify Bagisto Logo is visible', async () => {
        await dashboard.verifyLogoVisible();
    });

    test('TC_DASH_03 - Verify Mega Search box is visible', async () => {
        await dashboard.verifyMegaSearchVisible();
    });

    test('TC_DASH_04 - Click theme moon/sun icon', async () => {
        await dashboard.toggleTheme();
    });

    test('TC_DASH_05 - Click Visit Shop icon', async () => {
        await dashboard.clickVisitShop();
    });

    test('TC_DASH_06 - Click Notification Bell icon', async () => {
        await dashboard.clickNotificationBell();
    });

    test('TC_DASH_07 - Verify Notification Count visible', async () => {
        await dashboard.verifyNotificationCountVisible();
    });

    test('TC_DASH_08 - Click View All notifications', async () => {
        await dashboard.clickNotificationBell();
        await dashboard.clickViewAllNotifications();
    });

    test('TC_DASH_09 - Click Mark as Read', async () => {
        await dashboard.clickNotificationBell();
        await dashboard.clickMarkAllAsRead();
    });

    test('TC_DASH_10 - Click Profile icon', async () => {
        await dashboard.clickProfileIcon();
    });

    test('TC_DASH_11 - Click My Account', async () => {
        await dashboard.clickProfileIcon();
        await dashboard.clickMyAccount();
    });

    test('TC_DASH_12 - Logout functionality', async () => {
        await dashboard.logout();
    });

    test('TC_DASH_13 - Verify all sidebar options visible', async () => {
        await dashboard.verifyAllSidebarOptionsVisible();
    });

    test('TC_DASH_14 - Verify sidebar navigation working', async () => {
        await dashboard.verifySidebarNavigationWork();
    });

    test('TC_DASH_15 - Collapse Sidebar', async () => {
        await dashboard.collapseSidebar();
    });

    test('TC_DASH_16 - Verify Start Date calendar', async () => {
        await dashboard.selectStartDate();
    });

    test('TC_DASH_17 - Verify End Date calendar', async () => {
        await dashboard.selectEndDate();
    });

    test('TC_DASH_18 - Verify Overall Details section', async () => {
        await dashboard.verifyOverallDetails();
    });

    test('TC_DASH_19 - Verify Today Details section', async () => {
        await dashboard.verifyTodayDetails();
    });

    test('TC_DASH_20 - Verify Stock Threshold section', async () => {
        await dashboard.verifyStockThreshold();
    });

    test('TC_DASH_21 - Verify Store Stats section', async () => {
        await dashboard.verifyStoreStats();
    });

    test('TC_DASH_22 - Verify Total Sales section', async () => {
        await dashboard.verifyTotalSalesSection();
    });

    test('TC_DASH_23 - Verify Visitors section', async () => {
        await dashboard.verifyVisitorsSection();
    });

    test('TC_DASH_24 - Verify Top Selling Products section', async () => {
        await dashboard.verifyTopSellingProducts();
    });

    test('TC_DASH_25 - Verify Customer with Most Sales section', async () => {
        await dashboard.verifyCustomerWithMostSales();
    });

});
