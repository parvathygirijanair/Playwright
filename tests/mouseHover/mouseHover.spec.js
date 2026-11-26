const{test,expect}=require('@playwright/test');
test.skip('Mouse Hover',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
const user1 = page.locator("//img[@alt='User Avatar']").nth(0)
const user2 = page.locator("//img[@alt='User Avatar']").nth(1)
const user3 = page.locator("//img[@alt='User Avatar']").nth(2)
await user1.hover()
await page.waitForTimeout(2000)

await user2.hover()
await page.waitForTimeout(2000)

await user3.hover()
await page.waitForTimeout(2000)
await page.close()

})
//
test.skip('Mouse double click',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/double-click');
const buttton = page.locator("#double-click-btn");
buttton.dblclick();
await page.waitForTimeout(2000)
await page.close()
})
//
test.skip('Mouse right click',async({page})=>{
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
const buttton = page.locator(".context-menu-one");
await buttton.click({ button: 'right' });
await page.waitForTimeout(3000)
})
//
test('Drag And Drop',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
const iFrame = await page.frameLocator(".demo-frame");
const toDrag=await iFrame.locator('#draggable');
const toDrop=await iFrame.locator('#droppable');

await toDrag.dragTo(toDrop);
})