# Peloton icon crop validation

Dataset: `peloton-q2-fy26`

## Accepted crops

| key | crop box | automated validation | model review | runtime use |
| --- | --- | --- | --- | --- |
| `peloton-company-wordmark` | `x=568, y=240, width=690, height=220` | pass; no edge or forbidden foreground pixels | Accepted. The complete Peloton symbol and wordmark are centered with balanced margins; the title, gross-profit label, flows, and publisher marks are excluded. | Approved company-brand raster annotation under R1–R9. |
| `peloton-connected-fitness-bike` | `x=145, y=270, width=275, height=230` | pass; no edge or forbidden foreground pixels | Accepted. The bike, screen, handlebars, pedals, and base are complete; the adjacent financial value, segment label, and flow are excluded. | Approved connected-fitness product raster annotation under R1–R9. |
| `peloton-subscription-app-icon` | `x=165, y=795, width=205, height=205` | pass; no edge or forbidden foreground pixels | Accepted. The rounded-square app icon and full Peloton mark are centered; the subscription label, KPI cards, and flow are excluded. | Approved subscription-product raster annotation under R1–R9. |

## Skipped source graphics

- The `HOW THEY MAKE MONEY` footer mark and mini Sankey are publisher branding.
- `appeconomyinsights.com` and the App Economy Insights footer lockup are publisher URL/attribution.

All relevant company and business/product icon clusters in the source image are therefore accounted for. The reference crops remain conversion evidence; the dataset uses only the approved copies in `data/assets/raster-annotations/peloton/`.

Dataset: `peloton-q3-fy26`

## Accepted crops

| key | crop box | automated validation | model review | runtime use |
| --- | --- | --- | --- | --- |
| `peloton-company-wordmark` | `x=559, y=263, width=685, height=215` | pass; no edge or forbidden foreground pixels | Accepted. The complete Peloton symbol and wordmark are centered with balanced margins; the title, gross-profit label, flows, and publisher marks are excluded. | Approved company-brand raster annotation under R1–R9. |
| `peloton-connected-fitness-bike` | `x=145, y=293, width=275, height=230` | pass; no edge or forbidden foreground pixels | Accepted. The bike, screen, handlebars, pedals, and base are complete; the adjacent financial value, segment label, and flow are excluded. | Approved connected-fitness product raster annotation under R1–R9. |
| `peloton-subscription-app-icon` | `x=165, y=787, width=205, height=205` | pass; no edge or forbidden foreground pixels | Accepted. The rounded-square app icon and full Peloton mark are centered; the subscription label, KPI cards, and flow are excluded. | Approved subscription-product raster annotation under R1–R9. |

## Skipped source graphics

- The `HOW THEY MAKE MONEY` footer mark and mini Sankey are publisher branding.
- `appeconomyinsights.com` and the App Economy Insights footer lockup are publisher URL/attribution.

All relevant company and business/product icon clusters in the Q3 FY26 source are therefore accounted for. The reference crops remain conversion evidence; the dataset uses only the approved copies in `data/assets/raster-annotations/peloton/`.

Dataset: `peloton-q1-fy26`

| asset | source crop | automatic validation | visual decision | disposition |
| --- | --- | --- | --- | --- |
| `peloton-company-wordmark` | `x=559, y=260, width=685, height=220` | pass; no edge or forbidden foreground pixels | Accepted. The complete Peloton symbol and wordmark are centered with balanced margins; the title, financial labels, flows, and publisher marks are excluded. | Approved company-brand raster annotation under R1–R9. |
| `peloton-connected-fitness-bike` | `x=145, y=293, width=275, height=230` | pass; no edge or forbidden foreground pixels | Accepted. The bike, screen, handlebars, pedals, and base are complete; the adjacent label, values, flow marks, and publisher marks are excluded. | Approved connected-fitness product raster annotation under R1–R9. |
| `peloton-subscription-app-icon` | `x=165, y=770, width=205, height=205` | pass; no edge or forbidden foreground pixels | Accepted. The rounded-square app icon and full Peloton mark are centered; the subscription label, KPI cards, and flow marks are excluded. | Approved subscription-product raster annotation under R1–R9. |

All relevant company and business/product icon clusters in the Q1 FY26 source are accounted for. The reference crops remain conversion evidence; the dataset uses only the approved copies in `data/assets/raster-annotations/peloton/`.
