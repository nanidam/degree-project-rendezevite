import "./style/returnBtn.scss";
const ReturnBtn = () => {
  return (
    <button
      className="about-btn-return"
      type="button"
      onClick={() => window.history.back()}
    >
      Return
    </button>
  );
};

export default ReturnBtn;
