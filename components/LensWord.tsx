// Giant word with a short line either side (e.g. "SECTORS").
// `image` is kept for compatibility; the lens graphic that sat inside the O has been removed.
export default function LensWord({ word, left, right }: { word: string; left: string; right: string; image?: string }) {
  return (
    <div className="lens-word">
      <span className="lw-side l">{left}</span>
      <p className="lw-big">{word}</p>
      <span className="lw-side r">{right}</span>
    </div>
  );
}
