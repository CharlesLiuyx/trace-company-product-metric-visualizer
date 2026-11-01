// Source media registry: the file formats a Source may arrive in, the
// pending-queue extensions each one owns, and the classification protocol
// that records its complete native scope. Adapters declare the media they
// accept (`scripts/lib/adapters/`); lifecycle, intake and queue code derive
// extension checks from here instead of repeating the list. A new medium
// (PDF, video frame, web snapshot) adds one entry plus its anchor protocol.
export const SOURCE_MEDIA = Object.freeze({
  image: Object.freeze({
    id: 'image',
    extensions: Object.freeze(['.png']),
    classificationProtocol: 'source-classification/v1',
    referenceRole: 'reference-image',
  }),
  text: Object.freeze({
    id: 'text',
    extensions: Object.freeze(['.txt', '.md']),
    classificationProtocol: 'source-classification/v2',
    referenceRole: 'reference-text',
  }),
});

export const SOURCE_MEDIA_IDS = Object.freeze(Object.keys(SOURCE_MEDIA));
export const SOURCE_EXTENSIONS = Object.freeze(Object.values(SOURCE_MEDIA).flatMap((media) => media.extensions));
export const SOURCE_FILE_RE = new RegExp(`\\.(${SOURCE_EXTENSIONS.map((ext) => ext.slice(1)).join('|')})$`, 'i');
export const SOURCE_FORMAT_LABEL = 'PNG, UTF-8 TXT or Markdown';

/** The medium that owns a lower-cased extension such as `.png`, or null. */
export function sourceMediaForExtension(extension) {
  const lower = String(extension || '').toLowerCase();
  return Object.values(SOURCE_MEDIA).find((media) => media.extensions.includes(lower)) || null;
}

/** The medium a recorded Source descriptor belongs to (`format: 'text'` or image dimensions). */
export function sourceMediaForDescriptor(source) {
  return source?.format === 'text' ? SOURCE_MEDIA.text : SOURCE_MEDIA.image;
}
