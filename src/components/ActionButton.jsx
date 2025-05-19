import "../styles/ActionButton.css";

export default function ActioButton({ text, onClickFunction }) {
  return (
    <>
      <button className="action__button" onClick={() => onClickFunction()}>
        <i className="action__button__i"></i> Añadir al carrito
      </button>
    </>
  );
}
