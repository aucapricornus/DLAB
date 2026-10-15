import { Router } from "express";
import { SoftSkillController } from "./softskill.controller";

const router = Router();
const softSkillController = new SoftSkillController();
router.get('/', softSkillController.findAll);
router.get('/:id', softSkillController.findById);
router.post('/', softSkillController.create);
router.put('/:id', softSkillController.update);
router.delete('/:id', softSkillController.delete);

export default router;