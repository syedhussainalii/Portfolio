
function TechStack({ items }) {
  return (
    <ul className="hero-tech-stack list-unstyled" aria-label="Technology stack">
      {items.map((item) => (
        <li key={item} className="hero-tech-stack-item">
          {item}
        </li>
      ))}
    </ul>
  )
} 
export default TechStack
