import appSchema from   '../model/app-model.js';

export const allAppService = async () => {
    const app = await appSchema.find();
    return app;
}

export const createAppService = async (newApp) => {
    const createdApp = await appSchema.create(newApp);
    return createdApp;
}

export const updateAppService = async (id, appEdited) => {
    const appUpdate = await appSchema.findByIdAndUpdate(id, appEdited);
    return appUpdate;
}

export const deleteAppService = async (id) => {
    return await appSchema.findByIdAndDelete(id);
}
