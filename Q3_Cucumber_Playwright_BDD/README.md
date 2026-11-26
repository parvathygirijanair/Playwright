# Demo Web Shop BDD Automation

Playwright + JavaScript + Cucumber framework using the Page Object Model.

## Setup

```powershell
npm install
npx playwright install chromium
```

The browser is headless by default. Set `HEADLESS=false` to watch a run.

## Run scenarios

```powershell
npm test
npm run test:registration
npm run test:login
npm run test:wishlist
npm run test:email
npm run test:account
npm run test:shopping
npm run test:sequential
npm run test:parallel
```

`npm run test:account` and `npm run test:shopping` demonstrate Cucumber tag
expressions. Sequential execution is the default; `test:parallel` runs two
workers. Parallel mode can also be configured with `CUCUMBER_PARALLEL`.

The Registration sheet supplies multiple user rows. The framework creates
unique Faker email addresses at runtime; it does not persist generated
addresses to the workbook. Login-dependent scenarios register and log in with
a fresh account using the Login sheet's password and email as the template for
its unique address.

The wishlist scenario clicks the Add to Wishlist control when the site renders
it. The current Demo Web Shop page does not render that control, so the scenario
uses the site's catalog wishlist endpoint with the current browser session and
then verifies the product on the Wishlist page. It selects Fiction EX because
the site's endpoint disables wishlist additions for some other Books products.

HTML and JSON reports are generated under `reports/` with each run. Failed
scenarios attach a screenshot to the Cucumber result.
