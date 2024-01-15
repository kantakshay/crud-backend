const express = require('express');

const app = express()
app.use(express.json())  
app.use(require('./middleware/auth'))
app.use("/api/v1",require("./routes/index"))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.listen(5000 ,()=>{
console.log("my server is running",5000);
})
