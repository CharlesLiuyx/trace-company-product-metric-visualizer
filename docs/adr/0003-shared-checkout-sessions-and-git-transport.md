# ADR-0003: Shared-checkout Sessions and reviewed Git transport

Status: accepted, local P0/P1 implementation. Remote staging remains deferred.

The operator uses several Codex or Claude Code Sessions in one project directory,
without Git worktrees. Source processing must therefore use ordinary isolated
Build folders and must not inherit the parent repository's writable Git index.

Build identity remains durable; Session owner/generation is operational authority,
not a new lifecycle scope or human acceptance. Short content-digest intake claims
serialize queue ownership. Build operations wait for locks; owner transfer fences
old writers. Dead locks require an exact observed token and an exited PID. There
is no elapsed-time lock stealing. Input/base copies and verifiers remain isolated.

New Builds combine current root application code with the immutable canonical
data base. Generated SSOT registration lines are excluded from application identity;
all other application bytes are checked again before Publication.

Publication keeps its immutable tree and pointer CAS from ADR-0001/0002. Typed
three-way SSOT merging handles distinct records and fields. Ambiguous mutations
fail closed with both drafts intact. Changed bases currently require fresh review
and seal; automatic human-evidence reuse is intentionally conservative.

A loopback workbench provides tab-pinned immutable Pages previews, automatic Dev
refresh, and read-only CI/production comparison. Prepared Build acceptance binds
the displayed preview identity as well as the existing review token. Automatic
preview construction creates no human acceptance.

Git transport is a release operation on a published digest. It integrates owned
contributions with current committed application code in an ordinary candidate
directory, validates that candidate, and records its explicit human review. Display
timestamps bind source bytes before this review. A shared Publication/transport
write mutex, exact path list, temporary private index, HEAD preconditions, and
durable journal protect the shared checkout. Working-tree file application is
recoverable, not atomic. Push remains an explicit operator action and never forces.

CI validates the transport input/review/output mapping and hands the same verified
artifact to Pages. Production completion requires actual manifest/page readback.
Existing direct-edit commits keep their historical semantics and are identified
as having no transport mapping. See [local-environments.md](../local-environments.md)
for command and recovery details; [asset-workflow.md](../asset-workflow.md) owns intake.
