import mongoose from "mongoose";

const schema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        // unique: true
    },
    page: {
        type: String,
        required: true,

    }
})


export default mongoose.model('bids', schema)