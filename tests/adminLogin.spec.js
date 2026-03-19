const { test, expect } = require('@playwright/test');
const { AdminLoginPage } = require('../Pages/AdminLoginPage');
const { ADMINLOGIN, INVALIDADMIN } = require('../Utils/testData');

test.describe('Bagisto Admin Login Test Cases', () => {

    let adminLogin;

    test.beforeEach(async ({ page }) => {
        adminLogin = new AdminLoginPage(page);
        await adminLogin.open();
    });

    // TC_LOGIN_01
    test('TC_LOGIN_01 - Verify Bagisto Logo is visible', async () => {
        await adminLogin.verifyLogo();
    });

    // TC_LOGIN_02
    test('TC_LOGIN_02 - Verify login with valid Email and Password', async ({ page }) => {
        await adminLogin.login(ADMINLOGIN.EMAIL, ADMINLOGIN.PASSWORD);
        expect(page.url()).toContain('/dashboard');
    });

    // TC_LOGIN_03
    test('TC_LOGIN_03 - Click "Sign In" button with valid credentials', async ({ page }) => {
        await adminLogin.login(ADMINLOGIN.EMAIL, ADMINLOGIN.PASSWORD);
        expect(page.url()).toContain('/dashboard');
    });

    // TC_LOGIN_04
    test('TC_LOGIN_04 - Verify login with invalid Email and valid Password', async () => {
        await adminLogin.login(INVALIDADMIN.EMAIL, ADMINLOGIN.PASSWORD);
        await adminLogin.verifyLoginFailure();
    });

    // TC_LOGIN_05
    test('TC_LOGIN_05 - Verify login with valid Email and invalid Password', async () => {
        await adminLogin.login(ADMINLOGIN.EMAIL, INVALIDADMIN.PASSWORD);
        await adminLogin.verifyLoginFailure();
    });

    // TC_LOGIN_06
    test('TC_LOGIN_06 - Verify login with invalid Email and invalid Password', async () => {
        await adminLogin.login(INVALIDADMIN.EMAIL, INVALIDADMIN.PASSWORD);
        await adminLogin.verifyLoginFailure();
    });

    // TC_LOGIN_07
    test('TC_LOGIN_07 - Verify login with empty fields', async () => {
        await adminLogin.login('', '');
        await adminLogin.verifyRequiredFields();
    });

    // TC_LOGIN_08
    test('TC_LOGIN_08 - Verify login with invalid Password length', async () => {
        await adminLogin.login(ADMINLOGIN.EMAIL, '123');
        await adminLogin.verifyPasswordLengthValidation();
    });

    // TC_LOGIN_09
    test('TC_LOGIN_09 - Verify clicking on Eye icon on Password field', async () => {
        await adminLogin.togglePassword();
    });

    // TC_LOGIN_10
    test('TC_LOGIN_10 - Verify clicking on "Forgot Password?" link', async ({ page }) => {
        await adminLogin.goToForgotPassword();
        expect(page.url()).toContain('/forget-password');
    });

});
