import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
  {
    tareas: {
      type: String,
      required: true, 
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;
