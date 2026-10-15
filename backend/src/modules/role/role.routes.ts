import { Router } from "express";
import { RoleController } from "./role.controller";

const router = Router();
const roleController = new RoleController();
router.get('/', roleController.findAll);
router.get('/:id', roleController.findById);
router.post('/', roleController.create);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.delete);

export default router;