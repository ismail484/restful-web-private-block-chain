const bodyParser= require('body-parser'),
      Block = require('../models/block'),
      Blockchain = require('../models/simpleChain'),
      myBlockChain = new Blockchain();
      let blockHeight;

module.exports=function(app){


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.get('/', (req, res) => res.status(404).json({
      "status": 404,
      "message": "this handles api endpoints of GET /block/{BLOCK_HEIGHT}, POST /block  "
    }))

    /**
 * HTTP method: GET Block endpoint using the following URL path with block height parameter :  http://localhost:8000/block/{BLOCK_HEIGHT}
 */
app.get('/block/:height', async (req, res) => {
    try {
      const myBlock = await myBlockChain.getBlock(req.params.height);
      if(myBlock){
        res.json({
          success: true,
          data: myBlock
        })
      } else {
        res.status(404).json({
          status:"error",
          success: false,
          message: `error!..sorry, the required Block # ${req.params.height} is not found`
        })
      }
    } catch (e) {
      res.status(500).json({
        status: "error",
        succes:false,
        message: `Network error while getting block #${req.params.height} ,please contact your admin`
      })
    }
  })
  

  /**
 * HTTP method : POST Block endpoint using key/value pair within request body with  URL path http://localhost:8000/block
 */
app.post('/block', async (req, res) => {
  console.log(`my data is: ${req.body}`);
  const data = req.body.data;
  if(data){
     const newBlock=new Block(data); 
     myBlockChain.addBlock(newBlock).then(result => {
     res.status(200).json({
            success: true,
            data: newBlock
       })
    })
  }else {
      res.status(400).json({
        status: "error",
        success: false,
        message: `Please send corrected data`
      })
    }
  
  })

}