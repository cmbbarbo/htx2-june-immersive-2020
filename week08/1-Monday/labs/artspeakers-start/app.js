const express = require('express');

app = express();

app.use(express.static('public'))
// create routes

app.set("view engine","ejs")
app.set("views","views")

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))

app.listen(4000, () => {
    console.log("listening on port 4000");
})