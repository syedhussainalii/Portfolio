function ServiceCard({ iconClass, title, description }) {
  return (
    <article className="single-service">
      <div className="service-icon-wrapper">
        <i className={`icon service-icon ${iconClass}`} />
      </div>

      <div className="service-content">
        <h6 className="service-title">{title}</h6>
        <p className="service-description">{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;