import { Router } from "express";
import { prueba, crearTarea, listarTarea, obtenerTareaID, borrarTareaID, editarTareaID } from "../controllers/tarea.controllers.js"


const router = Router();

router.route("/").post(crearTarea).get(listarTarea)
router.route('/:id').get(obtenerTareaID).delete(borrarTareaID).put(editarTareaID)

export default router;
