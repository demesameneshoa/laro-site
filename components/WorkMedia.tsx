import type { Media } from '@/lib/content';
import FitImg from './FitImg';

// A project picture, or a muted looping clip when the item has a video.
export default function WorkMedia({ m, alt, controls = false, eager = false }: { m: Media; alt: string; controls?: boolean; eager?: boolean }) {
  if (m.video) {
    return (
      <video src={m.video} poster={m.src} muted loop playsInline autoPlay={!controls} controls={controls} preload="metadata"
        aria-label={alt} style={{ objectPosition: m.pos }} />
    );
  }
  return <FitImg src={m.src} alt={alt} loading={eager ? 'eager' : 'lazy'} pos={m.pos} fit={m.fit} />;
}
