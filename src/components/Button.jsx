export const Button = ({ buttonType, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {label}
    </button>
  );
};
