interface Props { eyebrow: string; title: string; description?: string; id?: string; }
export function SectionHeading({ eyebrow, title, description, id }: Props) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
