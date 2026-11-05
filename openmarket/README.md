# OpenMarket package hosting

This directory hosts the static catalog and CAB packages for the OpenMarket Windows Mobile 6.5.x client.

- Live catalog: <https://toasty8s.github.io/openmarket/catalog.tsv>
- CABs: `openmarket/apps/` in this repository; public URL prefix `https://toasty8s.github.io/openmarket/apps/`

## Publish a CAB

1. Confirm you have redistribution rights and record accurate publisher, version, and license details.
2. Add the actual `.cab` binary to `openmarket/apps/` with a stable app-ID filename (for example `notes-app.cab`). Use the GitHub web upload or `git`; do not use a text editor to alter binary packages.
3. Add a row to `catalog.tsv` in the format `id<TAB>name<TAB>version<TAB>publisher<TAB>category<TAB>description<TAB>license<TAB>cab-url`. The CAB URL must use the Pages URL, e.g. `https://toasty8s.github.io/openmarket/apps/notes-app.cab`.
4. Commit the CAB and catalog change together to `main`.
5. After Pages publishes, check both URLs in a browser and test downloads on the target WM6.5 device. Older ROMs may lack current TLS/certificate support.

Do not list example apps until their real CAB packages are uploaded. CAB installation can modify a device; Pages does not scan or sign packages, and the OpenMarket client does not yet verify hashes/signatures. Only distribute trusted packages that you are authorized to share.
