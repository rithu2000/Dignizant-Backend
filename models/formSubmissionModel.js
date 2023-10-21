import mongoose from "mongoose";

const formSubmissionSchema = new mongoose.Schema({
    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'form',
        required: true,
    },
    responses: [
        {
            fieldId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            value: {
                type: String,
            },
        },
    ],
    submittedDate: {
        type: Date,
        default: Date.now,
    },
});

export const formSubmissionModel = mongoose.model('formSubmission', formSubmissionSchema);
