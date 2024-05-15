const express = require('express');
const catRoutes =require('./routes/catRoutes')
const app = express();
//app.use(express.Static('dist'))
app.use('/', catRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
});