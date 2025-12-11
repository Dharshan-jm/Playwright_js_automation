const {test,expect}= require('@playwright/test')

//lets create hooks as well

test.beforeAll(async ()=>{
    console.log('before all hook')
})

test.afterAll(async ()=>{
    console.log('after all hook')
})

test.beforeEach(async ()=>{
    console.log('before each hook')
})

test.afterEach(async ()=>{
    console.log('after each hook')
})

//------------------------------------------------------------
//group1
test.describe('group1',()=>{
  
    test('test1',async({page})=>{
   console.log('test--1')
})

    test('test2',async({page})=>{
    console.log('test--2')
    })

})

// group 2
test.describe.only('group2',()=>{

    test('test3',async({page})=>{
   console.log('test--3')
    })

    test('test4',async({page})=>{
    console.log('test--4')
    })

})




