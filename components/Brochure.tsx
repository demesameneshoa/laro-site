import { brochure, company } from '@/lib/content';
import LogoMark from './Logo';
import { Download } from './Icons';

// Company overview download: a brochure mock-up beside the summary and download button.
export default function Brochure() {
  return (
    <div className="brochure">
      <div className="br-mock reveal" aria-hidden="true" data-cursor="PDF">
        <span className="br-page p3" /><span className="br-page p2" />
        <span className="br-cover">
          <LogoMark width={120} />
          <span className="br-t">Company<br />Overview</span>
          <span className="br-sub">{company.tagline}</span>
          <span className="br-year">{new Date().getFullYear()}</span>
        </span>
      </div>
      <div className="br-txt">
        <span className="eyebrow reveal">Download</span>
        <h2 className="h2 reveal">Company overview brochure</h2>
        <p className="lead reveal">Everything a procurement or communications team needs in one document, ready to share internally or attach to a supplier file.</p>
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
