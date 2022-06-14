import "./navbar.css";
import logo from "../../assets/icon/mocx-logo.png";
import { ActionMode } from "../../constants";

function navbar({ mode, createApp, updateApp, deleteApp }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="40px"
            className="Logo__icone"
            alt="logo Mocx"
          />
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__app App ${
              mode === ActionMode.UPDATE && "App--active"
            }`}
            onClick={() => updateApp()}
          >
            Atualizar
          </button>
          <button
            type="button"
            className={`Opcoes__app App ${
              mode === ActionMode.DELETE && "App--delete"
            }`}
            onClick={() => deleteApp()}
          >
            Deletar
          </button>
          <button
            type="button"
            className="Opcoes__app App"
            onClick={() => createApp()}
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}

export default navbar;
