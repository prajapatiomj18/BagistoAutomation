class AdminLocators {

    constructor(page) {
        this.page = page;

        // 🔐 LOGIN PAGE
        this.logo = page.locator('//img[contains(@alt,"Bagisto")]');
        this.email = page.locator('//input[@name="email"]');
        this.password = page.locator('//input[@name="password"]');
        this.signInBtn = page.locator('//button[normalize-space()="Sign In"]');
        this.forgotPasswordLink = page.locator('//a[contains(text(),"Forget")]');
        this.passwordToggle = page.locator('//input[@name="password"]/following-sibling::span');
        this.loginErrorMsg = page.locator('//div[contains(@class,"fixed") and contains(@class,"top-5")]');
        this.emailValidation = page.locator('(//p[contains(@class,"text-red-600")])[1]');
        this.passwordValidation = page.locator('(//p[contains(@class,"text-red-600")])[2]');
        this.passwordLengthValidation = page.locator('//p[contains(@class,"text-red-600")]');

        // 🏠 HEADER SECTION
        this.searchBar = page.locator('//input[@placeholder="Mega Search"]');

        // 🌙 Theme Toggle (Moon/Sun)
        this.themeIcon = page.locator('//span[contains(@class, "icon-dark")] | //span[contains(@class, "icon-light")]');

        // 🛒 Visit Shop
        this.visitShopIcon = page.locator('//span[@title="Visit Shop"]');

        // 🔔 Notifications
        this.notificationIcon = page.locator('//*[@title="Notifications"]');
        this.notificationCount = page.locator('//span[contains(@class,"-top-2")]');
        this.notificationContainer = page.locator('//div[contains(@class,"notification")]');
        this.viewAllNotifications = page.locator('//a[contains(text(),"View All")]');
        this.markAsRead = page.locator('//a[contains(text(),"Mark as Read")]');

        // 👤 PROFILE
        this.profileIcon = page.locator('//button[contains(@class,"rounded-full bg-blue-400")]');
        this.profileDropdown = page.locator('//div[contains(@class,"dropdown")]');
        this.myAccountOption = page.locator('//a[contains(text(),"My Account")]');
        this.logoutButton = page.locator('//a[contains(text(),"Logout") or contains(text(),"Sign Out")]');

        // 📚 SIDEBAR
        this.sidebarDashboard = page.locator('//a//p[contains(text(), " Dashboard ")]');
        this.sidebarSales = page.locator('//a//p[contains(text(), " Sales ")]');
        this.sidebarCatalog = page.locator('//a//p[contains(text(), " Catalog ")]');
        this.sidebarCustomers = page.locator('//a//p[contains(text(), " Customers ")]');
        this.sidebarMarketing = page.locator('//a//p[contains(text(), " Marketing ")]');
        this.sidebarSettings = page.locator('//a//p[contains(text(), " Settings ")]');

        // Sidebar Collapse Button
        this.sidebarCollapseBtn = page.locator('//span[contains(@class,"icon-collapse")]');

        // 📅 DATE FILTERS
        this.startDate = page.locator('//input[@placeholder="Start Date"]');
        this.endDate = page.locator('//input[@placeholder="End Date"]');

        // 📊 DASHBOARD SECTIONS
        this.dashboardTitle = page.locator('//p[contains(@class,"leading-normal ")]');
        this.overallDetails = page.locator('//p[contains(text(),"Overall Details")]');
        this.todayDetails = page.locator('(//p[contains(text(), "Today")])[1]');
        this.stockThreshold = page.locator('//p[contains(text(),"Stock Threshold")]');
        this.storeStats = page.locator('//p[contains(text(),"Store Stats")]');

        // 📈 CHARTS
        this.totalSalesChart = page.locator('//div[contains(@class, "justify-between")]//p[contains(text(),"Total Sales")]');
        this.visitorsChart = page.locator('//div[contains(@class, "justify-between")]//p[contains(text(),"Visitors")]');

        // 🏆 Top Selling Products
        this.topSellingProducts = page.locator('//p[contains(text(),"Top Selling Products")]');

        // 👑 Customer with Most Sales
        this.customerMostSales = page.locator('//p[contains(text(),"Customer With Most Sales")]');

        // 🔔 COMMON
        this.toastMessage = page.locator('//div[contains(@class,"fixed") and contains(@class,"top-5")]');
        this.loader = page.locator('//*[contains(@class,"loader")]');
        this.breadcrumb = page.locator('//nav[@aria-label="Breadcrumb"]');
    }
}

module.exports = { AdminLocators };
