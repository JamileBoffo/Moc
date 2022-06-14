import overlay from "../overlay/overlay";
import "./modal.css";

function modal({ children, closeModal }) {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };

  return (
    <overlay>
      <div className="Modal" onClick={handleClick}>
        <span className="close__Modal" onClick={(e) => handleClick(e, true)}>
          +
        </span>
        <div className="body__Modal">{children}</div>
      </div>
    </overlay>
  );
}

export default modal;
