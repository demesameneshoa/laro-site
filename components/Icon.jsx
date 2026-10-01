// Stroke icons (24×24, currentColor)
const P = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/>',
  whatsapp: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z"/><path d="M9.5 9.5c0 3 2 5 5 5l1-1.4-1.8-.9-.8.8c-.9-.4-1.6-1.1-2-2l.8-.8-.9-1.8z"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/>',
  clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  star: '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
  tag: '<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  sliders: '<path d="M4 6h10M4 12h16M4 18h7"/><circle cx="17" cy="6" r="2"/><circle cx="14" cy="18" r="2"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 20c0-2.5 1.2-4.4 3.5-4.4S22 17.5 22 20"/>',
  pen: '<path d="M5 19L17 7l2 2L7 21H5z"/><path d="M14 10l2 2"/>',
  bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  notebook: '<rect x="6" y="3" width="13" height="18"/><path d="M9 3v18"/>',
  bottle: '<path d="M10 2h4v3l2 3v13H8V8l2-3z"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  tote: '<path d="M5 9h14v12H5z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
  folder: '<path d="M3 6h7l2 2h9v12H3z"/>',
  key: '<circle cx="8" cy="8" r="4"/><path d="M11 11l8 8M16 16l2-2"/>',
  cork: '<rect x="5" y="3" width="14" height="18" rx="1"/><circle cx="12" cy="12" r="2.5"/>',
  cup: '<path d="M6 7h12l-1.5 14h-9z"/><path d="M5 4h14v3H5z"/>',
  desk: '<path d="M4 20h16M6 20V10h12v10M9 10V6h6v4"/>',
  gift: '<path d="M4 10h16v11H4zM3 7h18v3H3zM12 7v14"/><path d="M12 7c-2-4-6-3-5 0M12 7c2-4 6-3 5 0"/>',
  flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  carpet: '<path d="M4 20l6-16h4l6 16z"/><path d="M8 12h8"/>',
  print: '<path d="M7 9V3h10v6M7 17H4V9h16v8h-3"/><path d="M7 14h10v7H7z"/>',
  stage: '<path d="M3 20h18M5 20V9h14v11M9 9V5M15 9V5"/>',
  leaf: '<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19l8-8"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M5 5l14 14M19 5L5 19"/>',
};

export default function Icon({ name, size = 18 }) {
  if (name === 'shard') {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M0 3 L11 0 L8.5 13 L20 10 L18 20 L0 20 Z" fill="#00A14B" /></svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" dangerouslySetInnerHTML={{ __html: P[name] || P.check }} />
  );
}
