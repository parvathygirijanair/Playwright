const { faker } = require('@faker-js/faker');
const { readExcel } = require('./excelUtils');

async function createRegisteredTestAccount(world) {
    const registrationUsers = await readExcel('Registration');
    const loginUsers = await readExcel('Login');

    if (registrationUsers.length === 0) {
        throw new Error('Registration sheet must contain at least one user');
    }

    if (loginUsers.length === 0 ||!loginUsers[0].Email ||!loginUsers[0].Password) {
        throw new Error('Login sheet must contain an email and password');
    }

    return registerTestAccount(
        world,
        registrationUsers[0],
        loginUsers[0].Password,
        loginUsers[0].Email
    );
}

function createUniqueEmail(emailTemplate) {
    const atIndex = emailTemplate.lastIndexOf('@');

    if (atIndex <= 0 || atIndex === emailTemplate.length - 1) {
        throw new Error(
            `Invalid email address in Login sheet: "${emailTemplate}"`
        );
    }

    return `${emailTemplate.slice(0, atIndex)}-${faker.string.uuid()}${emailTemplate.slice(atIndex)}`;
}

async function registerTestAccount(
    world,
    user,
    password = user.Password,
    emailTemplate
) {
    if (!user || !user.FirstName || !user.LastName || !password) {
        throw new Error(
            'A registration user with first name, last name, and password is required'
        );
    }

    const gender = user.Gender || 'Male';
    if (!user.Gender) {
        console.warn(
            'Registration data has no Gender value; defaulting to Male. Add a Gender column to select gender from Excel.'
        );
    }

    const account = {
        ...user,
        Email: emailTemplate
            ? createUniqueEmail(emailTemplate)
            : `test-${faker.string.uuid()}@example.com`,
        Password: password,
    };

    await world.registrationPage.navigate();
    await world.registrationPage.clickRegister();
    await world.registrationPage.selectGender(gender);
    await world.registrationPage.enterDetails(account);
    await world.registrationPage.submitRegistration();
    await world.registrationPage.verifySuccess();

    return account;
}

module.exports = {
    createRegisteredTestAccount,
    registerTestAccount,
};
