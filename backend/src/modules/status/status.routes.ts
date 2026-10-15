import { Router } from "express";
import { StatusController } from "./status.controller";

const router = Router();
const statusController = new StatusController();
router.get('/', statusController.findAll);
router.get('/:id', statusController.findById);
router.post('/', statusController.create);
router.put('/:id', statusController.update);
router.delete('/:id', statusController.delete);

export default router;