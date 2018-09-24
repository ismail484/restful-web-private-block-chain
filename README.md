 
# Project: restful-web-private-block-chain - [Mohamed Ismail]

# Description
  
  ### First open [Restful BlockChain API App](http://localhost:8000/book/:id) to discover, how app works .
  - Simply , It acts as a restfull Blockchain API using Nodejs (Express)   .
  - This web App introduces the fundamentals of web APIs with Node.js frameworks. Using my own private blockchain to create a web API is a huge first step toward developing my own web applications that are consumable by a variety of web clients.
  

  #### How  components do interact with each other:

```
app.js
│     
│
└───models 
│   │  
│   └─── block.js
│   │        
│   └───  simpleChain.js
│     
└───  controllers.js   
|        │
|        └───  blockChainController.js
|
|
|
└───utils   
     | 
     └───  levelSandbox.js
        
    
 ``` 

# Required Libraries and Dependencies
   - Ava globally  : run ` npm install --global ava`
   - Ava as a development dependency : run ` ava --init`
   - Ava assertion : run `npm install --save ava-assert`
   - Body-parser : run `npm install --save body-parser`
   - Crypto-js : run `npm install --save crypto-js`
   - express : run `npm install --save express`
   - level db : run `npm install level --save`
   - nodemon global : run `npm install -g nodemon`
   - nodemon as a development dependency : run `npm install --save-dev nodemon`
   - Super test   : run `npm install supertest --save-dev` 

   
   

# How to Run Project 
   1.  Download all Project files
   2.  Run `npm install` to install all required dependancies &packages .
   3.  Run `nodemon app.js`
   3.  open browser [Restful BlockChain API App](http://localhost:8000/book/5)
   4.  data example:`{"success":true,"data":{"hash":"8860167ee6ecca0a44e2b9112b5a2c9ca744920073d401c9557ce9afc7b86756","height":5,"body":"this is data for testing","time":"1537745553","previousBlockHash":"71ebff7e5abb01b898cc81a728650e365f8e1791b0174f66076de45f4a69a24a"}}`
  
 
# Test
  - run `ava test.js` .
  - I checked I get &post block data correctly



# Resources
 
   1. [Expressjs](https://www.npmjs.com/package/express)
   2. [Ava-Assertion](https://github.com/avajs/ava-assert)
   3. [AVA Testing](https://github.com/avajs/ava)
   4. [Superr Test](https://www.npmjs.com/package/supertest)
   5. [Nodemon server](https://github.com/remy/nodemon)
   6. [Body Parser](https://www.npmjs.com/package/body-parser)
   7. [Level DB](https://www.npmjs.com/package/level)
