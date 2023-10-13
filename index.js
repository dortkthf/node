const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dortkthf:DO45tl45@cluster0.5w8vjd8.mongodb.net/', {
    useNewUrlParser: true, useUnifiedTopology:true,
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req,res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))