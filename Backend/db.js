const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://akash_likash:ePXcWRFMQn7IY8UW@cluster0.djuyjk3.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});


const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}
