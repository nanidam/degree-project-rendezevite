import "./style/returnBtn.scss";
const ReturnBtn = () => {
  return (
    <button
      className="about-btn-return"
      type="button"
      aria-label="Return to the previous page"
      onClick={() => window.history.back()}
    >
      Return
    </button>
  );
};

export default ReturnBtn;
