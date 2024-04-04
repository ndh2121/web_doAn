import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    const url = 'mongodb+srv://phoneTungTao:phoneTungTao@cluster0.gl8vsb6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;