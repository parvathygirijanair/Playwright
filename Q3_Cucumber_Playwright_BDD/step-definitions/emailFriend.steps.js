const { When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

When('I click on Email a Friend', async function () {
    await this.emailFriendPage.clickEmailFriend();
});

When("I enter friend's email and message", async function () {
    const friendEmail = `friend-${faker.string.uuid()}@example.com`;
    const message = 'I recommend this book. Please check it out!';
    await this.emailFriendPage.enterFriendDetails(friendEmail, message);
});

When('I submit the email form', async function () {
    await this.emailFriendPage.sendEmail();
});

Then('I should see email sent confirmation', async function () {
    await this.emailFriendPage.verifyEmailSent();
});
