export function HeroArtwork() {
  return <div className="hero-art" aria-hidden="true">
    <div className="art-topline"><span>FIELD NOTES / ENGINEERING</span><span>AM—01</span></div>
    <svg viewBox="0 0 440 380" fill="none" className="system-drawing">
      <defs><pattern id="paper-grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" stroke="#466657" strokeOpacity=".12" strokeWidth=".6" /></pattern></defs>
      <rect width="440" height="380" fill="url(#paper-grid)" />
      <circle cx="220" cy="190" r="132" stroke="#82958a" strokeWidth=".8" />
      <circle cx="220" cy="190" r="104" stroke="#82958a" strokeWidth=".8" strokeDasharray="3 7" />
      <path d="M32 190H408M220 25V355" stroke="#82958a" strokeWidth=".6" strokeDasharray="3 6" />
      <path d="M111 118 220 190 329 118M220 190v123" stroke="#214e3c" strokeWidth="1.5" />
      <path d="M111 118V72h218v46M329 118v153H111V118" stroke="#82958a" strokeWidth=".8" />
      <rect x="179" y="149" width="82" height="82" rx="20" fill="#214e3c" />
      <path d="m196 192 14-14-14-14m48 28-14-14 14-14m-27 46 8-45" transform="translate(0 12)" stroke="#eff2dd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="111" cy="118" r="11" fill="#f6f4eb" stroke="#214e3c" strokeWidth="2" />
      <circle cx="329" cy="118" r="11" fill="#f6f4eb" stroke="#214e3c" strokeWidth="2" />
      <circle cx="220" cy="313" r="11" fill="#d5dd9f" stroke="#214e3c" strokeWidth="2" />
      <rect x="53" y="83" width="116" height="22" rx="4" fill="#f6f4eb" />
      <rect x="278" y="83" width="102" height="22" rx="4" fill="#f6f4eb" />
      <rect x="160" y="336" width="120" height="22" rx="4" fill="#f6f4eb" />
      <g fill="#214e3c" fontFamily="monospace" fontSize="10" textAnchor="middle" letterSpacing="1.4">
        <text x="111" y="98">APPLICATIONS</text><text x="329" y="98">SERVICES</text><text x="220" y="351">DATA & SIGNALS</text>
      </g>
      <circle cx="88" cy="190" r="3" fill="#214e3c" /><circle cx="352" cy="190" r="3" fill="#214e3c" />
    </svg>
    <div className="art-caption"><span className="art-caption-title">Understand the connections.</span><span>Then build the system.</span></div>
    <span className="art-margin-note">BACKEND / AI / CONNECTED SYSTEMS</span>
  </div>;
}
