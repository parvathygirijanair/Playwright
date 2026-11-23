# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testSuite\test.spec.js >> log and navigate
- Location: tests\testSuite\test.spec.js:4:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.title')
Expected: "products/i"
Received: "Products"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('.title') with timeout 5000ms
  - waiting for locator('.title')
    13 × locator resolved to <span class="title" data-test="title">Products</span>
       - unexpected value "Products"

```

```yaml
- text: Products
```

# Test source

```ts
  1 | const {test,expect}= require('@playwright/test');
  2 | import login from "../Utils/login";
  3 | import navigation from "../Utils/navigation";
  4 | test('log and navigate',async ({page})=>{
  5 |     await login(page,"standard_user", "secret_sauce");
  6 |     await expect(page).toHaveURL(/inventory/);
  7 |     await navigation(page);
> 8 |     await expect(page.locator('.title')).toHaveText('products/i');
    |                                          ^ Error: expect(locator).toHaveText(expected) failed
  9 | })
```