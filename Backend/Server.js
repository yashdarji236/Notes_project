require('dotenv').config()
const connecttoDB = require('./src/config/Database.js')
const app = require('./src/App.js');
connecttoDB()
app.listen('3000',function(){
    console.log('server is running at port 3000');
})
