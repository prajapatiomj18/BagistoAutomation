const { expect } = require('@playwright/test');
const { Locators } = require('../Utils/locators');
const { stat } = require('node:fs');

class UserDashboardPage {
    constructor(page) {
        this.page = page;
        this.loc = new Locators(page);
    }

    async open() {
        await this.page.goto('https://commerce.bagisto.com/', { waitUntil: 'domcontentloaded' });
        await this.page.waitForLoadState('networkidle');
    }

    async verifyDashboard() {
        await expect(this.loc.dashboardLogo).toBeVisible();
    }

    async clickAdminPanel() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), 
            this.loc.dashboardAdminLink.click(),   
        ]);

        await newPage.waitForLoadState('domcontentloaded'); 
        expect(newPage.url()).toContain('/admin/login');
    }

    async dashboardAllCategory() {
        await this.loc.MensNavigation.click();
        await this.loc.WomensNavigation.click();
        await this.loc.KidsNavigation.click();
    }

    async hoverOnHeaderSections() {
        await this.loc.MensNavigation.hover();
        await this.loc.WomensNavigation.hover();
        await this.loc.KidsNavigation.hover();
    }

    async clickHeaderCategories() {
        await this.loc.MensNavigation.click();
        await this.loc.WomensNavigation.click();
        await this.loc.KidsNavigation.click();
    }

    async searchProduct(product) {
        await this.loc.dashboardSearchInput.fill(product);
        await this.loc.dashboardSearchInput.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }


    async verifyCarousel() {
        await expect(this.loc.dashboardCarousel).toBeVisible();
    }

    async clickCarouselNextPrev() {
        await this.loc.carouselNextBtn.click();
        await this.loc.carouselPrevBtn.click();
    }

    async clickCategoryScrollbar() {
        await this.loc.categoryScrollbar.click();
    }

    async clickWomenNextPrev() {
        await this.loc.dashboardWomenNextBtn.click();
        await this.loc.dashboardWomenPreviousBtn.click();
    }

    async clickMenNextPrev() {
        await this.loc.dashboardMenNextBtn.click();
        await this.loc.dashboardMenPreviousBtn.click();
    }

    async clickKidNextPrev() {
        await this.loc.dashboardKidNextBtn.click();
        await this.loc.dashboardKidPreviousBtn.click();
    }

    async clickTicketNextPrev() {
        await this.loc.dashboardTicketNextBtn.click();
        await this.loc.dashboardTicketPreviousBtn.click();
    }

    async hoverOnAnyWomenProduct() {
        for (let i = 0; i < 8; i++) { 
            await this.page.mouse.wheel(0, 100);
            await this.page.waitForTimeout(100); 
        }
        await this.loc.WomenProductCard.hover();
    }

    async hoverOnAnyMenProduct() {
        for (let i = 0; i < 8; i++) { 
            await this.page.mouse.wheel(0, 800);
            await this.page.waitForTimeout(100); 
        }
        await this.loc.MenProductCard.hover();
    }

    async hoverOnAnyKidProduct() {
        for (let i = 0; i < 8; i++) { 
            await this.page.mouse.wheel(0, 1000);
            await this.page.waitForTimeout(100); 
        }
        await this.loc.KidProductCard.hover();
    }

    async hoverOnAnyTicketProduct() {
        for (let i = 0; i < 8; i++) { 
            await this.page.mouse.wheel(0, 1100);
            await this.page.waitForTimeout(100); 
        }
        await this.loc.TicketProductCard.hover();
    }

    async hoverOnAnyProductTop() {
        for (let i = 0; i < 8; i++) { 
            await this.page.mouse.wheel(0, 230);
            await this.page.waitForTimeout(100); 
        }
        await this.loc.TopCollectionProductCard.hover();
    }

    async clickAddToCart() {
        await this.loc.addToCartButton.click();
    }

    async clickWishlist() {
        await this.loc.addToWishlistButton.click();
    }

    async subscribeEmail(email) {
        await this.loc.dashboardSubscribeInput.fill(email);
        await this.loc.dashboardSubscribeButton.click();
    }

    async logout() {
        await this.loc.dashboardProfileIcon.click();
        await this.loc.logoutButton.click();
    }
}

module.exports = { UserDashboardPage };
