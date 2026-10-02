import { logoLetters } from '@/lib/content';

// The LARO letterforms as inline SVG (traced from the logo). `draw` animates the strokes.
export default function LogoMark({ width = 160, draw = false, light = true, className = '' }: { width?: number; draw?: boolean; light?: boolean; className?: string }) {
  return (
    <svg className={`logo-mark${draw ? ' draw' : ''} ${className}`} width={width} height={Math.round((width * 215) / 468)} viewBox="-2 -2 468 215" role="img" aria-label="LARO">
      {logoLetters.map((l, i) => (
        <path key={i} d={l.d} pathLength={1} style={{ ['--i' as string]: i }} className={l.c === 'g' ? 'lg' : light ? 'lw' : 'lk'} />
      ))}
    </svg>
  );
}
