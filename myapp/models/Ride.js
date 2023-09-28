import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    title: {
        type: String,
    },
    photo: {
        type: String,
    },
    desc: {
        type: String,
   },
//    perks: {
//     type: [String],
//    },
   category: {
    type: String,
    enum: [
        'Suv',
        'Sports',
        'Luxury',
        'Sedan',
        'Electric',
    ]
},
   extraInfo: String,
   checkIn: Number,
   checkOut: Number,
   seats: Number,
   price: Number,
}, {timestamps: true})



export default mongoose?.models?.Ride || mongoose.model("Ride", RideSchema)
