export function Monogram({ className = "" }: { className?: string }) {
  return <svg className={className} width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
    <rect x=".75" y=".75" width="40.5" height="40.5" rx="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 29 16 12l8 17M11 23h10M25 29V14l5 9 5-9v15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}
