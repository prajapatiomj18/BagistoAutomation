const { test, expect } = require('@playwright/test');
const { UserLoginPage } = require('../Pages/UserLoginPage');
const { LOGIN, FLOGIN, ELOGIN } = require('../Utils/testData');

test.describe('Bagisto User Login Test Cases', () => {

    let userLogin;

    test.beforeEach(async ({ page }) => {
        userLogin = new UserLoginPage(page);
        console.log('Opening application');
        await userLogin.open();
    });

    test('TC_LOGIN_01 - Valid Login', async () => {
        console.log('Executing TC_LOGIN_01');
        await userLogin.login(LOGIN.EMAIL, LOGIN.PASSWORD);
        await userLogin.verifyLoginSuccess();
    });

    test('TC_LOGIN_02 - Verify Login Page UI', async () => {
        console.log('Executing TC_LOGIN_02');
        await userLogin.goToLogin();
        await userLogin.common.verifyElementVisible(userLogin.loc.loginEmail);
        await userLogin.common.verifyElementVisible(userLogin.loc.loginPassword);
        await userLogin.common.verifyElementVisible(userLogin.loc.loginButton);
    });

    test('TC_LOGIN_03 - Invalid Email', async () => {
        console.log('Executing TC_LOGIN_03');
        await userLogin.login(FLOGIN.EMAIL, LOGIN.PASSWORD);
        await userLogin.verifyLoginFailure(FLOGIN.ERRORMSG);
    });

    test('TC_LOGIN_04 - Invalid Password', async () => {
        console.log('Executing TC_LOGIN_04');
        await userLogin.login(LOGIN.EMAIL, FLOGIN.PASSWORD);
        await userLogin.verifyLoginFailure(FLOGIN.ERRORMSG);
    });

    test('TC_LOGIN_05 - Invalid Email and Password', async () => {
        console.log('Executing TC_LOGIN_05');
        await userLogin.login(FLOGIN.EMAIL, FLOGIN.PASSWORD);
        await userLogin.verifyLoginFailure(FLOGIN.ERRORMSG);
    });

    test('TC_LOGIN_06 - Empty Fields', async () => {
        console.log('Executing TC_LOGIN_06');
        await userLogin.login('', '');
        await userLogin.verifyRequiredField(userLogin.loc.emailValidation);
        await userLogin.verifyRequiredField(userLogin.loc.passValidation);
    });

    test('TC_LOGIN_07 - Password less than 6 characters', async () => {
        console.log('Executing TC_LOGIN_07');
        await userLogin.login(LOGIN.EMAIL, '123');
        await userLogin.verifyLessLengthPassword(FLOGIN.LESSPASS);
    });

    test('TC_LOGIN_08 - Show Password Toggle', async () => {
        console.log('Executing TC_LOGIN_08');
        await userLogin.goToLogin();
        await userLogin.toggleShowPassword();
        const type = await userLogin.common.getAttribute(userLogin.loc.loginPassword, 'type');
        expect(type).toBe('text');
    });

    test('TC_LOGIN_09 - Forgot Password Navigation', async ({ page }) => {
        console.log('Executing TC_LOGIN_09');
        await userLogin.goToForgotPassword();
        await expect(page).toHaveURL('https://commerce.bagisto.com/customer/forgot-password');
    });

    test('TC_LOGIN_10 - Register Navigation', async ({ page }) => {
        console.log('Executing TC_LOGIN_10');
        await userLogin.goToRegister();
        await expect(page).toHaveURL('https://commerce.bagisto.com/customer/register');
    });

    test('TC_LOGIN_11 - Facebook Login', async ({ page }) => {
        console.log('Executing TC_LOGIN_11');
        await userLogin.goToLogin();
        
        userLogin.loc.fbLogo.click();

        await page.waitForTimeout(3000);

        const currentURL = page.url();
        expect(currentURL).toContain('facebook.com');
    });

    test('TC_LOGIN_12 - Twitter Login', async ({ page }) => {
        console.log('Executing TC_LOGIN_12');
        await userLogin.goToLogin();
        
        userLogin.loc.twitterLogo.click();

        await page.waitForTimeout(3000);

        // const currentURL = page.url();
        // expect(currentURL).toContain('twitter.com');
    });

    test('TC_LOGIN_13 - Google Login', async ({ page }) => {
        console.log('Executing TC_LOGIN_13');
        await userLogin.goToLogin();
        
        userLogin.loc.googleLogo.click();

        await page.waitForTimeout(3000);
            
        const currentURL = page.url();
        expect(currentURL).toContain('google.com');
    });

    test('TC_LOGIN_14 - GitHub Login', async ({ page }) => {
        console.log('Executing TC_LOGIN_14');
        await userLogin.goToLogin();
        
        userLogin.loc.githubLogo.click();

        await page.waitForTimeout(3000);
        
        const currentURL = page.url();
        expect(currentURL).toContain('github.com');
    });

});
