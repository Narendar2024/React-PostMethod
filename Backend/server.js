const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const userRouter = require("./routes/user")
const cors = require('cors')

const app = express();

app.use(cors())
dotEnv.config();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`Database connected successfully ${PORT}`);
}).catch((err) => {
    console.log(err);
})

app.use('/api/emp', userRouter)


app.get('/', (req, res) => {
    res.send(`Server is running successfully at ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`server is running successfully`);
})