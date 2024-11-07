const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('mongodb+srv://vrishab:vrishab@123@cluster0.ymycu.mongodb.net/')
// .then(() => console.log('MongoDB connected'))
// .catch((error) => console.error('Connection error line 6:', error));

mongoose.connect('mongodb://vrishab:vrishab@123@cluster0.ymycu.mongodb.net/')
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('Connection error line 6:', error));

// Define a schema
const todoSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
  completed: { type: String}
});

// Create a model
const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo:todo
}
