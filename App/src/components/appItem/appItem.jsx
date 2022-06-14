import "./appItem.css";
import { ActionMode } from "../../constants";

export function appItem({ app, index, remove, add, clickItem, mode }) {
  const removeButtom = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Action__remove"
        onClick={(e) => {
          e.stopPropagation();
          remove(index);
        }}
      >
        Remover
      </button>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`appItem__tag ${
            mode === ActionMode.DELETE && "appItem__tag--delete"
          }`}
        >
          {" "}
          {mode}{" "}
        </span>
      );
  };

  return (
    <div
      className={`appItem ${mode !== ActionMode.NORMAL && "appItem--disable"}
        ${mode === ActionMode.DELETE && "appItem--delete"}`}
      key={`appItem-${index}`}
      onClick={() => clickItem(app.id)}
    >
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="appItem__nome">{app.nome}</div>
        <div className="appItem__cpf">{app.cpf}</div>
        <div className="appItem__data">{app.data}</div>
      </div>
      <img
        className="appItem__img"
        src="../../assets/icon/user.png"
        alt="image-user"
      />
    </div>
  );
}
