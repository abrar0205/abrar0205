import type { ProjectKind } from "../data/projects";
export function ProjectVisual({ kind }: { kind: ProjectKind }) {
  return <div className={`project-visual visual-${kind}`} aria-hidden="true">
    <div className="visual-header"><span>{kind === "ignition" ? "EVENTS → EVIDENCE" : kind === "enterprise" ? "QUESTION → SOURCE" : "SIGNALS → ALIGNMENT"}</span><span>DESIGN SKETCH</span></div>
    {kind === "ignition" ? <svg viewBox="0 0 500 300" fill="none">
      <path d="M55 56H445M55 115H445M55 174H445M55 233H445" stroke="currentColor" strokeOpacity=".14" />
      <g fontSize="10" fill="currentColor" opacity=".65" fontFamily="monospace"><text x="55" y="44">AUDIO</text><text x="55" y="103">FRAME</text><text x="55" y="162">NETWORK</text><text x="55" y="221">VEHICLE</text></g>
      <path d="M115 56h90m8 0h119M115 115h38m14 0h51m12 0h92m12 0h80M115 174h101m18 0h112M115 233h49m12 0h120m12 0h82" stroke="#bed6b2" strokeWidth="5" strokeLinecap="round" />
      <path d="M205 56H332" stroke="#ecc080" strokeWidth="5" strokeLinecap="round" />
      <path d="M205 35v221M332 35v221" stroke="#ecc080" strokeDasharray="4 5" strokeOpacity=".6" />
      <circle cx="205" cy="56" r="6" fill="#ecc080" /><circle cx="332" cy="56" r="6" fill="#ecc080" />
      <path d="M205 274v-8h127v8" stroke="#ecc080" />
      <text x="268" y="293" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#ecc080">FOLLOW THE DELAY</text>
    </svg> : kind === "enterprise" ? <svg viewBox="0 0 500 300" fill="none">
      <g stroke="#a6bacd" strokeWidth="1.2">
        <rect x="52" y="52" width="95" height="120" rx="6" fill="#273c50" /><rect x="67" y="67" width="95" height="120" rx="6" fill="#30485e" />
        <path d="M85 96h52M85 110h38M85 136h52M85 150h45M85 164h30" />
        <path d="M162 127h50q15 0 15 15v8h40M268 150h15q15 0 15-15V98h38M268 150h15q15 0 15 15v59h38" />
        <circle cx="246" cy="150" r="22" fill="#e0e6d5" stroke="none" /><path d="m238 150 6 6 11-13" stroke="#30485e" strokeWidth="2" />
        <rect x="336" y="64" width="114" height="72" rx="6" fill="#e0e6d5" stroke="none" />
        <rect x="336" y="190" width="114" height="63" rx="6" fill="#30485e" />
        <path d="M352 211h66M352 227h43" />
      </g>
      <g fontFamily="monospace" fontSize="11"><text x="352" y="91" fill="#30485e">ANSWER</text><text x="352" y="116" fill="#30485e">+ CITATIONS</text><text x="65" y="217" fill="#bdccd8">DOCUMENTS</text><text x="246" y="198" textAnchor="middle" fill="#bdccd8">ACCESS</text><text x="246" y="215" textAnchor="middle" fill="#bdccd8">FILTER</text></g>
    </svg> : <svg viewBox="0 0 500 300" fill="none">
      <path d="M55 75H445M55 150H445M55 225H445" stroke="#496451" strokeOpacity=".2" />
      <rect x="259" y="39" width="32" height="219" fill="#839a68" fillOpacity=".2" />
      <path d="M275 32v234" stroke="#375a43" strokeDasharray="4 5" />
      <path d="M55 75h21l5-11 7 24 8-30 9 37 9-27 6 7h36l8-14 8 29 8-39 8 41 9-22 7 5h47l6-18 9 35 9-45 9 46 9-26 8 8h37l8-11 7 25 8-31 8 31 8-19 7 5h24" stroke="#375a43" strokeWidth="2" strokeLinejoin="round" />
      <path d="M55 150h31l4-18 5 36 5-42 5 45 5-33 5 12h43l4-23 5 42 5-51 5 49 5-32 5 15h67l5-31 5 58 5-70 5 72 5-49 5 20h47l5-16 5 33 5-39 5 38 5-25 5 9h36" stroke="#788c4f" strokeWidth="2" />
      <path d="M55 225h49v-18h35v18h48v-18h35v18h35v-18h35v18h48v-18h35v18h70" stroke="#987c4f" strokeWidth="2" />
      <g fill="#375a43" fontSize="10" fontFamily="monospace"><text x="55" y="51">EEG</text><text x="55" y="126">AUDIO</text><text x="55" y="201">VIDEO</text><text x="275" y="286" textAnchor="middle">SHARED EVENT / SHARED CONTEXT</text></g>
    </svg>}
    <p>{kind === "ignition" ? "Replay. Inspect. Compare." : kind === "enterprise" ? "Retrieval you can follow." : "Keep the raw data. Inspect the correction."}</p>
  </div>;
}
