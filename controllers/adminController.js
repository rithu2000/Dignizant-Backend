import { formModel } from "../models/formModel.js";
import { formSubmissionModel } from "../models/formSubmissionModel.js";

export async function createForm(req, res) {
    try {
        const data = await formModel.find({});
        return res.status(200).send(data)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message })
    }
};

export async function getForm(req, res) {
    try {
        const form = await formModel.findById(req.params.formId);
        if (!form) {
            return res.status(404).send({ error: 'Form not found' });
        }
        const formSubmission = new formSubmissionModel({
            formId: form._id,
            responses: req.body.responses,
        });
        const submittedForm = await formSubmission.save();
        res.status(200).send(submittedForm);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error submitting the form' });
    }
};