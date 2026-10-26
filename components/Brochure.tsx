import { brochure } from '@/lib/content';
import { Download } from './Icons';

// Company profile download: pages of the real PDF fanned out beside the summary and download button.
export default function Brochure() {
  return (
    <div className="brochure">
      <div className="br-mock slides reveal" aria-hidden="true" data-cursor="PDF">
        <img className="br-page p3" src={brochure.preview[2]} alt="" loading="lazy" />
        <img className="br-page p2" src={brochure.preview[1]} alt="" loading="lazy" />
        <img className="br-cover" src={brochure.preview[0]} alt="" loading="lazy" />
      </div>
      <div className="br-txt">
        <span className="eyebrow reveal">Download</span>
        <h2 className="h2 reveal">{brochure.title}</h2>
        <p className="lead reveal">Who we are, what we do and how we work, in one document ready to share internally or attach to a supplier file.</p>
        <ul className="br-list reveal">{brochure.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <div className="br-cta reveal">
          <a className="go-btn" href={brochure.file} download>
            <span>Download PDF</span><Download size={18} />
          </a>
          <span className="br-meta">PDF · {brochure.pages} pages · {brochure.size}</span>
        </div>
      </div>
    </div>
  );
}
