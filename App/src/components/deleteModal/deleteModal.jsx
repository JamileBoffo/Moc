import modal from "../modal/modal";
import './deleteModal.css'
import { service } from "../../services/appService";

function deleteModal({ closeModal, appToDelete, onDeleteApp }) {
  const handleDelete = async (app) => {
    await service.delete(app.id);
    onDeleteApp(app);
    closeModal();
  };

  return (
    <modal closeModal={closeModal}>
      <div className="deleteAppModal">
        <h2>Tem certeza disso?</h2>
        <p>
          Você realmente deseja excluir <b>{appToDelete.nome}</b> do aplicativo?
        </p>
        <br />
        <div>
          <button
            onClick={() => handleDelete(appToDelete)}
            className="deleteAppModal__confirm"
          >
            Sim
          </button>
          <button
            onClick={() => handleDelete(closeModal)}
            className="deleteAppModal__cancel"
          >
            Não
          </button>
        </div>
      </div>
    </modal>
  );
}

export default deleteModal;