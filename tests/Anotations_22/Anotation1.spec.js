const {test,expect}=require('@playwright/test')


test('demo1',async({page})=>{
    console.log('demo-1')
})


test('demo2',async({page , browserName})=>{
    if(browserName=='chromium')
    {
        test.skip()
    }
    console.log('demo-2')
})