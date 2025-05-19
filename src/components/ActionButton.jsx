import "../styles/ActionButton.css";

export default function ActionButton({ text, onClickFunction }) {
  return (
    <>
      <button className="action__button" onClick={() => onClickFunction()}>
        <i className="action__button__i"></i> {text}
      </button>
    </>
  );
}
