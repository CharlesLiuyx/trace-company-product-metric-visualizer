# Yum! Brands Q1 FY26 Icon Crop Validation

Dataset: `yum-brands-q1-fy26`

Source image: `input/processed/yum-brands-q1-fy26.png`

Spec: `input/icon-crop-specs/yum-brands-q1-fy26.json`

Validated on: 2026-06-21

## Accepted Crops

- `yum-brands-company-speech-bubble` -> `crops/company-speech-bubble.png`
- `yum-brands-kfc-logo` -> `crops/kfc-logo.png`
- `yum-brands-taco-bell-logo` -> `crops/taco-bell-logo.png`
- `yum-brands-pizza-hut-logo` -> `crops/pizza-hut-logo.png`
- `yum-brands-habit-logo` -> `crops/habit-logo.png`

## Visual Checks

All generated validation sheets were reviewed against the original source image and extracted crop preview.

- Main icon structures are fully included.
- Main icon structures are visually centered in their crops.
- No unrelated text, Sankey marks, connector fragments, watermarks, neighboring icon parts, website text, social badges, or publisher branding are included.

## Explicitly Skipped

- `HOW THEY MAKE MONEY` footer mark and mini Sankey: source publisher/series branding.
- `appeconomyinsights.com` URL: source publisher branding.
- `APP ECONOMY INSIGHTS` footer lockup and social badge: source publisher branding.
