const express = require('express');
const app = express();
const router = require('./router');
const {sequelize} = require('./models/db')
const cors = require('cors')

const port = 3004;
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected :>')
    } catch (err) {
        console.log('Connection fails', err)
    }

})();
app.use(cors())
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})