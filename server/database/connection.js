const mongoose = require('mongoose');

const connectDB = mongoose.connect('mongodb://localhost/project', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

module.exports = connectDB