from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import json
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    pass
project = Path(__file__).resolve().parents[1]
items = json.loads((project/'assets/source/catalogue-downloads.json').read_text())
thumbs = []
for item in items:
    if item.get('skipWeb'): continue
    file = project/'assets/source'/f'{item["name"]}.jpg'
    if not file.exists(): continue
    try:
        with Image.open(file) as im:
            im = ImageOps.exif_transpose(im).convert('RGB')
            im.thumbnail((1400,1800),Image.Resampling.LANCZOS)
            im.save(project/'dist/assets/images'/f'{item["name"]}.webp','WEBP',quality=85,method=6)
            tile = Image.new('RGB',(250,330),'#eee9e3')
            im.thumbnail((240,294))
            tile.paste(im,((250-im.width)//2,5))
            ImageDraw.Draw(tile).text((10,310),item['name'],fill='#222222')
            thumbs.append(tile)
    except Exception as error:
        print(item['name'],str(error))
sheet = Image.new('RGB',(1250,330*((len(thumbs)+4)//5)),'white')
for i,tile in enumerate(thumbs): sheet.paste(tile,((i%5)*250,(i//5)*330))
sheet.save(project/'qa/catalogue-contact-sheet.jpg')
print('Prepared',len(thumbs),'images')
