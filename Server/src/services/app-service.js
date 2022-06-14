import {application} from '../model/app-model.js';


export const allAppService = async () => {
    const app = await application.find();
    return app;
}

export const createAppService = async (newApp) => {
    const createdApp = await application.create(newApp)
    return createdApp;
}

export const updateAppService = async (id, appEdited) => {
    const appUpdate = await application.findByIdAndUpdate(id, appEdited);
    return appUpdate;
}

export const deleteAppService = async (id) => {
    return await application.findByIdAndDelete(id);
}
