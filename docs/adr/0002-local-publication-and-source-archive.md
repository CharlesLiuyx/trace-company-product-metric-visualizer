# ADR-0002: local immutable publication and operator-owned source archive

Status: implemented following the reviewed 2026-09-05 workflow proposal.

The unit of canonical visibility for new asset intake is a complete immutable
runtime tree, including crop recipe JSON metadata (never processed originals). DatasetBuild authoring uses a private workspace and the existing
Build ledger. Publication stages and verifies the combined result, checks the
base digest under a lock, and atomically selects the tree with one pointer.
Readers resolve the pointer once and use digest-qualified paths thereafter.
Sequential writes back into the development checkout are not atomic and are
not used as the canonical publication operation.

ADR-0001's three scopes and evidence restrictions remain. New input is routed
through the isolated workflow; historical direct-edit Builds keep their real
receipts and can be inspected without fabricated migration evidence. Different
contributions to the same file conflict explicitly. A refresh checks conflicts,
updates the workspace against the new base and requires a new seal before a
new plan. Shared registration and baseline writers operate only in the private
publication candidate.

A Source's canonical projection is its stable locator, immutable byte digest,
availability and retained facts. Its potentially private original image/text
stays local. Therefore successful Publication does **not** by itself authorize
moving the local processing queue to the ignored archive. The existing explicit
operator completion signal and concrete list confirmation retain that authority.
This refines ADR-0001's planned processed-Source projection: canonical metadata
is published atomically; local archive transport is separate. Identical bytes
may complete an interrupted no-clobber copy, but different destination bytes
always block relocation.

Release consumes one published digest, builds in its own temporary workspace,
records the tool digest and its output or error, and never rolls Publication
back. Hosted deployment is not implied by a successful local release artifact.
