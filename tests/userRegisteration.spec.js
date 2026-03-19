const { test, expect } = require('@playwright/test');
const { UserRegistrationPage } = require('../Pages/UserRegisterationPage');
const { REGISTER, FREGISTER, EREGISTER } = require('../Utils/testData');

test.describe('Bagisto Registration Test Cases', () => {

    let registration;

    test.beforeEach(async ({ page }) => {
        registration = new UserRegistrationPage(page);
        await registration.openRegistration();
    });

    test('TC_REG_01 - Registration page loads successfully', async () => {
        await expect(registration.loc.registerFirstName).toBeVisible();
    });

    test('TC_REG_02 - Form title displays "Become User"', async () => {
        const title = registration.page.locator('//h1[contains(text(),"Become User")]');
        await expect(title).toBeVisible();
    });

    test('TC_REG_03 - Verify all input fields visible', async () => {
        const fields = [
            registration.loc.registerFirstName,
            registration.loc.registerLastName,
            registration.loc.registerEmail,
            registration.loc.registerPassword,
            registration.loc.registerConfirmPassword,
        ];
        for (const field of fields) await expect(field).toBeVisible();
    });

    test('TC_REG_04 - Verify placeholders of all fields', async () => {
        const placeholders = [
            { loc: registration.loc.registerFirstName, text: 'First Name' },
            { loc: registration.loc.registerLastName, text: 'Last Name' },
            { loc: registration.loc.registerEmail, text: 'email@example.com' },
            { loc: registration.loc.registerPassword, text: 'Password' },
            { loc: registration.loc.registerConfirmPassword, text: 'Confirm Password' },
        ];
        for (const ph of placeholders) {
            const attr = await ph.loc.getAttribute('placeholder');
            expect(attr).toBe(ph.text);
        }
    });

    test('TC_REG_05 - Registration button is clickable', async () => {
        await expect(registration.loc.registerButton).toBeEnabled();
    });

    test('TC_REG_06 - Login link navigates to login page', async () => {
        await registration.goToLoginFromRegister();
        await expect(registration.page).toHaveURL(/customer\/login/);
    });

    test('TC_REG_07 - Social login icons are visible', async () => {
        const icons = [
            registration.loc.fbLogo,
            registration.loc.twitterLogo,
            registration.loc.googleLogo,
            registration.loc.githubLogo,
        ];
        for (const icon of icons) await expect(icon).toBeVisible();
    });

    test('TC_REG_08 - Register with valid inputs', async () => {
        await registration.fillRegistrationForm(REGISTER);
        await registration.submitRegistration();
        await expect(registration.page).toHaveURL(/customer\/login/);
    });

    test('TC_REG_09 - Required fields empty', async () => {
        await registration.submitRegistration({ newsletter: false, agreement: false });
        await registration.verifyErrorMessage(registration.loc.errorRegFname, EREGISTER.FIRSTNAME);
        await registration.verifyErrorMessage(registration.loc.errorRegLname, EREGISTER.LASTNAME);
        await registration.verifyErrorMessage(registration.loc.errorRegEml, EREGISTER.EMAIL);
        await registration.verifyErrorMessage(registration.loc.errorRegPass, EREGISTER.PASSWORD);
        await registration.verifyErrorMessage(registration.loc.errorRegAgree, EREGISTER.AGREEMENT);
    });

    // test('TC_REG_10 - Invalid first & last name (with numbers)', async () => {
    //     const data = { ...REGISTER, FIRSTNAME: 'Vivek14', LASTNAME: 'Patel10' };
    //     await registration.fillRegistrationForm(data);
    //     await registration.submitRegistration();
        // Expecting validation, adjust locator if site shows inline validation
    // });

    test('TC_REG_11 - Invalid email', async () => {
        const data = { ...REGISTER, EMAIL: 'vivek@gmail' };
        await registration.fillRegistrationForm(data);
        await registration.submitRegistration();
        await registration.verifyErrorMessage(registration.loc.errorRegEml, EREGISTER.ERROREML);
    });

    test('TC_REG_12 - Password with invalid length', async () => {
        const data = { ...REGISTER, PASSWORD: 'vivek', CONFIRMPASSWORD: 'vivek' };
        await registration.fillRegistrationForm(data);
        await registration.submitRegistration();
        await registration.verifyErrorMessage(registration.loc.errorRegPassLen, EREGISTER.ERRORPASS);
    });

    test('TC_REG_13 - Confirm password mismatch', async () => {
        const data = { ...REGISTER, PASSWORD: 'vivek123', CONFIRMPASSWORD: 'vivek321' };
        await registration.fillRegistrationForm(data);
        await registration.submitRegistration();
        await registration.verifyErrorMessage(registration.loc.errorRegCPass, EREGISTER.CONFIRMPASSWORD);
    });

    test('TC_REG_14 - Register without agreement checkbox', async () => {
        await registration.fillRegistrationForm(REGISTER);
        await registration.submitRegistration({ newsletter: true, agreement: false });
        await registration.verifyErrorMessage(registration.loc.errorRegAgree, EREGISTER.AGREEMENT);
    });

    // Social logins
    test('TC_REG_15 - Register with Facebook', async () => {
        await registration.clickFacebook();
        await expect(registration.page.url()).toContain('facebook.com');
    });

    test('TC_REG_16 - Register with Twitter', async () => {
        await registration.clickTwitter();
        // await expect(registration.page.url()).toContain('twitter.com');
    });

    test('TC_REG_17 - Register with Google', async () => {
        await registration.clickGoogle();
        await expect(registration.page.url()).toContain('google.com');
    });

    test('TC_REG_18 - Register with GitHub', async () => {
        await registration.clickGithub();
        await expect(registration.page.url()).toContain('github.com');
    });

    test('TC_REG_19 - Clicking Velocity logo navigates home', async () => {
        await registration.common.clickElement(registration.loc.Logo);
        await expect(registration.page).toHaveURL('https://commerce.bagisto.com/');
    });

    test('TC_REG_20 - Register with existing email', async () => {
        const data = { ...REGISTER, EMAIL: 'vivek1410@gmail.com' };
        await registration.fillRegistrationForm(data);
        await registration.submitRegistration();
        await registration.verifyErrorMessage(registration.loc.alreadyExistEmail, 'The email has already been taken');
    });

});
