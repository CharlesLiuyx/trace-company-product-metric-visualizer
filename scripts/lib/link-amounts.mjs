// A link carries part of both endpoints, so its authored amount cannot exceed
// what its source receives or its target passes on, beyond one display unit
// of source rounding. A node's capacity is its displayed amount or, for a
// pooling node shown net of an offset (boeing-q4-fy25 Operating profit, sony
// Operating expenses), its actual throughput on the relevant side. Node hover
// reads link / node on multi-input targets, so an oversized link (hermes-fy23
// Other -> Net profit authored as 4.3 against Other 0.3) showed 1433.3%.
export function linkAmountViolations(dataset) {
  const nodes = new Map((dataset.nodes || []).map((node) => [node.id, node]));
  const idOf = (end) => (typeof end === 'object' ? end?.id : end);
  const amount = (value) => Math.abs(Number(value));
  const links = (dataset.links || []).filter((link) => Number.isFinite(Number(link.value)));
  const total = (pick) => links.filter(pick).reduce((sum, link) => sum + amount(link.value), 0);
  const tolerance = 10 ** -(dataset.meta?.decimals ?? 1) + 1e-9;
  const violations = [];
  for (const link of links) {
    const source = nodes.get(idOf(link.source));
    const target = nodes.get(idOf(link.target));
    if (!source || !target || !Number.isFinite(Number(source.value)) || !Number.isFinite(Number(target.value))) continue;
    const sourceCapacity = Math.max(amount(source.value), total((other) => idOf(other.target) === source.id));
    const targetCapacity = Math.max(amount(target.value), total((other) => idOf(other.source) === target.id));
    if (amount(link.value) > Math.min(sourceCapacity, targetCapacity) + tolerance) {
      violations.push(`${dataset.key}: link ${source.id} -> ${target.id} value ${link.value} exceeds its endpoint capacity (${source.id} ${source.value}, ${target.id} ${target.value}); author the actual flow amount`);
    }
  }
  return violations;
}
