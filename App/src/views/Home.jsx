import "./Home.css";
import AppList from "../components/AppList/AppList";
import navbar from "../components/navbar/navbar";
import AddOrUpdateModal from "../components/AddOrUpdateModal/AddOrUpdateModal";
import deleteModal from "../components/deleteModal/deleteModal";
import { useState } from "react";
import { ActionMode } from "../constants";

export function Home() {
  const [canShowAddAppModal, setCanShowAddAppModal] = useState(false);

  const [appToAdd, setAppToAdd] = useState();

  const [modeAt, setModeAt] = useState(ActionMode.NORMAL);

  const [appToEdit, setAppToEdit] = useState();

  const [appToDelete, setAppToDelete] = useState();

  const [appEdited, serAppEdited] = useState();

  const [appRemove, setAppRemove] = useState();

  const handleActions = (action) => {
    const newAct = modeAt === action ? ActionMode.NORMAL : action;
    setModeAt(newAct);
  };

  const handleDeleteApp = (appToDelete) => {
    setAppToDelete(appToDelete);
  };

  const handleUpdateApp = (appToEdit) => {
    setAppToEdit(appToEdit);
    setCanShowAddAppModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAddAppModal(false);
    setAppToAdd();
    setAppToDelete();
    setAppToEdit();
    setModeAt(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <navbar
        mode={modeAt}
        createApp={() => setCanShowAddAppModal(true)}
        deleteApp={() => handleActions(ActionMode.DELETE)}
        updateApp={() => handleActions(ActionMode.UPDATE)}
      >
        <div className="Home__container">
          <AppList
            mode={modeAt}
            appCreated={appToAdd}
            appUpdated={appToEdit}
            appDeleted={handleDeleteApp}
          />
          {canShowAddAppModal && (
            <AddOrUpdateModal
              mode={modeAt}
              appToUpdate={appToEdit}
              onUpdateApp={(app) => setAppToEdit(app)}
              closeModal={handleCloseModal}
              onCreateApp={(app) => setAppToAdd(app)}
            />
          )}
          {appToDelete && (
            <deleteModal
              appTodelete={appToDelete}
              closeModal={handleCloseModal}
              onDeleteApp={(app) => setAppRemove(app)}
            />
          )}
        </div>
      </navbar>
    </div>
  );
}
