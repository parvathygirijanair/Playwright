# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM3\ecommerce.spec.js >> E-commerce shopping workflow
- Location: tests\POM3\ecommerce.spec.js:7:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.checkout_heading')
Expected substring: "Benefit Bella Bamba"
Error: strict mode violation: locator('.checkout_heading') resolved to 2 elements:
    1) <a class="checkout_heading" href="https://automationteststore.com/index.php?rt=product/product&product_id=52">Benefit Bella Bamba</a> aka getByRole('link', { name: 'Benefit Bella Bamba' }).first()
    2) <td class="checkout_heading">$56.00</td> aka getByRole('cell', { name: '$' }).nth(1)

Call log:
  - Expect "toContainText" locator('.checkout_heading') with timeout 5000ms
  - waiting for locator('.checkout_heading')

```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - banner [ref=f6e3]:
    - navigation [ref=f6e4]:
      - generic [ref=f6e5]:
        - link [ref=f6e7] [cursor=pointer]:
          - /url: https://automationteststore.com/
          - img "Automation Test Store" [ref=f6e8]
        - generic [ref=f6e10]:
          - list [ref=f6e13]:
            - listitem [ref=f6e14]:
              - link "Login or register" [ref=f6e15] [cursor=pointer]:
                - /url: https://automationteststore.com/index.php?rt=account/login
          - generic [ref=f6e17]:
            - generic [ref=f6e18]: Main Menu
            - list [ref=f6e19]:
              - listitem [ref=f6e20]:
                - link " Specials" [ref=f6e21] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=product/special
                  - generic [ref=f6e22]: 
                  - text: Specials
              - listitem [ref=f6e23]:
                - link " Account" [ref=f6e24] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=account/account
                  - generic [ref=f6e25]: 
                  - text: Account
                - text:  
              - listitem [ref=f6e26]:
                - link " Cart" [ref=f6e27] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/cart
                  - generic [ref=f6e28]: 
                  - text: Cart
              - listitem [ref=f6e29]:
                - link " Checkout" [ref=f6e30] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/shipping
                  - generic [ref=f6e31]: 
                  - text: Checkout
          - generic [ref=f6e34]:
            - textbox "Search Keywords" [ref=f6e35]
            - generic "Go" [ref=f6e36] [cursor=pointer]: 
    - generic [ref=f6e39]:
      - list [ref=f6e41]:
        - listitem [ref=f6e42]:
          - generic [ref=f6e43]: $ US Dollar
      - list [ref=f6e47]:
        - listitem [ref=f6e48]:
          - link " 2 Items - $58.00" [ref=f6e49] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=checkout/cart
            - generic [ref=f6e50]: 
            - text: 2 Items - $58.00
          - text:   
      - generic [ref=f6e53]:
        - link "Facebook" [ref=f6e54] [cursor=pointer]:
          - /url: http://www.facebook.com
        - link "Twitter" [ref=f6e55] [cursor=pointer]:
          - /url: https://twitter.com/
        - link "Linkedin" [ref=f6e56] [cursor=pointer]:
          - /url: https://uk.linkedin.com/
  - generic [ref=f6e57]:
    - navigation [ref=f6e60]:
      - list [ref=f6e61]:
        - listitem [ref=f6e62]:
          - link "Home" [ref=f6e63] [cursor=pointer]:
            - /url: https://automationteststore.com/
          - text:      
        - listitem [ref=f6e64]:
          - link "Apparel & accessories" [ref=f6e65] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=68
        - listitem [ref=f6e66]:
          - link "Makeup" [ref=f6e67] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=36
        - listitem [ref=f6e68]:
          - link "Skincare" [ref=f6e69] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=43
        - listitem [ref=f6e70]:
          - link "Fragrance" [ref=f6e71] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=49
        - listitem [ref=f6e72]:
          - link "Men" [ref=f6e73] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=58
        - listitem [ref=f6e74]:
          - link "Hair Care" [ref=f6e75] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=52
        - listitem [ref=f6e76]:
          - link "Books" [ref=f6e77] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=65
    - list [ref=f6e80]:
      - listitem [ref=f6e81]:
        - link " Home" [ref=f6e82] [cursor=pointer]:
          - /url: https://automationteststore.com/
          - generic "Home" [ref=f6e83]: 
          - text: Home
      - listitem [ref=f6e84]:
        - text: 
        - link "Basket" [ref=f6e85] [cursor=pointer]:
          - /url: https://automationteststore.com/index.php?rt=checkout/cart
      - listitem [ref=f6e86]:
        - text: 
        - link "Guest Checkout - Step 1" [ref=f6e87] [cursor=pointer]:
          - /url: https://automationteststore.com/index.php?rt=checkout/guest_step_1
      - listitem [ref=f6e88]:
        - text: 
        - link "Guest Checkout - Step 2" [ref=f6e89] [cursor=pointer]:
          - /url: https://automationteststore.com/index.php?rt=checkout/guest_step_2
      - listitem [ref=f6e90]:
        - text: 
        - link "Confirm" [ref=f6e91] [cursor=pointer]:
          - /url: https://automationteststore.com/index.php?rt=checkout/guest_step_3
  - generic [ref=f6e93]:
    - generic [ref=f6e95]:
      - heading "Checkout Confirmation" [level=1] [ref=f6e96]
      - generic [ref=f6e98]:
        - paragraph [ref=f6e99]:
          - text: By clicking Confirm Order, you accept and agree to all terms of
          - link "Return Policy" [ref=f6e100] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=r/content/content/loadInfo&content_id=3
        - heading "Shipping" [level=4] [ref=f6e101]
        - table [ref=f6e102]:
          - rowgroup [ref=f6e103]:
            - row [ref=f6e104]:
              - cell "Test User 9876543210" [ref=f6e105]
              - cell "123 Test Street Chennai Tamil Nadu 600001 India" [ref=f6e106]
              - cell "Flat Shipping Rate" [ref=f6e108]
              - cell [ref=f6e109]:
                - link " Edit Shipping" [ref=f6e110] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/guest_step_2&mode=edit
                  - generic [ref=f6e111]: 
                  - text: Edit Shipping
        - heading "Payment" [level=4] [ref=f6e112]
        - table [ref=f6e113]:
          - rowgroup [ref=f6e114]:
            - row [ref=f6e115]:
              - cell "Test User 9876543210" [ref=f6e116]
              - cell "123 Test Street Chennai Tamil Nadu 600001 India" [ref=f6e117]
              - cell "Cash On Delivery" [ref=f6e119]
              - cell [ref=f6e120]:
                - link " Edit Payment" [ref=f6e121] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/guest_step_2&mode=edit
                  - generic [ref=f6e122]: 
                  - text: Edit Payment
                - link " Edit Coupon" [ref=f6e123] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/guest_step_2&mode=edit
                  - generic [ref=f6e124]: 
                  - text: Edit Coupon
        - heading [level=4] [ref=f6e125]:
          - text: Items in your cart
          - link " Edit Cart" [ref=f6e126] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=checkout/cart
            - generic [ref=f6e127]: 
            - text: Edit Cart
        - table [ref=f6e128]:
          - rowgroup [ref=f6e129]:
            - row [ref=f6e130]:
              - cell [ref=f6e131]:
                - link [ref=f6e132] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=product/product&product_id=52
              - cell [ref=f6e133]:
                - link "Benefit Bella Bamba" [ref=f6e134] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=product/product&product_id=52
              - cell "$28.00" [ref=f6e135]
              - cell "2" [ref=f6e136]
              - cell "$56.00" [ref=f6e137]
        - generic [ref=f6e138]:
          - table [ref=f6e140]:
            - rowgroup [ref=f6e141]:
              - row [ref=f6e142]:
                - cell "Sub-Total:" [ref=f6e143]
                - cell "$56.00" [ref=f6e144]
              - row [ref=f6e145]:
                - cell "Flat Shipping Rate:" [ref=f6e146]
                - cell "$2.00" [ref=f6e147]
              - row [ref=f6e148]:
                - cell "Total:" [ref=f6e149]
                - cell "$58.00" [ref=f6e150]
          - generic [ref=f6e152]:
            - generic [ref=f6e153]: 
            - text:  
    - generic [ref=f6e156]:
      - heading "Order Summary" [level=2] [ref=f6e157]
      - table [ref=f6e158]:
        - rowgroup [ref=f6e159]:
          - row [ref=f6e160]:
            - cell [ref=f6e161]:
              - text: 2 x
              - link "Benefit Bella Bamba" [ref=f6e162] [cursor=pointer]:
                - /url: https://automationteststore.com/index.php?rt=product/product&product_id=52
            - cell "$28.00" [ref=f6e163]
      - table [ref=f6e165]:
        - rowgroup [ref=f6e166]:
          - row [ref=f6e167]:
            - cell "Sub-Total:" [ref=f6e168]
            - cell "$56.00" [ref=f6e170]
          - row [ref=f6e171]:
            - cell "Flat Shipping Rate:" [ref=f6e172]
            - cell "$2.00" [ref=f6e174]
          - row [ref=f6e175]:
            - cell "Total:" [ref=f6e176]
            - cell "$58.00" [ref=f6e178]
  - contentinfo [ref=f6e182]:
    - generic [ref=f6e184]:
      - generic [ref=f6e187]:
        - heading "About Us" [level=2] [ref=f6e188]
        - paragraph [ref=f6e189]: This store has been created to enable students to practice their automation testing skills. This is not a real store, no orders are actually placed or payments taken. This store is to be used for educational purposes only.
      - generic [ref=f6e192]:
        - heading "Contact Us" [level=2] [ref=f6e193]
        - list [ref=f6e194]:
          - listitem [ref=f6e195]:
            - generic [ref=f6e196]: 
            - text: +123 456 7890
          - listitem [ref=f6e197]:
            - generic [ref=f6e198]: 
            - text: admin@automationteststore.com
      - generic [ref=f6e201]:
        - heading "Testimonials" [level=2] [ref=f6e202]
        - generic [ref=f6e203]:
          - list [ref=f6e205]:
            - listitem [ref=f6e206]:
              - text: "\"Regular customer and products at great prices. Thanks again.\""
              - generic [ref=f6e207]: "By : Mrs Baker on trustedmegareviews.org"
            - listitem [ref=f6e208]:
              - text: "\"Really great products and professional service!\""
              - generic [ref=f6e209]: "By : Megan Witmore"
            - listitem [ref=f6e210]:
              - text: "\"I found this store to be very reasonably priced and the service was superb. Highly recommended \""
              - generic [ref=f6e211]: "By : Jason Sturidge"
            - listitem [ref=f6e212]:
              - text: "\"Returns were easy and my replacement item arrived very quickly. Really great service. Thanks and will be buying again.\""
              - generic [ref=f6e213]: "By : Kirsty Williams"
            - listitem [ref=f6e214]:
              - text: "\"Regular customer and products at great prices. Thanks again.\""
              - generic [ref=f6e215]: "By : Mrs Baker on trustedmegareviews.org"
            - listitem [ref=f6e216]:
              - text: "\"Really great products and professional service!\""
              - generic [ref=f6e217]: "By : Megan Witmore"
          - list [ref=f6e218]:
            - listitem [ref=f6e219]:
              - generic [ref=f6e220]: "1"
            - listitem [ref=f6e221]:
              - generic [ref=f6e222] [cursor=pointer]: "2"
            - listitem [ref=f6e223]:
              - generic [ref=f6e224] [cursor=pointer]: "3"
            - listitem [ref=f6e225]:
              - generic [ref=f6e226] [cursor=pointer]: "4"
      - generic [ref=f6e229]:
        - heading "Newsletter Signup" [level=2] [ref=f6e230]
        - generic [ref=f6e231]:  Sign up to Our Newsletter & get attractive Offers by subscribing to our newsletters.
        - generic [ref=f6e234]:
          - textbox "Subscribe to Newsletter" [ref=f6e235]
          - button "Subscribe" [ref=f6e237] [cursor=pointer]
    - generic [ref=f6e239]:
      - list [ref=f6e242]:
        - listitem [ref=f6e243]:
          - link "About Us" [ref=f6e245] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=1
        - listitem [ref=f6e246]:
          - link "Privacy Policy" [ref=f6e248] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=2
        - listitem [ref=f6e249]:
          - link "Return Policy" [ref=f6e251] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=3
        - listitem [ref=f6e252]:
          - link "Shipping" [ref=f6e254] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=4
        - listitem [ref=f6e255]:
          - link "Contact Us" [ref=f6e256] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/contact
        - listitem [ref=f6e257]:
          - link "Site Map" [ref=f6e258] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/sitemap
        - listitem [ref=f6e259]:
          - link "Login" [ref=f6e260] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=account/login
      - generic [ref=f6e262]:
        - link "Facebook" [ref=f6e263] [cursor=pointer]:
          - /url: http://www.facebook.com
        - link "Twitter" [ref=f6e264] [cursor=pointer]:
          - /url: https://twitter.com/
        - link "Linkedin" [ref=f6e265] [cursor=pointer]:
          - /url: https://uk.linkedin.com/
    - generic [ref=f6e267]:
      - img "payments" [ref=f6e270]
      - generic [ref=f6e271]:
        - text: Powered By
        - link "AbanteCart" [ref=f6e272] [cursor=pointer]:
          - /url: http://www.abantecart.com
        - text: Automation Test Store © 2026
      - link [ref=f6e275] [cursor=pointer]:
        - /url: http://www.abantecart.com/contribute-to-abantecart
        - img "Support AbanteCart eCommerce" [ref=f6e276]
    - link "Back to top" [ref=f6e277] [cursor=pointer]:
      - /url: "#"
```

# Test source

```ts
  1  | 
  2  | const { expect } = require('@playwright/test');
  3  | 
  4  | class OrderPage {
  5  | 
  6  |     constructor(page) {
  7  |         this.page = page;
  8  | 
  9  |         // Order Details - replace after inspecting the order summary
  10 |         // this.productName = page.locator('YOUR_PRODUCT_LOCATOR');
  11 |         this.productName = page.locator('.checkout_heading');
  12 |         this.quantity = page.locator('YOUR_QUANTITY_LOCATOR');
  13 |         this.orderTotal = page.locator('YOUR_TOTAL_LOCATOR');
  14 | 
  15 |         // Order Confirmation
  16 |         this.confirmOrderButton = page.locator('#checkout_btn');
  17 |         this.termsCheckbox = page.locator('#agree');
  18 | 
  19 |         // Confirmation Message
  20 |         this.confirmationMessage = page.locator('#maincontainer');
  21 |     }
  22 | 
  23 |     // Verify Order Details
  24 |     async verifyOrderDetails() {
  25 | 
  26 |         await expect(this.productName)
> 27 |             .toContainText('Benefit Bella Bamba');
     |              ^ Error: expect(locator).toContainText(expected) failed
  28 | 
  29 |         await expect(this.quantity)
  30 |             .toHaveValue('2');
  31 | 
  32 |         await expect(this.orderTotal)
  33 |             .toBeVisible();
  34 |     }
  35 | 
  36 |     // Accept Terms and Conditions
  37 |     async acceptTerms() {
  38 | 
  39 |         if (await this.termsCheckbox.isVisible()) {
  40 |             await this.termsCheckbox.check();
  41 |         }
  42 |     }
  43 | 
  44 |     // Confirm Order
  45 |     async confirmOrder() {
  46 |         await this.confirmOrderButton.click();
  47 |     }
  48 | 
  49 |     // Verify Order Confirmation
  50 |     async verifyOrderConfirmation() {
  51 | 
  52 |         await expect(this.confirmationMessage)
  53 |             .toContainText(/order|success|thank you/i);
  54 |     }
  55 | }
  56 | 
  57 | module.exports = OrderPage;
  58 | 
```