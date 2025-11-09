import Tarea from "../models/tarea.js";

export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");
  res.send("Prueba desde el controlador");
};

export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();

    res.status(201).json({
      mensaje: "Tarea creada correctamente",
      tarea: nuevaTarea,
    });
  } catch (error) {
    console.error("Error al crear tarea:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al crear la tarea",
      error: error.message,
    });
  }
};

export const listarTarea = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error("Error al crear tarea:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al listar las tareas",
      error: error.message,
    });
  }
};

export const obtenerTareaID = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "No se encontro la tarea" });
    }

    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error("Error al crear tarea:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al listar las tareas",
      error: error.message,
    });
  }
};

export const borrarTareaID = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "No se encontro la tarea" });
    }

    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "La tarea fue eliminada correctamente" });
  } catch (error) {
    console.error("Error al borrar tarea:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error no se pudo borrar la tarea",
      error: error.message,
    });
  }
};

export const editarTareaID = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "No se encontro la tarea" });
    }

    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "La tarea fue editado correctamente" });
  } catch (error) {
    console.error("Error al borrar tarea:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error no se pudo borrar la tarea",
      error: error.message,
    });
  }
};
