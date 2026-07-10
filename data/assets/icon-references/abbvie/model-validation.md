# AbbVie visual validation

Source: `input/processed/abbvie-q4-fy25.png`<br>
Crop spec: `input/icon-crop-specs/abbvie-q4-fy25.json`

Visual review completed 2026-07-10 against the generated validation sheets.

| crop | result | review note |
| --- | --- | --- |
| `abbvie-company-wordmark` | accepted | Complete centered AbbVie wordmark; no title, flow ribbon, or financial text retained. |
| `abbvie-immunology-products` | accepted | Complete Humira and Skyrizi cluster, including product descriptors; no segment label or node bar retained. |
| `abbvie-oncology-imbruvica` | accepted | Complete Imbruvica / ibrutinib mark; no neighboring label or connector retained. |
| `abbvie-aesthetics-botox-cosmetic` | accepted | Complete Botox Cosmetic mark; no neighboring label or connector retained. |
| `abbvie-neuroscience-botox` | accepted | Complete Botox mark, centered with no Neuroscience label retained. |
| `abbvie-eye-care-ozurdex` | accepted | Complete Ozurdex cluster including its descriptor; no segment label or connector retained. |

All six semantically relevant company or business/product visual clusters in
the source are accounted for. The publisher mini-Sankey, URL, footer branding,
and social mark are attribution; the Other revenue aggregate is icon-less, so
they are intentionally skipped in the crop spec.
