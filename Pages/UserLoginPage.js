const { Locators } = require('../Utils/locators');
const { CommonMethods } = require('../Utils/commonMethods');
const { LOGIN } = require('../Utils/testData');

class UserLoginPage {

    constructor(page) {
        this.page = page;
        this.loc = new Locators(page);
        this.common = new CommonMethods();
    }

    async open() {
        await this.page.goto('https://commerce.bagisto.com/');
        await this.common.acceptCookiesIfPresent(this.page);
        await this.common.verifyElementVisible(this.loc.Logo);
    }

    async goToLogin() {
        await this.common.clickElement(this.loc.profileLink);
        await this.common.clickElement(this.loc.signinButton);
        await this.common.verifyElementVisible(this.loc.loginEmail);
    }

    async login(email = LOGIN.EMAIL, password = LOGIN.PASSWORD) {
        await this.goToLogin();

        await this.common.fillField(this.loc.loginEmail, email);
        await this.common.fillField(this.loc.loginPassword, password);

        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.common.clickElement(this.loc.loginButton)
        ]);
    }

    async verifyLoginSuccess() {
        await this.common.verifyElementVisible(this.loc.profileLink);
    }

    async verifyLoginFailure(message) {
        await this.common.verifyTextVisible(this.loc.errorLogin, message);
    }

    async verifyRequiredField(locator) {
        await this.common.verifyElementVisible(locator);
    }

    async verifyLessLengthPassword(message) {
        await this.common.verifyTextVisible(this.loc.lessLengthPassword, message);
    }

    async goToForgotPassword() {
        await this.goToLogin();
        await this.common.clickElement(this.loc.fpLink);
    }

    async goToRegister() {
        await this.common.clickElement(this.loc.profileLink);
        await this.common.clickElement(this.loc.signinButton);
        await this.common.clickElement(this.loc.regLink);
    }

    async toggleShowPassword() {
        await this.common.clickElement(this.loc.showPasswordCheckbox);
    }

    async logout() {
        await this.common.clickElement(this.loc.profileLink);
        await this.common.clickElement(this.loc.logout);
        await this.common.verifyElementVisible(this.loc.Logo);
    }
}

module.exports = { UserLoginPage };
