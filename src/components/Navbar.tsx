import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon } from "./icons";

const navLinks = [
  { label: "Work", href: "#featured" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const current = navLinks.filter(link => {
        const section = document.getElementById(link.href.slice(1));
        return section && section.getBoundingClientRect().top <= 160;
      }).slice(-1)[0];
      setActive(current?.href ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const links = navLinks.map(link => (
    <li key={link.href}><a href={link.href} onClick={() => setOpen(false)} aria-current={active === link.href ? "location" : undefined}>{link.label}</a></li>
  ));

  return (
    <header className="site-header" ref={header}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)} aria-label="Abrar, back to top">abrar<span>.</span></a>
        <ul className="desktop-nav">{links}</ul>
        <a href="#contact" className="nav-contact">Let’s connect <ArrowUpRightIcon className="h-4 w-4" /></a>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(value => !value)}>
          {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
      </nav>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation"><ul>{links}<li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li></ul></nav>}
    </header>
  );
}
