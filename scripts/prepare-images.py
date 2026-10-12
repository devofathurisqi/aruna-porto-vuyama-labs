from pathlib import Path
from PIL import Image, ImageOps

project = Path(__file__).resolve().parents[1]
source = project / 'assets' / 'source'
reference = project / 'design-concepts' / 'references'
target = project / 'dist' / 'assets' / 'images'
target.mkdir(parents=True, exist_ok=True)
files = {
    'modal': reference / 'modal-viscose.jpg',
    'gradasi': reference / 'viscose-gradasi-blushy-rose.jpg',
    'modal-alt': source / 'modal-alt.jpg',
    'gradasi-alt': source / 'gradasi-alt.jpg',
    'gradasi-ash': source / 'gradasi-ash.jpg',
    'gradasi-cream': source / 'gradasi-cream.jpg',
    'paris': source / 'paris-legend.jpg',
    'paris-alt': source / 'paris-legend-alt.jpg',
    'airtech': source / 'airtech.jpg',
    'gana': source / 'gana.jpg',
    'printed': source / 'printed.jpg',
    'printed-alt': source / 'printed-alt.jpg',
}
for name, filename in files.items():
    with Image.open(filename) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        image.thumbnail((1600, 2000), Image.Resampling.LANCZOS)
        image.save(target / f'{name}.webp', 'WEBP', quality=87, method=6)
print(f'Prepared {len(files)} original photographs for the web.')
