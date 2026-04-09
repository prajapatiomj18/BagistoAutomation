const { expect } = require('@playwright/test');
const { Locators } = require('../Utils/locators');
const { CommonMethods } = require('../Utils/commonMethods');
const { REGISTER, FREGISTER } = require('../Utils/testData');

class UserRegistrationPage {
    constructor(page) {
        this.page = page;
        this.loc = new Locators(page);
        this.common = new CommonMethods();
    }

    // Open Registration Page
    async openRegistration() {
        await this.page.goto('https://commerce.bagisto.com/');
        await this.common.acceptCookiesIfPresent(this.page);
        await this.common.clickElement(this.loc.profileLink);
        await this.common.clickElement(this.loc.signupButton);
        await this.common.verifyElementVisible(this.loc.registerFirstName);
    }

    // Fill Registration Form
    async fillRegistrationForm(data = REGISTER) {
        await this.common.fillField(this.loc.registerFirstName, data.FIRSTNAME);
        await this.common.fillField(this.loc.registerLastName, data.LASTNAME);
        await this.common.fillField(this.loc.registerEmail, data.EMAIL);
        await this.common.fillField(this.loc.registerPassword, data.PASSWORD);
        await this.common.fillField(this.loc.registerConfirmPassword, data.CONFIRMPASSWORD);
    }

    // Register with optional newsletter & agreement
    async submitRegistration({ newsletter = true } = {}) {
        if (newsletter) await this.common.clickElement(this.loc.registerNewsletter);
        // if (agreement) await this.common.clickElement(this.loc.registerAgreement);
        await this.common.clickElement(this.loc.registerButton);
    }

    // Social Login Clicks
    async clickFacebook() { await this.common.clickElement(this.loc.fbLogo); }
    async clickTwitter() { await this.common.clickElement(this.loc.twitterLogo); }
    async clickGoogle() { await this.common.clickElement(this.loc.googleLogo); }
    async clickGithub() { await this.common.clickElement(this.loc.githubLogo); }

    // Navigate to Login from Registration
    async goToLoginFromRegister() {
        await this.common.clickElement(this.loc.signinButton);
    }

    // Verify required field errors
    async verifyErrorMessage(locator, message) {
        await this.common.verifyTextVisible(locator, message);
    }
}

module.exports = { UserRegistrationPage };
