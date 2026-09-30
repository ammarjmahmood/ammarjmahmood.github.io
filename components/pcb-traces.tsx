// Decorative board traces echoing the PCB business card. Purely visual.
export function PcbTraces() {
    const traces = [
        'M600 40 H470 L440 70 H330',
        'M600 58 H478 L448 88 H360',
        'M600 76 H486 L456 106 H390',
        'M600 170 H520 L490 200 H410 V240',
        'M600 188 H528 L498 218 H440 V260',
        'M600 206 H536 L506 236 H470 V280',
        'M600 262 H560 L540 282 H300',
        'M600 280 H568 L556 292 H250',
        'M250 0 V24 L270 44 H360',
        'M280 0 V14 L296 30 H390',
    ];
    const pads = [
        [330, 70], [360, 88], [390, 106], [410, 240], [440, 260], [470, 280], [360, 44], [390, 30],
    ];

    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 600 300"
            preserveAspectRatio="xMaxYMid slice"
            className="pointer-events-none absolute inset-0 h-full w-full text-emerald-600/25 [mask-image:linear-gradient(to_bottom,black,transparent_45%)] sm:[mask-image:none] dark:text-emerald-400/15"
        >
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {traces.map((d) => (
                    <path key={d} d={d} />
                ))}
            </g>
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                {pads.map(([x, y]) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" />
                ))}
            </g>
        </svg>
    );
}
