import { Api } from "../helpers/Api";

const resp = (response) => response.json();

const transform = (app) => {
  return {
    ...app,
    id: app._id,
  };
};

const transformList = (response) =>
  resp(response).then((app) => app.map(transform));

const transformItem = (response) => transform(response).then(transform);

export const service = {
  all: () => fetch(Api.allApps(), { method: "GET" }).then(transformList),

  create: (app) =>
    fetch(Api.createApp(), {
      method: "POST",
      body: JSON.stringify(app),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(resp),

  update: (id, app) =>
    fetch(Api.updateApp(id), {
      method: "PUT",
      body: JSON.stringify(app),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(resp),

  delete: (id) => fetch(Api.deleteApp(id), { method: "DELETE" }).then(resp)
};
