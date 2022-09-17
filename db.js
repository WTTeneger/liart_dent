import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import bids from './models/Bids.js'

let url_db = process.env.ME_CONFIG_MONGODB_URL
url_db = 'mongodb://leart_user:leart_pass!@mongo/leart_db'

// url_db = 'mongodb://itab:pass_itab_pass!@217.25.95.172/itab'



// Set mongoose Promise to Bluebird
// mongoose.Promise = bluebird

// Retry connection
const connectWithRetry = () => {
    console.log('MongoDB connection with retry', url_db)
    return mongoose.connect(url_db);
}

// Exit application on error
mongoose.connection.on('error', err => {
    console.log(`MongoDB connection error: ${err}`)
    setTimeout(connectWithRetry, 5000)
})

async function all_db() {
    const silence = new bids({ phone: "+79628855545", page: 'Брекиты' });
    silence.save();
}
mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected')
    // all_db()
})

const connect = () => {
    connectWithRetry()
}
export default connect

