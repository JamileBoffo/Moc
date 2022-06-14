import {
  allAppService,
  createAppService,
  updateAppService,
  deleteAppService,
} from '../services/app-service.js';

export const allAppController = async (req, res) => {
  const app = await allAppService();

  if (app.length == 0) {
    return res.status(404).send({
      message: 'Não existe nenhum app cadastrado',
    });
  }
  res.send(app);
};

export const createAppController = async (req, res, TestaCPF) => {
  const app = req.body;

  const newApp = await createAppService(app);
  res.status(201).send(newApp);
};

export const updateAppController = async (req, res) => {
  const idParam = req.params.id;
  const appUpdated = req.body;

  if (!appUpdated || !appUpdated.nome || !appUpdated.data) {
    res.status(400).send({
      message: 'Os campos não foram devidamente preenchidos!',
    });
  }

  const updated = await updateAppService(idParam, appUpdated);
  res.send(updated);
};

export const deleteAppController = async (req, res) => {
  const idParam = req.params.id;

  await deleteAppService(idParam);
  res.send({
    message: 'Deletado com sucesso!',
  });
};
