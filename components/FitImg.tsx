import type { ImgHTMLAttributes } from 'react';

// An <img> that can show the whole picture instead of cropping it.
// fit="contain": the photo is shown in full, with a soft blurred copy of itself filling the frame behind it.
type Props = ImgHTMLAttributes<HTMLImageElement> & { pos?: string; fit?: string; [key: `data-${string}`]: string | undefined };
export default function FitImg({ pos, fit, className, style, alt = '', ...rest }: Props) {
  const main = <img {...rest} alt={alt} className={[className, fit === 'contain' ? 'is-contain' : ''].filter(Boolean).join(' ') || undefined} style={{ objectPosition: pos, ...style }} />;
  if (fit !== 'contain') return main;
  return (<><img src={rest.src} alt="" aria-hidden="true" className="fit-bg" loading={rest.loading} decoding="async" />{main}</>);
}
