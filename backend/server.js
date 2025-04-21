require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');

const checkRole = require('./middleware/roleMiddleware');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.post('./create', checkRole('admin','create'), (req,res) => {
    //handle create action
    res.status(200).json({ message: 'Create action allowed'});
});

app.delete('./delete', checkRole('admin','delete'),(req,res) => {
    res.send('Content deleted');;
});

//Routes
app.use("/api/auth", require("./routes/authrouter"));
app.use("/api", require("./routes/userroutes"));
app.use("/", require("./routes/publicroutes"));
app.use("/api/protected", require("./routes/protectroutes"));
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
