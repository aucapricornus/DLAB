import { Router } from "express";
import { ToolController } from "./tool.controller";

const router = Router();
const toolController = new ToolController();
router.get('/', toolController.findAll);
router.get('/:id', toolController.findById);
router.post('/', toolController.create);
router.put('/:id', toolController.update);
router.delete('/:id', toolController.delete);

export default router;
