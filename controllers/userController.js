import { formModel } from "../models/formModel.js";

export async function submitForm(req, res) {
    try {
        const form = await formModel.findById(req.params.formId);
        if (!form) {
          return res.status(404).send({ error: 'Form not found' });
        }
        return res.status(200).send(form);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error retrieving the form' });
      }
};