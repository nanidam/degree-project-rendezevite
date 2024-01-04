import { TemplateGeometricDesignProps } from "../models/ITemplateGeometricDesign";
import "./style/templateGeoDesign.scss";

const TemplateGeometricDesign: React.FC<TemplateGeometricDesignProps> = ({
  header,
  text,
}) => {
  return (
    <section className="template-bg">
      <h1 className="template-header">{header}</h1>
      <article className="template-text-container">
        <p className="template-text">{text}</p>
      </article>
    </section>
  );
};

export default TemplateGeometricDesign;
