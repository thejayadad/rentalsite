import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
   },
   perks: {
    type: [String],
    required: true,
   },
   category: {
    type: String,
    required: true,
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
