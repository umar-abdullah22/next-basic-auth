import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('DB connection established')
        })

        connection.on('error', (err) => {
            console.log('DB connection failed', err)
            process.exit()
        })
    }
    catch (error) {
        console.error('Something went wrong')
        console.log(error)
    }
}