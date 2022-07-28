const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://ruddnjs:zxcv159357@boilerplate.to91m.mongodb.net/?retryWrites=true&w=majority',{
  // useNewUrlParse : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=>console.log("MongoDB Connected.."))
.catch((err)=> console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})