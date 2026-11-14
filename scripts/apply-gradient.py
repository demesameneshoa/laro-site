"""Apply the LARO brand gradient (white top-left -> green bottom-right) to site photos.

Originals live in assets/originals/<same path as under public/>. The script always
starts from the original, so it can be re-run safely (no double tinting).

  python3 scripts/apply-gradient.py            # all photo folders
  python3 scripts/apply-gradient.py work/x.jpg # one file (path under public/images)

Logos, client logos, team portraits and certificate scans are left untouched.
"""
import shutil, sys
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public' / 'images'
ORIG = ROOT / 'assets' / 'originals' / 'images'
GRADIENT = ROOT / 'assets' / 'brand-gradient.png'
FOLDERS = ['hero', 'work', 'services', 'brochure']
SKIP = {'work/esl-brand-identity.jpg', 'work/production-and-branding.jpg'}  # supplied with the gradient already applied
STRENGTH = 1.0  # 0 = no tint, 1 = full multiply

_g = Image.open(GRADIENT).convert('RGB')
w, h = _g.size
_g = _g.crop((60, 60, w - 60, h - 60))  # drop the rounded transparent corners

def tint(rel: str):
    if rel in SKIP: return
    src, dst = ORIG / rel, PUBLIC / rel
    if not src.exists():
        src.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(dst, src)  # first run: keep the original
    im = Image.open(src).convert('RGB')
    g = _g.resize(im.size, Image.BICUBIC)
    out = ImageChops.multiply(im, g)
    if STRENGTH < 1: out = Image.blend(im, out, STRENGTH)
    out.save(dst, quality=85, optimize=True, progressive=True)

if __name__ == '__main__':
    files = sys.argv[1:] or [str(p.relative_to(PUBLIC)) for f in FOLDERS for p in sorted((PUBLIC / f).glob('*.jpg'))]
    for rel in files: tint(rel)
    print(f'tinted {len(files)} images')
