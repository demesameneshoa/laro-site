import { GoBtn } from '@/components/Blocks';
export default function NotFound() {
  return (
    <section className="phero sec">
      <div className="container ph-grid">
        <div className="sh-l"><span className="eyebrow">404</span><h1 className="ph-title letters">Page not found</h1></div>
        <div className="ph-side"><p className="lead">The page you are looking for has moved or no longer exists.</p><GoBtn href="/">Back to home</GoBtn></div>
      </div>
    </section>
  );
}
