module.exports = {
    BASE_URL: 'https://commerce.bagisto.com/',

    LOGIN: {
        EMAIL: 'john@example.com',
        PASSWORD: 'demo123'
    },

    FLOGIN: { // Failed login
        EMAIL: 'wrong@gmail.com',
        PASSWORD: 'wrongpass',
        ERRORMSG: 'Please check your credentials and try again.',
        LESSPASS: 'The Password field must be at least 6 characters'
    },

    ELOGIN: { // Empty fields
        EMAIL: '',
        PASSWORD: '',
        ERROREMAIL: 'The Email field is required',
        ERRORPASS: 'The Password field is required'
    },

    REGISTER: {
        FIRSTNAME: 'Om',
        LASTNAME: 'Prajapati',
        EMAIL: 'ohmprajapati@gmail.com',
        PASSWORD: '123456',
        CONFIRMPASSWORD: '123456'
    },

    FREGISTER: { // Failed Registration
        FIRSTNAME: 'Om',
        LASTNAME: 'Prajapati',
        EMAIL: 'om@prajapati@gmail.com',
        PASSWORD: '12345',
        CONFIRMPASSWORD: '12346',
    },

    EREGISTER: {
        FIRSTNAME: 'The First Name field is required',
        LASTNAME: 'The Last Name field is required',
        EMAIL: 'The Email field is required',
        PASSWORD: 'The Password field is required',
        CONFIRMPASSWORD: 'The Password field confirmation does not match',
        ERROREML: 'The Email field must be a valid email',
        ERRORPASS: 'The Password field must be at least 6 characters',
        AGREEMENT: 'The agreement field is required'
    },

    ADDRESS: {
        FIRSTNAME: 'Om',
        LASTNAME: 'Prajapati',
        EMAIL: 'ommprajapati@gmail.com',
        COMPANYNAME: 'ABC Pvt. Ltd.',
        STREETADD: '508, Vavol, Gandhinagar, Gujarat',
        CITY: 'Gandhinagar',
        ZIP: '382016',
        TELEPHONE: '9382265830'
    },

    ADMINLOGIN: {
        EMAIL: 'admin@example.com',
        PASSWORD: 'admin123'
    },

    INVALIDADMIN: {
        EMAIL: 'admin123@example.com',
        PASSWORD: 'admin12310'
    }
};
