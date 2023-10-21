import { Router } from "express";
import { createForm, getForm } from "../controllers/adminController.js";

const router = Router();

router.post('/create', createForm);
router.get('/get/:formId', getForm);

export default router;