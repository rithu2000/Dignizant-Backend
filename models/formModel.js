import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    fields: [
        {
            name: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
                enum: ['text', 'radio', 'checkbox', 'dropdown'],
            },
            required: {
                type: Boolean,
                default: false,
            },
            options: [String],
        },
    ],
    createdDate: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

export const formModel = mongoose.model('form', formSchema);