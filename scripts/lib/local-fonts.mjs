// Inlines locally installed @fontsource woff2 files as CSS @font-face rules
// so browser harnesses and the standalone build never fetch external fonts.
// Consumers pass their own family list; keep weights in sync with the fonts
// each consumer actually renders (see scripts/verify-d3.mjs and
// scripts/build-standalone.mjs call sites).
import { existsSync, readFileSync } from 'node:fs';
import { projectPath } from './project.mjs';

// Single owner of the font roles the renderer depends on (keep in sync with
// the Google Fonts link in index.html): Montserrat drives the app chrome and
// dataset annotation text; Noto Sans drives the Sankey headings (chart title
// + node names) and the value amounts; Roboto drives value note/description
// lines + tooltip.
export const PROJECT_FONT_FAMILIES = [
  { family: 'Montserrat', slug: 'montserrat', weights: [400, 500, 600, 700, 800] },
  { family: 'Noto Sans', slug: 'noto-sans', weights: [300, 400, 500, 600, 700, 800] },
  { family: 'Roboto', slug: 'roboto', weights: [300, 400, 500] },
];

export function fontDataUri(slug, weight) {
  const relativePath = `node_modules/@fontsource/${slug}/files/${slug}-latin-${weight}-normal.woff2`;
  const fontPath = projectPath(relativePath);
  if (!existsSync(fontPath)) {
    throw new Error(`Missing local font file: ${relativePath}`);
  }
  return `data:font/woff2;base64,${readFileSync(fontPath).toString('base64')}`;
}

export function localFontFaces(families) {
  return families
    .flatMap(({ family, slug, weights, display }) =>
      weights.map(
        (weight) => `@font-face {
  font-family: '${family}';
  font-style: normal;
  font-weight: ${weight};${display ? `\n  font-display: ${display};` : ''}
  src: url('${fontDataUri(slug, weight)}') format('woff2');
}`
      )
    )
    .join('\n\n');
}
