import mongoose from "mongoose";

const appSchema = new mongoose.Schema ({
    nome: { type: String, required},
    cpf: { type: Number, required},
    data: { type: Number, required}
})

export const application = mongoose.model('apps', appSchema);
