import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    service: {
        type: String,   
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
      type: String,
      enum: ["Pending", "Contacted", "Completed"],
      default: "Pending",
    }
}, {
    timestamps: true
})
const Client = mongoose.model("VQcustomers", clientSchema)
export default Client