import modal from "../modal/modal";
import './AddOrUpdateModal.css'
import { useState, useEffect } from "react";
import { service } from "../../services/appService";
import { ActionMode } from "../../constants/index";

function AddOrUpdateModal({
  closeModal,
  onCreateApp,
  mode,
  appToUpdate,
  onUpdateApp,
}) {
  const form = {
    nome: appToUpdate?.nome ?? "",
    cpf: appToUpdate?.cpf ?? "",
    data: appToUpdate?.data ?? "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(false);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.nome.length && String(state.cpf).length && String(state.data).length
    );
    setCanDisable(response);
  };

  const handleChange = (e, nome) => {
    setState({ ...state, [nome]: e.target.value });
  };

  const handleSend = async () => {
    const { nome, cpf, data } = state;

    const app = {
      ...(appToUpdate && { _id: appToUpdate?.id }),
      nome,
      cpf,
      data,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => service.create(app),
      [ActionMode.UPDATE]: () => service.update(appToUpdate?.id, app),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateApp(response),
      [ActionMode.UPDATE]: () => onUpdateApp(response),
    };

    actionResponse[mode]();

    const reset = {
      nome: "",
      cpf: "",
      data: "",
    };

    setState(reset);

    closeModal();
  };

  useEffect(() => {
    canDisableSendButton();
  });

  return (
    <modal closeModal={closeModal}>
      <div className="addAppModal">
        <form autoComplete="off">
          <h2>
            {" "}
            {ActionMode.UPDATE === mode ? "Atualizar" : "Criar"} {""}{" "}
          </h2>
          <div>
            <label className="addAppModal__text" htmlFor="nome">
              {" "}
              Nome:{" "}
            </label>
            <input
              id="nome"
              placeholder="João"
              type="text"
              value={state.nome}
              required
              onChenge={(e) => handleChange(e, "nome")}
            />
          </div>
          <div>
            <label className="addAppModal__text" htmlFor="cpf">
              {" "}
              Nome:{" "}
            </label>
            <input
              id="cpf"
              placeholder="11111111111"
              type="text"
              value={state.cpf}
              required
              onChenge={(e) => handleChange(e, "cpf")}
            />
          </div>
          <div>
            <label className="addAppModal__text" htmlFor="cpf">
              {" "}
              Nome:{" "}
            </label>
            <input
              id="data"
              placeholder="10102010"
              type="text"
              value={state.data}
              required
              onChenge={(e) => handleChange(e, "data")}
            />
          </div>
          <button
            className="addAppModal__send"
            type="submit"
            disabled={canDisable}
            onClick={handleSend}
          >
            {ActionMode.NORMAL === mode ? "Criar" : "Atualizar"}
          </button>
        </form>
      </div>
    </modal>
  );
}

export default AddOrUpdateModal;
