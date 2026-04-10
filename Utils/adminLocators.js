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
        this.logoutButton = page.locator('//a[contains(text(),"Logout")]');

        // SIDEBAR
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

        // --- GRID & NAVIGATION ---
        this.salesMenu = page.locator('//p[contains(@class, "group-[.sidebar-collapsed]/container:hidden") and contains(text(), " Sales ")]');
        this.ordersMenu = page.locator('//a[@href="https://commerce.bagisto.com/admin/sales/orders" and contains(text(), " Orders ")]');
        this.ordersGrid = page.locator('//div[contains(@class, "transition-all hover:bg-gray-50 ")]');
        this.orderIdColumn = page.locator('(//p[@class="text-sm sm:text-base font-semibold text-gray-800 dark:text-white"])[1]');
        this.statusLabel = page.locator('//p[@class="label-pending"]');
        this.grandTotalColumn = page.locator('(//p[@class="text-sm sm:text-base font-semibold text-gray-800 dark:text-white"])[2]');
        this.customerEmailColumn = page.locator('(//p[@class="text-xs sm:text-sm text-gray-600 dark:text-gray-300"])[4]');
        this.productThumbnail = page.locator('(//img[@class="h-full w-full rounded"])[1]');
        this.productQtyBadge = page.locator('(//span[@class="absolute bottom-px rounded-full bg-darkPink px-1.5 text-xs font-bold leading-normal text-white ltr:left-px rtl:right-px"])[1]');
        this.viewOrderArrow = page.locator('//span[contains(@class, "icon-sort-right rtl:icon-sort-left cursor-pointer p-1.5 ")]');

        // --- SEARCH & FILTER ---
        this.orderSearchInput = page.locator('//input[@name="search"]');
        this.paymentMethod = page.locator('//p[contains(text(), "Pay By")]');
        this.filterButton = page.locator('//span[contains(text()," Filter ")]');
        this.filterSidebar = page.locator('//p[contains(text()," Filters ")][1]');
        this.statusDropdown = page.locator('(//span[contains(text(), "Select")])[1]');
        this.applyFilterBtn = page.locator('//button[contains(text()," Apply Filters ")]');
        this.saveFilterBtn = page.locator('//button[contains(text(),"Save Filter")]');
        this.todayFilter = page.locator('//p[contains(text(),"Today")]');
        this.thisMonthFilter = page.locator('//p[contains(text(),"This Month")]');
        this.startDateFilter = page.locator('//input[@name="created_at[from]"]');
        this.endDateFilter = page.locator('//input[@name="created_at[to]"]');

        // --- EXPORT & PAGINATION ---
        this.exportBtn = page.locator('//button[contains(text()," Export ")]');
        this.exportSelect = page.locator('//select[@name="format"]');
        this.exportCSV = page.locator('//option[@value="csv"]');
        this.exportXLS = page.locator('//option[@value="xls"]');
        this.exportDownloadBtn = page.locator('//button[@class="primary-button" and contains(text(),"Export")]');
        this.perPageDropdown = page.locator('//button[contains(@class, "text-center leading-6 text-gray-600 transition-all ")]');
        this.select20PerPage = page.locator('//li[text()="20"]');
        this.nextPageBtn = page.locator('//span[@class="icon-sort-right rtl:icon-sort-left text-2xl"]');

        // --- CREATE ORDER MODAL ---
        this.createOrderBtn = page.locator('//button[contains(text(), " Create Order ")]');
        this.customerSearch = page.locator('//input[@placeholder="Search by email or name"]');
        this.noCustomerFound = page.locator('//p[contains(text(),"No customers found")]');
        this.createCustomerBtn = page.locator('//button[contains(text(), " Create Customer ")]');

        // --- ORDER DETAILS PAGE ---
        this.orderHeader = page.locator('//p[contains(text(), "Order #")]');
        this.invoiceBtn = page.locator('//div[contains(text()," Invoice ")]');
        this.shipBtn = page.locator('//div[contains(text()," Ship ")]');
        this.cancelOrderBtn = page.locator('//a[contains(text()," Cancel ")]');
        this.productName = page.locator('(//p[@class="break-all text-base font-semibold text-gray-800 dark:text-white"])[1]');
        this.subtotal = page.locator('(//p[@class="font-semibold !leading-5 text-gray-600 dark:text-gray-300"])[2]');
        this.shippingHandling = page.locator('(//p[@class="font-semibold !leading-5 text-gray-600 dark:text-gray-300"])[3]');
        this.taxAmount = page.locator('(//p[@class="!leading-5 text-gray-600 dark:text-gray-300"])[3]');
        this.customerInfo = page.locator('//p[contains(@class, "p-2.5 text-base font-semibold") and contains(text(), " Customer ")]');
        this.orderInformationCard = page.locator('//p[contains(@class, "p-2.5 text-base font-semibold") and contains(text(), " Order Information ")]');
        this.shippingMethod = page.locator('//p[contains(@class, "text-gray-600 dark:text-gray-300") and contains(text(), " Shipping Method ")]');
        this.grandTotal = page.locator('(//p[@class="text-base font-semibold !leading-5 text-gray-800 dark:text-white"])[2]');
        this.totalDue = page.locator('(//p[@class="!leading-5 text-gray-600 dark:text-gray-300"])[11]');
        this.billingAddress = page.locator('//p[contains(text(),"Billing Address")]');
        this.shippingAddress = page.locator('//p[contains(text(),"Shipping Address")]');
        this.commentBox = page.locator('//textarea[contains(@placeholder,"comment")]');
        this.notifyCustomerCheckbox = page.locator('//span[contains(@class, "icon-uncheckbox peer-checked:icon-checked")]');
        this.submitCommentBtn = page.locator('//button[contains(text(),"Submit Comment")]');
        this.commentHistory = page.locator('//p[@class="break-all text-base leading-6 text-gray-800 dark:text-white"]');
    }
}

module.exports = { AdminLocators };
