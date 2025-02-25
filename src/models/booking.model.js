import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
    {
        slotId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Slot',
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    }, { timestamps: true}
)

bookingSchema.index({ slotId: 1, userId: 1 },{ unique: true })

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking