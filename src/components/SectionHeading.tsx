interface Props { eyebrow: string; title: string; description?: string; }
export function SectionHeading({ eyebrow, title, description }: Props) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
