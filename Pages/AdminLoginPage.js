const { expect } = require('@playwright/test');
const { AdminLocators } = require('../Utils/adminLocators');
const { CommonMethods } = require('../Utils/commonMethods');

class AdminLoginPage {

    constructor(page) {
        this.page = page;
        this.loc = new AdminLocators(page);
        this.common = new CommonMethods();
    }

    async open() {
        await this.page.goto('https://commerce.bagisto.com/admin/login');
        await expect(this.page).toHaveURL(/admin\/login/);
    }

    async verifyLogo() {
        await this.common.verifyElementVisible(this.loc.logo);
    }

    async login(email, password) {
        await this.common.fillField(this.loc.email, email);
        await this.common.fillField(this.loc.password, password);
        await this.common.clickElement(this.loc.signInBtn);
    }

    async verifyLoginSuccess() {
        await this.common.verifyElementVisible(this.loc.dashboardTitle);
    }

    async verifyLoginFailure() {
        await this.common.verifyElementVisible(this.loc.loginErrorMsg);
    }

    async verifyRequiredFields() {
        await this.common.verifyElementVisible(this.loc.emailValidation);
        await this.common.verifyElementVisible(this.loc.passwordValidation);
    }

    async verifyPasswordLengthValidation() {
        await this.common.verifyElementVisible(this.loc.passwordLengthValidation);
    }

    async togglePassword() {
        await this.common.clickElement(this.loc.passwordToggle);
        const type = await this.loc.password.getAttribute('type');
        expect(type).toBe('text');
    }

    async goToForgotPassword() {
        await this.common.clickElement(this.loc.forgotPasswordLink);
    }
}

module.exports = { AdminLoginPage };
