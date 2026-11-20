import type { ProjectKind } from "../data/projects";

type NewKind = Extract<ProjectKind, "fittrace" | "peopleops" | "shifttwin">;

/** Original vector illustrations: schematic representations, not screenshots or measured data. */
export function NewProjectVisual({ kind }: { kind: NewKind }) {
  const labels = {
    fittrace: ["IMAGE → MEASUREMENT → EVIDENCE", "Trace a deviation, not a guess."],
    peopleops: ["QUALITY GATE → TRUSTED METRICS", "Every useful number has a source."],
    shifttwin: ["SCENARIO → SIMULATION → PLAN", "Coverage is a question, not a headcount."],
  } as const;
  return <div className={"project-visual visual-" + kind} aria-hidden="true">
    <div className="visual-header"><span>{labels[kind][0]}</span><span>CONCEPT DIAGRAM</span></div>
    {kind === "fittrace" ? <svg viewBox="0 0 500 300" fill="none">
      <defs><pattern id="fit-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" stroke="#9cbebb" strokeWidth=".5" opacity=".18" /></pattern></defs>
      <rect x="28" y="24" width="444" height="248" fill="url(#fit-grid)" stroke="#8caca8" strokeOpacity=".38" />
      <path d="M57 238V82Q58 64 78 62L226 66V239Z" fill="#386368" stroke="#b0d9d3" strokeWidth="1.8" />
      <path d="M267 66 422 61Q442 64 442 83V238H267Z" fill="#294f55" stroke="#b0d9d3" strokeWidth="1.8" />
      <path d="M226 66V239M267 66V239" stroke="#e3eee4" strokeWidth="1" strokeDasharray="5 6" opacity=".55" />
      <path d="M226 150H267M226 141v18m41-18v18" stroke="#cceca4" strokeWidth="2" />
      <path className="visual-line-draw" d="M247 64V239" stroke="#a3d9cf" strokeOpacity=".8" strokeWidth="1.2" />
      <g fill="#d1e8e0"><circle cx="226" cy="105" r="3" /><circle cx="267" cy="105" r="3" /><circle cx="226" cy="199" r="3" /><circle cx="267" cy="199" r="3" /></g>
      <rect x="183" y="19" width="134" height="28" rx="3" fill="#dceac3" />
      <text x="250" y="37" textAnchor="middle" fontSize="12" fontFamily="monospace" fill="#203f42">GAP / mm</text>
      <path d="M247 48V64" stroke="#dceac3" strokeDasharray="3 3" />
      <text x="50" y="287" fontSize="10" fill="#b4d8cb" fontFamily="monospace">PANEL A</text>
      <text x="448" y="287" textAnchor="end" fontSize="10" fill="#b4d8cb" fontFamily="monospace">PANEL B</text>
    </svg> : kind === "peopleops" ? <svg viewBox="0 0 500 300" fill="none">
      <rect x="34" y="26" width="432" height="248" rx="8" fill="#1c302a" stroke="#9fba9c" strokeOpacity=".45" />
      <path d="M34 67H466M283 67V274" stroke="#91ab91" strokeOpacity=".35" />
      <g fontFamily="monospace" fontSize="10" fill="#cbdccc"><text x="57" y="52">TRUSTED WORKFORCE VIEW</text><text x="305" y="91">SHIFT SIGNAL</text><text x="57" y="96">TEAMS / COVERAGE</text></g>
      <g fill="#9cbd9b">
        {Array.from({length: 7}, (_, row) => Array.from({length: 8}, (_, col) => <circle key={row + "-" + col} cx={60 + col * 26} cy={120 + row * 19} r="4.4" opacity={row === 4 && col > 3 ? .3 : .85} />))}
      </g>
      <rect x="49" y="186" width="225" height="20" rx="3" fill="#d5eab5" fillOpacity=".12" stroke="#d5eab5" strokeOpacity=".4" />
      <path d="M303 226l21-21 23 6 18-42 25 11 28-46 25 9" stroke="#cfe5aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M303 245H445M303 114H445" stroke="#90ad91" opacity=".3" />
      <circle className="visual-pulse" cx="418" cy="134" r="6" fill="#d5eab5" />
      <text x="305" y="263" fill="#b1c7b3" fontSize="9" fontFamily="monospace">VALIDATED AGGREGATES</text>
    </svg> : <svg viewBox="0 0 500 300" fill="none">
      <rect x="30" y="26" width="440" height="248" rx="5" fill="#dfe6d6" stroke="#a5b8a0" />
      <g stroke="#a4b6a0" strokeWidth="1"><path d="M60 69H441M60 142H441M60 216H441" strokeDasharray="4 5" /><path d="M160 48V248M282 48V248M404 48V248" strokeDasharray="4 5" /></g>
      <g fontFamily="monospace" fontSize="10" fill="#46674e"><text x="60" y="55">QUALIFIED</text><text x="61" y="132">STATION COVERAGE</text><text x="60" y="258">SIMULATED SHIFT / NOT LIVE OPERATIONS</text></g>
      <g fill="#436953">{Array.from({length: 6},(_,i)=><circle key={i} cx={87+i*58} cy="94" r="13" fill={i===4 ? "#c58b42" : "#436953"} />)}</g>
      <g stroke="#789779" strokeWidth="1.6"><path d="M87 108V164M145 108V164M203 108V164M261 108V164M319 108V164M377 108V164" /></g>
      <g fill="#f8f8ed" stroke="#54745a" strokeWidth="1.4">{Array.from({length: 6},(_,i)=><rect key={i} x={73+i*58} y="164" width="28" height="30" rx="3" />)}</g>
      <rect x="303" y="164" width="32" height="30" fill="#eec78c" stroke="#9d6f32" strokeWidth="1.6" />
      <g stroke="#54745a" strokeWidth="1.4"><path d="M87 195v20h290v-20" /><path d="m369 208 8 7-8 7" /></g>
      <circle className="visual-pulse" cx="319" cy="180" r="18" stroke="#bf843b" strokeWidth="2" />
    </svg>}
    <p>{labels[kind][1]}</p>
  </div>;
}
