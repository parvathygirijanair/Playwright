const { setWorldConstructor, World } = require('@cucumber/cucumber');

class CustomWorld extends World {
    constructor(options) {
        super(options);
        this.browser = null;
        this.context = null;
        this.page = null;
        this.registrationPage = null;
        this.loginPage = null;
        this.wishlistPage = null;
        this.emailFriendPage = null;
        this.testAccount = null;
    }
}

setWorldConstructor(CustomWorld);
