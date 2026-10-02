import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="phero"><div className="container inner"><span className="eyebrow">404</span><h1 className="display h1">Page not found.</h1><p className="lead">The page you are looking for has moved or no longer exists.</p><div><Link className="btn btn-primary" href="/">Back to home</Link></div></div></section>
  );
}
