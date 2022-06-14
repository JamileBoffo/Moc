import "./appList.css";
import { appService } from "../../services/appService";
import { useState, useCallback, useEffect } from "react";
import { appItem } from "../appItem/appItem";
import { ActionMode } from "../../constants";

function appList({
  appCreated,
  mode,
  appUpdated,
  appDeleted,
  appEdit,
  appRemove,
}) {
  const select = JSON.parse(localStorage.getItem("select")) ?? {};

  const [app, setApp] = useState([]);
  const [appselect, setAppSelect] = useState(select);
  const [modal, setModal] = useState(false);

  const getList = async () => {
    const response = await appService.all();
    setApp(response);
  };

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
            <appItem
                mode={mode}
                key={`appItem-${index}`}
                app={app}
                index={index}
                clickItem={(id) => getAppById(id)}
            />
        ))}
    </div>
  );
}

export default appList;
