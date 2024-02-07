import { PacmanLoader } from "react-spinners";
import "./style/loading.scss";

const Loading = () => {
  return (
    <div className="loader-container">
      <PacmanLoader
        color="orange"
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={2}
      />
    </div>
  );
};
export default Loading;
