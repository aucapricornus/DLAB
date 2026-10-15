import { Router } from "express";
import { DevLanguagesController } from "./devLanguages.controller";

const router = Router();
const devLangaugesController = new DevLanguagesController();
router.get('/', devLangaugesController.findAll);
router.get('/:id', devLangaugesController.findById);
router.post('/', devLangaugesController.create);
router.put('/:id', devLangaugesController.update);
router.delete('/:id', devLangaugesController.delete);

export default router;