const AppContext = {
    endpoint: () => `${Api.baseUrl}/application`,
    allApps: () => `${AppContext.endpoint()}/apps`,
    createApp: () => `${AppContext.endpoint()}/registration`,
    updateApp: (id) => `${AppContext.endpoint()}/update/${id}`,
    deleteApp: (id) => `${AppContext.endpoint()}/delete/${id}`,
}

export const Api = {
    baseUrl: "",
    ...AppContext
}
