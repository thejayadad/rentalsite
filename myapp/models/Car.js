import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
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
    description: {
        type: String,
        required: true,
   },
   perks: {
    type: [String],
    required: true,
   },
   extraInfo: String,
   checkIn: Number,
   checkOut: Number,
   seats: Number,
   price: Number,
}, {timestamps: true})



export default mongoose?.models?.Car || mongoose.model("Car", CarSchema)