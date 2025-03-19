import mongoose from "mongoose";

const { Schema } = mongoose;

// question model
const questionModel = new Schema({
    question: {
        type: String,
        required: true,  // Ensure every question is provided
    },
    answer: {
        type: String,
        required: true,  // Ensure every answer is provided
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model("Question", questionModel);
