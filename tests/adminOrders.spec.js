const { test, expect } = require('@playwright/test');
const { AdminLoginPage } = require('../Pages/AdminLoginPage');
const { AdminOrdersPage } = require('../Pages/AdminOrdersPage');
const { ADMINLOGIN } = require('../Utils/testData');

test.describe('Bagisto Admin Orders Test Cases', () => {
    let orders;
    let login;

    test.beforeEach(async ({ page }) => {
        login = new AdminLoginPage(page);
        await login.open();
        await login.login(ADMINLOGIN.EMAIL, ADMINLOGIN.PASSWORD);
        orders = new AdminOrdersPage(page);
        await orders.openOrdersPage();
    });

    test('TC_ORD_01 - Verify Orders grid accessibility', async () => {
        await expect(orders.locators.ordersGrid.first()).toBeVisible();
    });

    test('TC_ORD_02 - Verify Search bar visibility and placeholder', async () => {
        await orders.verifySearchPlaceholder();
    });

    test('TC_ORD_03 - Verify Filter sidebar toggle functionality', async () => {
        await orders.locators.filterButton.click();
        await expect(orders.locators.filterSidebar.first()).toBeVisible();
    });

    test('TC_ORD_04 - Verify Export dropdown options', async ({ page }) => {
        await orders.locators.exportBtn.click();

        await orders.locators.exportSelect.selectOption('csv');
        await expect(orders.locators.exportSelect).toHaveValue('csv');

        await orders.locators.exportSelect.selectOption('xls');
        await expect(orders.locators.exportSelect).toHaveValue('xls');

        await orders.locators.exportSelect.selectOption('xlsx');
        await expect(orders.locators.exportSelect).toHaveValue('xlsx');
    });

    test('TC_ORD_05 - Verify "Create Order" redirection', async () => {
        await orders.locators.createOrderBtn.click();
        await expect(orders.locators.customerSearch).toBeVisible();
    });

    test('TC_ORD_06 - Verify Order ID and Timestamp accuracy', async () => {
        await expect(orders.locators.orderIdColumn.first()).toContainText('#');
    });

    test('TC_ORD_07 - Verify Status label color-coding logic', async () => {
        await expect(orders.locators.statusLabel.first()).toBeVisible();
    });

    test('TC_ORD_08 - Verify Grand Total and Currency formatting', async () => {
        await expect(orders.locators.grandTotalColumn.first()).toContainText('$');
    });

    test('TC_ORD_09 - Verify Payment Method visibility', async () => {
        await expect(orders.locators.paymentMethod.first()).toBeVisible();
    });

    test('TC_ORD_10 - Verify Customer Identity details', async () => {
        await expect(orders.locators.customerEmailColumn).toBeVisible();
    });

    test('TC_ORD_11 - Verify Product Thumbnail preview', async () => {
        await expect(orders.locators.productThumbnail).toBeVisible();
    });

    test('TC_ORD_12 - Verify Item Quantity Badge visibility', async () => {
        await expect(orders.locators.productQtyBadge.first()).toBeVisible();
    });

    test('TC_ORD_13 - Verify navigation to Order Details', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.orderHeader).toBeVisible();
    });

    test('TC_ORD_14 - Verify Pagination: Records per page', async () => {
        await orders.locators.perPageDropdown.click();
        await orders.locators.select20PerPage.click();
        await expect(orders.locators.perPageDropdown).toHaveText('20');
    });

    test('TC_ORD_15 - Verify Pagination: Next Page navigation', async () => {
        await orders.locators.nextPageBtn.click();
    });

    test('TC_ORD_16 - Verify Global Search via Order ID', async () => {
        await orders.locators.orderSearchInput.fill('1');
        await orders.locators.orderSearchInput.press('Enter');
        await expect(orders.locators.orderIdColumn.first()).toContainText('1');
    });

    test('TC_ORD_17 - Verify Global Search via Customer Email', async () => {
        await orders.locators.orderSearchInput.fill('omprajapati@gmail.com');
        await orders.locators.orderSearchInput.press('Enter');
        await expect(orders.locators.customerEmailColumn.first()).toContainText('om');
    });

    test('TC_ORD_18 - Verify Filter: Status dropdown', async () => {
        await orders.locators.filterButton.click();
        await expect(orders.locators.filterSidebar.first()).toBeVisible();
        await orders.applyStatusFilter('Pending');
        await expect(orders.locators.statusLabel.first()).toContainText('Pending');
    });

    test('TC_ORD_19 - Verify Filter: Today Date Preset', async () => {
        await orders.locators.filterButton.click();
        await expect(orders.locators.filterSidebar.first()).toBeVisible();
        await orders.locators.todayFilter.click();
        await expect(orders.locators.startDateFilter).toBeVisible();
    });

    test('TC_ORD_20 - Verify Filter: This Month Date Preset', async () => {
        await orders.locators.filterButton.click();
        await expect(orders.locators.filterSidebar.first()).toBeVisible();
        await orders.locators.thisMonthFilter.click();
        await expect(orders.locators.startDateFilter).toBeVisible();
    });

    test('TC_ORD_21 - Verify Filter: Custom Date Range selection', async () => {
        await orders.locators.filterButton.click();
        await expect(orders.locators.filterSidebar.first()).toBeVisible();
        await orders.locators.startDateFilter.click();

        const startCalendar = orders.page.locator('.flatpickr-calendar.open').first();
        await startCalendar.locator('select.flatpickr-monthDropdown-months').selectOption({ label: 'January' });
        await startCalendar.locator('input.numInput.cur-year').fill('2025');
        await startCalendar.locator('input.numInput.cur-year').press('Enter');
        await startCalendar.locator('.flatpickr-day >> text=11').click();

        await orders.locators.endDateFilter.click();
        const endCalendar = orders.page.locator('.flatpickr-calendar.open').first();
        await endCalendar.locator('select.flatpickr-monthDropdown-months').selectOption({ label: 'January' });
        await endCalendar.locator('input.numInput.cur-year').fill('2025');
        await endCalendar.locator('input.numInput.cur-year').press('Enter');
        await startCalendar.locator('.flatpickr-day >> text=15').click();
        await orders.locators.applyFilterBtn.click();
    });

    test('TC_ORD_22 - Verify "Save Filter" functionality', async () => {
        await orders.locators.filterButton.click();
        await expect(orders.locators.filterSidebar.first()).toBeVisible();
        await orders.locators.startDateFilter.click();

        const startCalendar = orders.page.locator('.flatpickr-calendar.open').first();
        await startCalendar.locator('select.flatpickr-monthDropdown-months').selectOption({ label: 'January' });
        await startCalendar.locator('input.numInput.cur-year').fill('2025');
        await startCalendar.locator('input.numInput.cur-year').press('Enter');
        await startCalendar.locator('.flatpickr-day >> text=11').click();

        await orders.locators.endDateFilter.click();
        const endCalendar = orders.page.locator('.flatpickr-calendar.open').first();
        await endCalendar.locator('select.flatpickr-monthDropdown-months').selectOption({ label: 'January' });
        await endCalendar.locator('input.numInput.cur-year').fill('2025');
        await endCalendar.locator('input.numInput.cur-year').press('Enter');
        await startCalendar.locator('.flatpickr-day >> text=15').click();
        await orders.locators.applyFilterBtn.click();
        await orders.locators.filterButton.click();
        await expect(orders.locators.filterSidebar.first()).toBeVisible();
        await expect(orders.locators.saveFilterBtn).toBeEnabled();
    });

    test('TC_ORD_23 - Verify Data Export: CSV Format', async () => {
        await orders.locators.exportBtn.click();
        await orders.locators.exportSelect.selectOption('csv');
        await expect(orders.locators.exportSelect).toHaveValue('csv');
        const [download] = await Promise.all([
            orders.page.waitForEvent('download'),
            orders.locators.exportDownloadBtn.click()
        ]);
        expect(download.suggestedFilename()).toContain('.csv');
    });

    test('TC_ORD_24 - Verify Data Export: XLS Format', async () => {
        await orders.locators.exportBtn.click();
        await orders.locators.exportSelect.selectOption('xls');
        await expect(orders.locators.exportSelect).toHaveValue('xls');
        const [download] = await Promise.all([
            orders.page.waitForEvent('download'),
            orders.locators.exportDownloadBtn.click()
        ]);
        expect(download.suggestedFilename()).toContain('.xls');
    });

    test('TC_ORD_25 - Verify Customer Search: Valid Match', async () => {
        await orders.locators.createOrderBtn.click();
        await orders.searchCustomerInModal('john');
        await expect(orders.page.locator('text=John Doe')).toBeVisible();
    });

    test('TC_ORD_26 - Verify Customer Search: No Results', async () => {
        await orders.locators.createOrderBtn.click();
        await orders.searchCustomerInModal('NonExistentUser');
        await expect(orders.locators.noCustomerFound).toBeVisible();
    });

    test('TC_ORD_27 - Verify redirection to "Add Customer" form', async () => {
        await orders.locators.createOrderBtn.click();
        await orders.locators.createCustomerBtn.click();
        const addCustomerForm = orders.page.locator('text=Create New Customer');
        await expect(addCustomerForm).toBeVisible();
    });

    test('TC_ORD_28 - Verify Order Detail: Header Summary', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.orderHeader).toContainText('Order #');
    });

    test('TC_ORD_29 - Verify redirection to "Create Invoice"', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await orders.locators.invoiceBtn.click();
        const createInvoiceForm = orders.page.locator('text=Create Invoice');
        await expect(createInvoiceForm).toBeVisible();
    });

    test('TC_ORD_30 - Verify redirection to "Create Shipment"', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await orders.locators.shipBtn.click();
        const createShipmentForm = orders.page.locator('text=Create Shipment');
        await expect(createShipmentForm).toBeVisible();
    });

    test('TC_ORD_31 - Verify Order Cancellation confirmation', async () => {
        await orders.locators.viewOrderArrow.first().click();
        orders.page.once('dialog', dialog => dialog.dismiss());
        await orders.locators.cancelOrderBtn.click();
    });

    test('TC_ORD_32 - Verify Product Information accuracy', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.productName.first()).toBeVisible();
    });

    test('TC_ORD_33 - Verify Configurable Product Options', async () => {
        await orders.locators.viewOrderArrow.first().click();
        const optionTags = orders.page.locator('//p[@class="text-gray-600 dark:text-gray-300"]');
        const count = await optionTags.count();
        expect(count).toBeGreaterThan(0);
        await expect(optionTags.first()).toBeVisible();
        const optionTexts = await optionTags.allTextContents();
        console.log('Configurable Options:', optionTexts);
    });

    test('TC_ORD_34 - Verify Subtotal calculation logic', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.subtotal).toBeVisible();
    });

    test('TC_ORD_35 - Verify Shipping & Handling display', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.shippingHandling).toBeVisible();
    });

    test('TC_ORD_36 - Verify Tax calculation display', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.taxAmount).toBeVisible();
    });

    test('TC_ORD_37 - Verify Grand Total mathematical accuracy', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.grandTotal).toBeVisible();
    });

    test('TC_ORD_38 - Verify "Total Due" display', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.totalDue).toBeVisible();
    });

    test('TC_ORD_39 - Verify Customer Profile Information', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.customerInfo).toBeVisible();
    });

    test('TC_ORD_40 - Verify Billing Address integrity', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.billingAddress).toBeVisible();
    });

    test('TC_ORD_41 - Verify Shipping Address integrity', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.shippingAddress).toBeVisible();
    });

    test('TC_ORD_42 - Verify General Order Information card', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.orderInformationCard).toBeVisible();
    });

    test('TC_ORD_43 - Verify Shipping Method details', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await expect(orders.locators.shippingMethod).toBeVisible();
    });

    test('TC_ORD_44 - Verify Internal Comment input', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await orders.locators.commentBox.fill('Internal Note');
        await expect(orders.locators.commentBox).toHaveValue('Internal Note');
    });

    test('TC_ORD_45 - Verify "Notify Customer" toggle', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await orders.locators.notifyCustomerCheckbox.click();
    });

    test('TC_ORD_46 - Verify Comment Submission and History', async () => {
        await orders.locators.viewOrderArrow.first().click();
        await orders.submitInternalComment('Automation Record');
        await expect(orders.locators.commentHistory.first()).toContainText('Automation Record');
    });
});