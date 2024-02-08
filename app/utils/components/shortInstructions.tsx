import "./style/shortInstructions.scss";

const ShortInstructions = () => {
  return (
    <>
      <article className="overview-wrapper">
        <h2 className="sub-header">Easy to use:</h2>
        <div className="overview-list-wrapper">
          <ul className="overview-list">
            <li className="list-card">Register or login</li>
            <li className="list-card">Create your invitations</li>
            <li className="list-card">Choose between of our templates</li>
            <li className="list-card">Choose what your invitations will say</li>
            <li className="list-card">Send invitations</li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default ShortInstructions;
