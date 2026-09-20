"""
Normalizes sponsor logos for the ticker.

The logos come from the Devpost listing in whatever form each sponsor supplied:
some are dark marks on transparency, some are light marks baked onto an opaque
dark plate. The ticker renders them all as one white silhouette, so this script
gets them to a common starting point:

  1. key out a flat background when the image has no usable alpha,
  2. trim the transparent margin so every logo optically fills its box,
  3. cap the height so the files stay small.

Run after dropping new files into public/sponsors/:

    python tools/prepare-logos.py

It rewrites the PNGs in place. Re-running is safe: step 1 is skipped once an
image already has transparency.
"""

from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image

LOGO_DIR = Path(__file__).resolve().parent.parent / "public" / "sponsors"
MAX_HEIGHT = 200
# How far a pixel may stray from the background colour and still count as background.
TOLERANCE = 72

# Some sponsors supplied artwork on a busy plate rather than a clean logo. For
# those, keeping only the bright pixels isolates the white lockup and drops the
# decorative background pattern with it. Value is the luminance cutoff.
BRIGHT_ONLY = {"devswarm": 150}


def has_transparency(image: Image.Image) -> bool:
    alpha = image.getchannel("A")
    return alpha.getextrema()[0] < 250


def key_out_background(image: Image.Image) -> Image.Image:
    """Flood fill inward from the border, clearing anything close to the corner colour.

    Filling from the edge rather than colour-keying the whole image means an
    interior shape that happens to match the background keeps its fill.
    """
    width, height = image.size
    pixels = image.load()

    corners = [pixels[0, 0], pixels[width - 1, 0], pixels[0, height - 1], pixels[width - 1, height - 1]]
    base = tuple(sum(channel) // len(corners) for channel in zip(*[c[:3] for c in corners]))

    def is_background(rgb: tuple[int, int, int]) -> bool:
        return sum(abs(a - b) for a, b in zip(rgb, base)) < TOLERANCE * 3

    seen = bytearray(width * height)
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        for y in (0, height - 1):
            queue.append((x, y))
    for y in range(height):
        for x in (0, width - 1):
            queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        index = y * width + x
        if seen[index]:
            continue
        seen[index] = 1
        r, g, b, _ = pixels[x, y]
        if not is_background((r, g, b)):
            continue
        pixels[x, y] = (r, g, b, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < width and 0 <= ny < height and not seen[ny * width + nx]:
                queue.append((nx, ny))

    return image


def keep_bright(image: Image.Image, cutoff: int) -> Image.Image:
    """Keep only near-white pixels, so a white lockup survives and the plate behind it does not."""
    luminance = image.convert("L").point(lambda value: 255 if value >= cutoff else 0)
    image.putalpha(luminance)
    return image


def trim(image: Image.Image) -> Image.Image:
    box = image.getchannel("A").point(lambda a: 255 if a > 12 else 0).getbbox()
    return image.crop(box) if box else image


def main() -> int:
    files = sorted(LOGO_DIR.glob("*.png"))
    if not files:
        print(f"No PNGs in {LOGO_DIR}")
        return 1

    for path in files:
        image = Image.open(path).convert("RGBA")
        before = image.size

        cutoff = BRIGHT_ONLY.get(path.stem)
        if cutoff is not None:
            image = keep_bright(image, cutoff)
        elif not has_transparency(image):
            image = key_out_background(image)

        image = trim(image)

        if image.height > MAX_HEIGHT:
            ratio = MAX_HEIGHT / image.height
            image = image.resize((max(1, round(image.width * ratio)), MAX_HEIGHT), Image.LANCZOS)

        image.save(path, optimize=True)
        print(f"{path.name:22} {before} -> {image.size}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
