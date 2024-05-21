const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to the database');
});


// // Define a schema and model for the saved data
const TaskSchemaOne = new mongoose.Schema({
    selectedCount: Number,
    totalSum: Number
});
const taskOne = mongoose.model('taskOne', TaskSchemaOne);

const TaskSchemaTwo = new mongoose.Schema({
    selectedCountTwo: Number,
    totalSumTwo: Number,
    i: [Number],
});
const taskTwo = mongoose.model('taskTwo', TaskSchemaTwo);



app.post('/save-total-task-1', async (req, res) => {
    const { selectedCount, totalSum } = req.body;
    const task_one = new taskOne({ selectedCount, totalSum });
    try {
        await task_one.save();
        console.log(`Task one-Selected Count: ${selectedCount}, Total Sum: ${totalSum}`);
        res.json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
});


app.post('/save-total-task-2', async (req, res) => {
    const { selectedCountTwo, totalSumTwo, i } = req.body;
    const task_one = new taskTwo({ selectedCountTwo, totalSumTwo, i });
    try {
        await task_one.save();
        console.log(`Task one-Selected Count: ${selectedCountTwo}, Total Sum: ${totalSumTwo} and index:${i}`);
        res.json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
