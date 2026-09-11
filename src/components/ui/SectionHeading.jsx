import { Reveal } from "./Reveal";

export function SectionHeading({ title, subtitle, className = "", headingId }) {
  return (
    <div className={`section-header text-center ${className}`}>
      {subtitle && (
        <Reveal y={10} delay={0.1}>
          <p className="section-subtitle">{subtitle}</p>
        </Reveal>
      )}
      <Reveal y={20} delay={0}>
        <h2 className="section-title" id={headingId}>{title}</h2>
      </Reveal>
    </div>
  );
}
