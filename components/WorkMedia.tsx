import type { WorkItem } from '@/lib/content';

// A portfolio item's picture, or a muted looping clip when the item has a video.
export default function WorkMedia({ w, controls = false }: { w: WorkItem; controls?: boolean }) {
  const alt = w.client ? `${w.title} for ${w.client}` : w.title;
  if (w.video) {
    return (
      <video src={w.video} poster={w.image} muted loop playsInline autoPlay={!controls} controls={controls} preload="metadata"
        aria-label={alt} style={{ objectPosition: w.pos }} />
    );
  }
  return <img src={w.image} alt={alt} loading="lazy" style={{ objectPosition: w.pos }} />;
}
