function TimelineItem({ title, details, description }) {
  return (
    <article className="resume-item">
      <span className="item-arrow" />
      <h5 className="item-title">{title}</h5>
      <span className="item-details">{details}</span>
      <p className="item-description">{description}</p>
    </article>
  )
}

export default TimelineItem
