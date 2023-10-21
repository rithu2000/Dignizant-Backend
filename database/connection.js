import mongoose from 'mongoose'

async function connect() {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect('mongodb://localhost:27017/dignizant', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Database Connected");
    return db;
}

export default connect;