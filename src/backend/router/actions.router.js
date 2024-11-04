import { Router } from "express";
import { getSubjectById, createSubject, deleteSubjectInfoById, updateSubjectInfoById } from './../controllers/actions.controller.js';


const router = Router();

router.get('/subject/:id', getSubjectById);
router.post('/subject', createSubject);
router.put('/subject/:id', updateSubjectInfoById);
router.delete('/subject/:id', deleteSubjectInfoById);

export default router;