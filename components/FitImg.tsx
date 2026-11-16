import type { ImgHTMLAttributes } from 'react';

// An <img> that can show the whole picture instead of cropping it.
// fit="contain": the photo is shown in full (no blur); its frame gets the brand gradient behind it
// (see `:has(> img.is-contain)` in globals.css), which matches the gradient already on the photos.
type Props = ImgHTMLAttributes<HTMLImageElement> & { pos?: string; fit?: string; [key: `data-${string}`]: string | undefined };
export default function FitImg({ pos, fit, className, style, alt = '', ...rest }: Props) {
  const cls = [className, fit === 'contain' ? 'is-contain' : ''].filter(Boolean).join(' ') || undefined;
  return <img {...rest} alt={alt} className={cls} style={{ objectPosition: pos, ...style }} />;
}
