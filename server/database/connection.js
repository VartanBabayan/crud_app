const mongoose = require('mongoose');

const connectDB = mongoose.connect('mongodb://localhost/project', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

module.exports = connectDB

// const connectDB = async () => {
//     try{
//         // mongodb connection string
//         const con = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         })

//         console.log(`MongoDB connected : ${con.connection.host}`);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }