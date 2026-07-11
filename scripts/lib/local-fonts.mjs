// Inlines locally installed @fontsource woff2 files as CSS @font-face rules
// so browser harnesses and the standalone build never fetch external fonts.
// Consumers pass their own family list; keep weights in sync with the fonts
// each consumer actually renders (see scripts/verify-d3.mjs and
// scripts/build-standalone.mjs call sites).
import { existsSync, readFileSync } from 'node:fs';
import { projectPath } from './project.mjs';

// Single owner of every project-hosted font face. Montserrat drives app
// chrome and remains available to explicitly scoped brand graphics; Noto Sans
// drives View product text and Sankey headings/amounts; Roboto drives Sankey
// value notes/descriptions and hover tooltips. Keep the development-only
// Google Fonts link in index.html aligned through the typography policy test.
export const PROJECT_FONT_FAMILIES = Object.freeze([
  { family: 'Montserrat', slug: 'montserrat', weights: Object.freeze([400, 500, 600, 700, 800]) },
  { family: 'Noto Sans', slug: 'noto-sans', weights: Object.freeze([300, 400, 500, 600, 700, 800]) },
  { family: 'Roboto', slug: 'roboto', weights: Object.freeze([300, 400, 500]) },
].map(Object.freeze));

export function fontFileName(slug, weight) {
  return `${slug}-latin-${weight}-normal.woff2`;
}

export function fontPackageRelativePath(slug, weight) {
  return `node_modules/@fontsource/${slug}/files/${fontFileName(slug, weight)}`;
}

export function fontDataUri(slug, weight) {
  const relativePath = fontPackageRelativePath(slug, weight);
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
