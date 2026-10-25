import type { Media } from '@/lib/content';

// A project picture, or a muted looping clip when the item has a video.
export default function WorkMedia({ m, alt, controls = false, eager = false }: { m: Media; alt: string; controls?: boolean; eager?: boolean }) {
  if (m.video) {
    return (
      <video src={m.video} poster={m.src} muted loop playsInline autoPlay={!controls} controls={controls} preload="metadata"
        aria-label={alt} style={{ objectPosition: m.pos }} />
    );
  }
  return <img src={m.src} alt={alt} loading={eager ? 'eager' : 'lazy'} style={{ objectPosition: m.pos }} />;
}
