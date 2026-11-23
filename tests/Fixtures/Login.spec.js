import{test} from "./auth.fixture";
test.beforeEach(async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
});

test("Valid login test", async  ({ loggedInUser })=> {
  let page = loggedInUser;

  await page.waitForTimeout(5000);
});
