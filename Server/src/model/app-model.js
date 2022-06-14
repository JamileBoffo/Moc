import mongoose from "mongoose";

const appSchema = new mongoose.Schema ({
    nome: { type: String, required: true},
    cpf: { type: Number, required: true},
    data: { type: Number, required: true}
});

export const application = mongoose.model('apps', appSchema);
