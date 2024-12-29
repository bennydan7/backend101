import mongoose from  'mongoose';

const launchesSchema = new mongoose.Schema ({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: Date,

})