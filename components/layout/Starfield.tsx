const STAR_COUNT = 80;

function starStyle(index: number) {
  const a = (index * 9301 + 49297) % 233280;
  const b = (a * (index + 7)) % 233280;
  const c = (b * (index + 13)) % 233280;
  const d = (c * (index + 19)) % 233280;
  const norm = (n: number) => n / 233280;
  const size = norm(a) > 0.9 ? 2 : 1;
  return {
    width: size,
    height: size,
    left: `${(norm(b) * 100).toFixed(2)}%`,
    top: `${(norm(c) * 100).toFixed(2)}%`,
    opacity: 0.2 + norm(d) * 0.6,
    animationDuration: `${2 + norm(a) * 4}s`,
  } as const;
}

export function Starfield() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.06),transparent_50%)]" />
      {Array.from({ length: STAR_COUNT }, (_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={starStyle(i)}
        />
      ))}
    </div>
  );
}
