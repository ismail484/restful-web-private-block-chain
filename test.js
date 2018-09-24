const request = require('supertest'),
      toastr = require('toastr'),
      avaAssert = require('ava-assert'),
      url='http://localhost:8000',
      test = require('ava');
      

  test.cb('/block should add new block', b => {
    const blockHeight = 0
    request(url)
      .get('/block/' + blockHeight)
      .expect(200)
      .expect(res=>{
        avaAssert.is(res.body.data.height, blockHeight)
      })
      .expect((res)=>{
        res.body.data.hasOwnProperty('hash'),
        res.body.data.hasOwnProperty('height'),
        res.body.data.hasOwnProperty('body'),
        res.body.data.hasOwnProperty('time'),
        res.body.data.hasOwnProperty('previousBlockHash')
      })
       .end(b.end)
})


  test.cb('route /block should return newly added block', b => {
    let myData={ data: 'this is data for testing' }
      request(url)
      .post('/block',myData)
      .send(myData)
      .expect(200)
      .expect(res => {
        avaAssert.deepEqual(res.body.data.body,'this is data for testing')
        })
      .expect(res=>{
        res.body.data.hasOwnProperty('hash'),
        res.body.data.hasOwnProperty('height'),
        res.body.data.hasOwnProperty('body'),
        res.body.data.hasOwnProperty('time'),
        res.body.data.hasOwnProperty('previousBlockHash')
      })

      .end(b.end)
    
     
  })


