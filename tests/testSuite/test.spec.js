const {test,expect}= require('@playwright/test');
import login from "../Utils/login";
import navigation from "../Utils/navigation";
test('log and navigate',async ({page})=>{
    await login(page,"standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory/);
    await navigation(page);
    await expect(page.locator('.title')).toHaveText('Products')})