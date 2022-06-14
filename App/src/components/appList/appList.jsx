import "./AppList.css";
import { service } from "../../services/appService";
import { useState, useCallback, useEffect } from "react";
import { AppItem } from "../AppItem/AppItem";
import { ActionMode } from "../../constants";

function AppList({
  appCreated,
  mode,
  appUpdated,
  appDeleted,
}) {
  const [app, setApp] = useState([])
  const [modal, setModal] = useState(false);

  const getList = async () => {
    const response = await service.all();
    setApp(response);
  };

  const getById = async (id) => {
    const response = await service.getById(id);
    const mapper = {
      [ActionMode.NORMAL]: () => setModal(response),
      [ActionMode.UPDATE]: () => appUpdated(response),
      [ActionMode.DELETE]: () => appDeleted(response),
    };
    mapper[mode]();
  }

  const createList = useCallback(
    (app) => {
      const list = [...app, app];
      setApp(list);
    },
    [app]
  );

  useEffect(() => {
    if (appCreated && !app.map(({ id }) => id).includes(appCreated.id)) {
      createList(appCreated);
    }
  }, [createList, appCreated, app]);

  useEffect(() => {
    getList();
  }, [appUpdated, appDeleted]);

  return (
    <div className="appList">
        {app.map((app,index) => (
            <AppItem
                mode={mode}
                key={`appItem-${index}`}
                app={app}
                index={index}
                clickItem={(id) => getById(id)}
            />
        ))}
    </div>
  );
}

export default AppList;
