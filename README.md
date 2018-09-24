 
# Project: restful-web-private-block-chain - [Mohamed Ismail]

# Description
  
  ### First open [Book Track App](http://localhost:8000/book/:id) to discover, how app works .
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
   3.  open browser [MyReads App](http://localhost:8000/book/0)
  
 
# Test
  - run `ava test.js` .
  - I checked I get &post block data correctly



# Resources
 
   1. [React Library](https://facebook.github.io/react/)
   2. [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
   3. [Create React updates-Webpack2](https://facebook.github.io/react/blog/2017/05/18/whats-new-in-create-react-app.html)
   4. [React Form and select element](https://facebook.github.io/react/docs/forms.html)
   5. [Short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation)
   6. [React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)
   7. [Using a function in `setState` instead of an object](https://medium.com/@shopsifter/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1)
   8. [Eslint Rules](http://eslint.org/)
   9. [Heroku Cloud](https://devcenter.heroku.com/)
