import { allAppService, createAppService, updateAppService, deleteAppService } from '../services/app-service.js';

export const allAppController = async (req, res) => {
    const app = await allAppService();
    res.send(app);
}

export const createAppController = async (req, res) => {
    const app = req.body;
    const newApp = await createAppService(app);
    res.send(newApp, {
        message: 'Cadastro realizado com sucesso'
    });
}

export const updateAppController = async (req, res) => {
    const idParam = req.params.id;
    const appUpdated = req.body;

    const updated = await updateAppService(idParam, appUpdated);
    res.send(updated, {
        message: 'Alterado com sucesso!'
    })
}

export const deleteAppController = async (req, res) => {
    const idParam = req. params.id;

    await deleteAppService(idParam);
    res.send({
        message: 'Deletado com sucesso!'
    })
}
