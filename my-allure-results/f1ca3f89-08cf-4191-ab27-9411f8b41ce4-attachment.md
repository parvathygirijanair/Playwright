# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testData.spec.js >>  Entering Incorrect Value
- Location: tests\testData.spec.js:3:1

# Error details

```
ReferenceError: testData is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | const {test,expect}= require('@playwright/test');
  2  | // const testData= require('../../TestData')
  3  | test(" Entering Incorrect Value", async ({ page }) => {
  4  |     await page.goto("https://www.saucedemo.com/");
  5  | 
  6  |     // Invalid username with valid password
> 7  |     await page.locator("#user-name").fill(testData.login.invalidUsername);
     |                                           ^ ReferenceError: testData is not defined
  8  |     await page.locator("#password").fill(testData.login.validPassword);
  9  |     await page.locator("#login-button").click();
  10 | 
  11 |     const error = page.locator("[data-test='error']");
  12 |     console.log(await error.textContent());
  13 |     await expect(error).toContainText("Epic sadface");
  14 |     await expect(error).toHaveText("Epic sadface: Username and password do not match any user in this service");
  15 | 
  16 |     // Recover with a valid username (password is still filled in)
  17 |     await page.locator("#user-name").fill(testData.login.validUsername);
  18 |     await page.locator("#login-button").click();
  19 | 
  20 |     await expect(page).toHaveURL(/inventory/);
  21 | });
  22 | 
```