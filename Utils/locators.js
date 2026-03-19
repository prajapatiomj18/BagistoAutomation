class Locators {
    constructor(page) {
        this.page = page;

        // General
        this.Logo = page.locator('//img[@alt="Bagisto Commerce v2.3.11"]');
        this.profileLink = page.locator('//span[@aria-label="Profile"]');
        this.acceptCookieButton = page.locator('//button[contains(text(),"Accept")]');

        // Login
        this.signinButton = page.locator('//a[@href="https://commerce.bagisto.com/customer/login"]');
        this.loginEmail = page.locator('//input[@name="email"]');
        this.loginPassword = page.locator('//input[@name="password"]');
        this.loginButton = page.locator('//button[text()=" Sign In "]');
        this.errorLogin = page.locator('//div[contains(@class,"fixed top-5")]');
        this.emailValidation = page.locator('(//p[@class="text-red-500 text-xs italic"])[1]');
        this.passValidation = page.locator('(//p[@class="text-red-500 text-xs italic"])[2]');
        this.lessLengthPassword = page.locator('//p[@class="text-red-500 text-xs italic"]');
        this.showPasswordCheckbox = page.locator('//label[contains(@class, "peer-checked:icon-check-box")]');
        this.fpLink = page.locator('//span[text()=" Forgot Password? "]');
        this.regLink = page.locator('//a[@href="https://commerce.bagisto.com/customer/register"]')

        // Registration
        this.signupButton = page.locator('//a[@href="https://commerce.bagisto.com/customer/register"]');
        this.registerFirstName = page.locator('//input[@name="first_name"]');
        this.registerLastName = page.locator('//input[@name="last_name"]');
        this.registerEmail = page.locator('//input[@name="email"]');
        this.registerPassword = page.locator('//input[@name="password"]');
        this.registerConfirmPassword = page.locator('//input[@name="password_confirmation"]');
        this.registerNewsletter = page.locator('(//label[@for="is-subscribed"])[1]');
        this.registerAgreement = page.locator('(//label[@for="agreement"])[1]');
        this.registerButton = page.locator('//button[text()=" Register "]');
        this.errorRegFname = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "First Name")]');
        this.errorRegLname = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "Last Name")]');
        this.errorRegEml = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "Email")]');
        this.errorRegPass = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "Password field is")]');
        this.errorRegPassLen = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "Password field must")]');
        this.errorRegCPass = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "confirmation")]');
        this.errorRegAgree = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "agreement")]');
        this.alreadyExistEmail = page.locator('//p[@class="text-red-500 text-xs italic" and contains(text(),  "email has already been taken")]')

        // DashboardHeader
        this.dashboardLogo = page.locator('//img[contains(@alt,"Bagisto Commerce")]');
        this.dashboardAdminLink = page.locator('//a[contains(@href,"admin/login")]');
        this.dashboardCurrencyButton = page.locator('//div[@role="button"]//span[contains(text(),"$ USD")]');
        this.dashboardLanguageButton = page.locator('//div[@role="button"]//span[contains(text(),"English")]');
        this.dashboardSearchInput = page.locator('//input[@placeholder="Search products here"]');
        this.dashboardCompareIcon = page.locator('//a[@aria-label="Compare"]');
        this.dashboardCartIcon = page.locator('//span[@aria-label="Shopping Cart"]');
        this.dashboardProfileIcon = page.locator('//span[@aria-label="Profile"]');

        // All Navigations
        this.MensNavigation = page.locator('//span//a[contains(text(), "Mens")]');
        this.WomensNavigation = page.locator('//span//a[contains(text(), "Womens")]');
        this.KidsNavigation = page.locator('//span//a[contains(text(), "Kids")]');

        // Carousel
        this.dashboardCarousel = page.locator('//div[@class="max-h-screen w-screen bg-cover bg-no-repeat"][1]');
        this.carouselNextBtn = page.locator('(//span[@aria-label="shop::components.carousel.next"])[1]');
        this.carouselPrevBtn = page.locator('(//span[@aria-label="shop::components.carousel.previous"])[1]');
        this.categoryScrollbar = page.locator('//div[@class="max-h-screen w-screen bg-cover bg-no-repeat"][2]');

        // Next-Previous Buttons
        this.dashboardWomenNextBtn = page.locator('//span[@aria-label="Next"]').nth(0);
        this.dashboardMenNextBtn = page.locator('//span[@aria-label="Next"]').nth(1);
        this.dashboardKidNextBtn = page.locator('//span[@aria-label="Next"]').nth(2);
        this.dashboardTicketNextBtn = page.locator('//span[@aria-label="Next"]').nth(3);
        this.dashboardWomenPreviousBtn = page.locator('//span[@aria-label="Previous"]').nth(0);
        this.dashboardMenPreviousBtn = page.locator('//span[@aria-label="Previous"]').nth(1);
        this.dashboardKidPreviousBtn = page.locator('//span[@aria-label="Previous"]').nth(2);
        this.dashboardTicketPreviousBtn = page.locator('//span[@aria-label="Previous"]').nth(3);

        // Collections
        this.dashboardWomenCollectionBtn = page.locator('//a[@aria-label="Women\'s Collections"]');
        this.dashboardMenCollectionBtn = page.locator('//a[@aria-label="Men\'s Collections"]');
        this.dashboardKidCollectionBtn = page.locator('//a[@aria-label="Kid\'s Collection"]');
        this.dashboardTicketCollectionBtn = page.locator('//a[@aria-label="Book Tickets"]');
        this.dashboardTopCollectionBtn = page.locator('//a[contains(text(),"Top Collection")]');

        // Collection Containers
        this.dashboardWomenCollection = page.locator('(//h2[contains(text(),"Women\'s Collection")])[1]');
        this.dashboardMenCollection = page.locator('(//h2[contains(text(),"Men\'s Collection")])[1]');
        this.dashboardKidCollection = page.locator('(//h2[contains(text(),"Kid\'s Collection")])[1]');
        this.dashboardTicketCollection = page.locator('(//h2[contains(text(),"Book Tickets")])[1]');
        this.dashboardTopCollection = page.locator('//div[@class="top-collection-header"]//h2[contains(text(), "our new additions!")]');

        // Product (not first product specifically, pick visible one)
        this.WomenProductCard = page.locator('//img[@alt="Classic Women Blazer"]'); 
        this.MenProductCard = page.locator('//img[@alt="Comfort Fit Jacket"]'); 
        this.KidProductCard = page.locator('//img[@alt="Mini Fashion Jacket"]'); 
        this.TicketProductCard = page.locator('//img[@alt="Doctor Consultation Appointment"]'); 
        this.TopCollectionProductCard = page.locator('(//img[@alt="The game with our new additions!"])[1]');
        this.addToCartButton = page.locator('(//button[contains(text(),"Add To Cart")])[2]');
        this.addToWishlistButton = page.locator('(//span[@aria-label="Add To Wishlist"])[2]');

        // Footer
        this.footerAboutUs = page.locator('(//a[contains(text(), " About Us ")])[1]');
        this.footerContactUs = page.locator('(//a[contains(text(), " Contact Us ")])[1]');
        this.footerPrivacyPolicy = page.locator('(//a[contains(text(), " Privacy Policy ")])[1]');
        this.footerRefundPolicy = page.locator('(//a[contains(text(), " Refund Policy ")])[1]');

        // Subscribe
        this.dashboardSubscribeInput = page.locator('//input[@type="email"]');
        this.dashboardSubscribeButton = page.locator('//button[contains(text(),"Subscribe")]');
        this.subscribeError = page.locator('(//p[contains(@class,"text-red-500")])[1]');

        // Products
        this.menCollectionFirstProduct = page.locator('(//div[@navigation-link="/search"])[1]');
        this.productDetailsContainer = page.locator('//div[contains(@class,"flex mt-12 gap-9")]');
        this.productDetailsName = page.locator('//h1[@class="text-3xl font-medium break-words"]');
        this.productDetailsPrice = page.locator('//p[contains(@class,"final-price")]');
        this.AddtoCartButton = page.locator('//button[text()="Add To Cart"]');

        // Cart & Checkout
        this.AddtoCartLink = page.locator('//span[@aria-label="Shopping Cart"]');
        this.ViewCartLink = page.locator('//a[text()=" View Cart "]');
        this.checkoutLink = page.locator('//a[text()=" Proceed To Checkout "]');
        this.cartProductName = page.locator('(//p[contains(@class,"text-base font-medium")])[1]');

        this.checkoutContainer = page.locator('//div[contains(@class,"overflow-y-auto")]');
        this.checkoutCompName = page.locator('//input[@name="billing.company_name"]');
        this.checkoutFirstName = page.locator('//input[@name="billing.first_name"]');
        this.checkoutLastName = page.locator('//input[@name="billing.last_name"]');
        this.checkoutEmail = page.locator('//input[@name="billing.email"]');
        this.checkoutAddress = page.locator('//input[@name="billing.address.[0]"]');
        this.checkSelectCountry = page.locator('//select[@name="billing.country"]');
        this.checkoutState = page.locator('//input[@name="billing.state"] | //select[@name="billing.state"]');
        this.checkoutCity = page.locator('//input[@name="billing.city"]');
        this.checkoutZip = page.locator('//input[@name="billing.postcode"]');
        this.checkoutPhone = page.locator('//input[@name="billing.phone"]');
        this.checkoutSaveAddressBtn = page.locator('//button[text()="Save"]');
        this.ProceedButton = page.locator('//button[text()="Proceed"]');
        this.PlaceOrderButton = page.locator('//button[text()="Place Order"]');
        this.thankYouMsg = page.locator('//p[contains(text(),"Thank you for your order")]');

        // Logout
        this.logout = page.locator('//button[@class="cursor-pointer px-5 py-2 text-base hover:bg-gray-100"]');

        // Social Login
        this.fbLogo = page.locator('//a[@href="https://commerce.bagisto.com/customer/social-login/facebook"]');
        this.twitterLogo = page.locator('//a[@href="https://commerce.bagisto.com/customer/social-login/twitter"]');
        this.googleLogo = page.locator('//a[@href="https://commerce.bagisto.com/customer/social-login/google"]');
        this.githubLogo = page.locator('//a[@href="https://commerce.bagisto.com/customer/social-login/github"]');
    }
}

module.exports = { Locators };
