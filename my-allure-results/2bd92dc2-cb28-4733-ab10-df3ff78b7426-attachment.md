# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\demoblazeTest.spec.js >> Demoblaze test in POM
- Location: tests\POM\demoblazeTest.spec.js:3:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'goto')
```

# Test source

```ts
  1  | exports.LoginPage = class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.loginLink = "#login2";
  5  |         this.usernameInput = '#loginusername';
  6  |         this.passwordInput = '#loginpassword';
  7  |         this.loginButton = '.btn.btn-primary'
  8  |     }
  9  | 
  10 |     async gotoLoginPage() {
> 11 |         await this.page.goto('https://www.demoblaze.com/index.html');
     |                         ^ TypeError: Cannot read properties of undefined (reading 'goto')
  12 |     }
  13 |     async loginForm(username, password) {
  14 |         await this.page.locator(this.loginLink).click();
  15 |         await this.page.locator(this.username).fill(username);
  16 |         await this.page.locator(this.password).fill(password);
  17 |         await this.page.locator(this.loginButton).click();
  18 |     }
  19 | }
```