import { Monogram } from "./Monogram";
export function Footer() {
  return <footer className="site-footer section-shell"><div><Monogram /><p>© {new Date().getFullYear()} Abrar Assan Mohamed<br /><span>Thoughtful software. Clear evidence.</span></p></div><a href="#top">Back to top ↑</a></footer>;
}
