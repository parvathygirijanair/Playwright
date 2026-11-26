const { expect } = require('@playwright/test');

class EmailFriendPage {
    constructor(page) {
        this.page = page;
        this.emailFriendLink = page.locator('.email-a-friend');
        this.friendEmail = page.locator('#FriendEmail');
        this.message = page.locator('#PersonalMessage');
        this.sendButton = page.locator('.send-email-a-friend-button');
        this.successMessage = page.locator('.result');
    }

    async clickEmailFriend() {
        await this.emailFriendLink.click();
    }

    async enterFriendDetails(email, message) {
        await this.friendEmail.fill(email);
        await this.message.fill(message);
    }

    async sendEmail() {
        await this.sendButton.click();
    }

    async verifyEmailSent() {
        await expect(this.successMessage).toContainText(
            'Your message has been sent'
        );
    }
}

module.exports = EmailFriendPage;
