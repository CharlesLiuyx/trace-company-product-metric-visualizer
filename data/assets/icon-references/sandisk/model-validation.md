# Sandisk icon-crop validation

## sandisk-q2-fy26

- `sandisk-company-wordmark`: accepted. The complete Sandisk wordmark is centered and excludes the chart title, revenue label, and flow geometry. Automated validation passed with no edge or forbidden foreground pixels.
- `sandisk-datacenter-storage-cluster`: accepted. The two enterprise SSDs are complete and centered; the crop excludes the Datacenter copy, node face, and ribbon. Automated validation passed with no edge or forbidden foreground pixels.
- `sandisk-edge-storage-cluster`: accepted. The iNAND package and its backing package are complete and centered; the crop excludes the Edge copy, node face, and ribbon. Automated validation passed with no edge or forbidden foreground pixels.
- `sandisk-consumer-storage-cluster`: accepted. The three portable storage devices are complete and centered; the crop excludes the Consumer copy, node face, and ribbon. Automated validation passed with no edge or forbidden foreground pixels.

All four accepted transparent crops have a matching compressed runtime annotation under `data/assets/raster-annotations/sandisk/` and are used only by `sandisk-q2-fy26`.
