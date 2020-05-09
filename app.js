const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const actorRouter = require('./routers/actorsRouter')();
app.use('/api', actorRouter);


app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
module.exports = app;