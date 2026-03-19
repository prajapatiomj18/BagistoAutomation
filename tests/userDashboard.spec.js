const { test, expect } = require('@playwright/test');
const { CommonMethods } = require('../Utils/commonMethods');
const { UserDashboardPage } = require('../Pages/UserDashboardPage');

test.describe('Bagisto User Dashboard Full Test Suite', () => {

    let dashboard;
    let common;
    common = new CommonMethods();

    test.beforeEach(async ({ page }) => {
        dashboard = new UserDashboardPage(page);
        await dashboard.open();
    });

    // ---------------- 001–005 Dashboard & Header

    test('TC_DASH_001 - Verify dashboard loaded correctly', async () => {
        await dashboard.verifyDashboard();
    });

    test('TC_DASH_002 - Verify clicking on Go to Admin Panel link', async () => {
        await dashboard.clickAdminPanel();
    });

    test('TC_DASH_003 - Verify currency change dropdown', async () => {
        await expect(dashboard.loc.dashboardCurrencyButton).toBeVisible();
    });

    test('TC_DASH_004 - Verify language change dropdown', async () => {
        await expect(dashboard.loc.dashboardLanguageButton).toBeVisible();
    });

    test('TC_DASH_005 - Verify clicking on All option of header', async () => {
        await dashboard.dashboardAllCategory();
    });

    // ---------------- 006–010 Header Functionalities

    test('TC_DASH_006 - Verify hover on all different sections of Header', async () => {
        await dashboard.hoverOnHeaderSections();
    });

    test('TC_DASH_007 - Verify clicking on different categories available on header', async () => {
        await dashboard.clickHeaderCategories();
    });

    test('TC_DASH_008 - Verify Search product by name', async () => {
        await dashboard.searchProduct('Jacket');
    });

    test('TC_DASH_009 - Verify compare product button on Header', async () => {
        await dashboard.loc.dashboardCompareIcon.click();
    });

    test('TC_DASH_010 - Verify cart button on header', async () => {
        await dashboard.loc.dashboardCartIcon.click();
    });

    // ---------------- 011–015 Profile & Carousel

    test('TC_DASH_011 - Verify profile button on header', async () => {
        await dashboard.loc.dashboardProfileIcon.click();
    });

    test('TC_DASH_012 - Verify carousel display correctly', async () => {
        await dashboard.verifyCarousel();
    });

    test('TC_DASH_013 - Verify clicking on Previous and Next button in carousel', async () => {
        await dashboard.clickCarouselNextPrev();
    });

    test('TC_DASH_014 - Verify all categories icons aligned properly', async () => {
        await expect(dashboard.loc.categoryScrollbar).toBeVisible();
    });

    test('TC_DASH_015 - Verify clicking different categories in scrollbar', async () => {
        await dashboard.clickCategoryScrollbar();
    });

    // ---------------- 016–021 Women's Collection

    test('TC_DASH_016 - Verify Women Collection heading display', async () => {
        await expect(dashboard.loc.dashboardWomenCollection).toBeVisible();
    });

    test('TC_DASH_017 - Verify Previous and Next button of Women Collection', async () => {
        await dashboard.clickWomenNextPrev();
    });

    test('TC_DASH_018 - Verify hovering effects on Women products', async () => {
        await dashboard.hoverOnAnyWomenProduct();
    });

    test('TC_DASH_019 - Verify clicking Add to Cart (Women)', async () => {
        await dashboard.hoverOnAnyWomenProduct();
        await dashboard.clickAddToCart();
    });

    test('TC_DASH_020 - Verify clicking Wishlist (Women)', async () => {
        await dashboard.hoverOnAnyWomenProduct();
        await dashboard.clickWishlist();
    });

    test('TC_DASH_021 - Verify clicking View All button (Women)', async () => {
        await dashboard.loc.dashboardWomenCollectionBtn.click();
    });

    // ---------------- 022–024 Top Collection

    test('TC_DASH_022 - Verify Top Collection heading display', async () => {
        await expect(dashboard.loc.dashboardTopCollection).toBeVisible();
    });

    test('TC_DASH_023 - Verify hovering effect on Top Collection products', async () => {
        await dashboard.hoverOnAnyProductTop();
    });

    test('TC_DASH_024 - Verify clicking View Collection button (Top)', async () => {
        await dashboard.hoverOnAnyProductTop();
        await dashboard.loc.TopCollectionProductCard.click();
    });

    // ---------------- 025–030 Men's Collection

    test('TC_DASH_025 - Verify Men Collection heading display', async () => {
        await expect(dashboard.loc.dashboardMenCollection).toBeVisible();
    });

    test('TC_DASH_026 - Verify Previous and Next button of Men Collection', async () => {
        await dashboard.clickMenNextPrev();
    });

    test('TC_DASH_027 - Verify hovering effects on Men products', async () => {
        await dashboard.hoverOnAnyMenProduct();
    });

    test('TC_DASH_028 - Verify clicking Add to Cart (Men)', async () => {
        await dashboard.hoverOnAnyMenProduct();
        await dashboard.clickAddToCart();
    });

    test('TC_DASH_029 - Verify clicking Wishlist (Men)', async () => {
        await dashboard.hoverOnAnyMenProduct();
        await dashboard.clickWishlist();
    });

    test('TC_DASH_030 - Verify clicking View All button (Men)', async () => {
        await dashboard.loc.dashboardMenCollectionBtn.click();
    });

    // ---------------- 031–036 Kid Collection

    test('TC_DASH_031 - Verify Kid Collection heading display', async () => {
        await expect(dashboard.loc.dashboardKidCollection).toBeVisible();
    });

    test('TC_DASH_032 - Verify Previous and Next button of Kid Collection', async () => {
        await dashboard.clickKidNextPrev();
    });

    test('TC_DASH_033 - Verify hovering effects on Kid products', async () => {
        await dashboard.hoverOnAnyKidProduct();
    });

    test('TC_DASH_034 - Verify clicking Add to Cart (Kid)', async () => {
        await dashboard.hoverOnAnyKidProduct();
        await dashboard.clickAddToCart();
    });

    test('TC_DASH_035 - Verify clicking Wishlist (Kid)', async () => {
        await dashboard.hoverOnAnyKidProduct();
        await dashboard.clickWishlist();
    });

    test('TC_DASH_036 - Verify clicking View All button (Kid)', async () => {
        await dashboard.loc.dashboardKidCollectionBtn.click();
    });

    // ---------------- 037–043 Book Tickets

    test('TC_DASH_037 - Verify clicking View Collection (General)', async () => {
        await dashboard.loc.dashboardTicketCollectionBtn.click();
    });

    test('TC_DASH_038 - Verify Book Tickets heading display', async () => {
        await expect(dashboard.loc.dashboardTicketCollection).toBeVisible();
    });

    test('TC_DASH_039 - Verify Previous and Next button of Book Tickets', async () => {
        await dashboard.clickTicketNextPrev();
    });

    test('TC_DASH_040 - Verify hovering effects on Book Tickets products', async () => {
        await dashboard.hoverOnAnyTicketProduct();
    });

    test('TC_DASH_041 - Verify clicking Add to Cart (Ticket)', async () => {
        await dashboard.hoverOnAnyTicketProduct();
        await dashboard.clickAddToCart();
    });

    test('TC_DASH_042 - Verify clicking Wishlist (Ticket)', async () => {
        await dashboard.hoverOnAnyTicketProduct();
        await dashboard.clickWishlist();
    });

    test('TC_DASH_043 - Verify clicking View All button (Ticket)', async () => {
        await dashboard.loc.dashboardTicketCollectionBtn.click();
    });

    // ---------------- 044–045 Footer

    test('TC_DASH_044 - Verify all facilities above footer visible', async () => {
        await expect(dashboard.loc.footerAboutUs).toBeVisible();
    });

    test('TC_DASH_045 - Verify clicking on different options in footer', async () => {
        await dashboard.loc.footerAboutUs.click();
        await dashboard.loc.footerContactUs.click();
        await dashboard.loc.footerPrivacyPolicy.click();
        // await dashboard.loc.footerRefundPolicy.click();
    });

    // ---------------- 046–049 Subscribe

    test('TC_DASH_046 - Verify subscribe button clickable', async () => {
        await dashboard.subscribeEmail('test@example.com');
    });

    test('TC_DASH_047 - Verify subscribe with valid email', async () => {
        await dashboard.subscribeEmail('john@example.com');
    });

    test('TC_DASH_048 - Verify subscribe with invalid email', async () => {
        await dashboard.subscribeEmail('john@example');
        await expect(dashboard.loc.subscribeError).toBeVisible();
    });

    test('TC_DASH_049 - Verify subscribe with empty email', async () => {
        await dashboard.subscribeEmail('');
        await expect(dashboard.loc.subscribeError).toBeVisible();
    });

});
