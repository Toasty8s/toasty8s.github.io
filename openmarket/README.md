# OpenMarket package hosting

This directory is the static download location for OpenMarket, the Windows Mobile 6.5.x community catalog client.

The published catalog URL is:

`https://toasty8s.github.io/openmarket/catalog.tsv`

Put CAB files in `apps/` and reference them in `catalog.tsv` with their full Pages URL, for example:

`https://toasty8s.github.io/openmarket/apps/sample-app.cab`

## Publishing an app

1. Ensure you have permission to redistribute the CAB and its documentation/assets. Preserve the publisher's license and attribution.
2. Add the CAB under `openmarket/apps/`, using a stable, lowercase app ID filename such as `notes-app.cab`.
3. Add a row to `catalog.tsv` using the eight-column format documented in that file. Metadata must not contain tabs or line breaks.
4. Commit both the package and catalog update to the Pages repository's published branch. Once Pages publishes the commit, check the catalog and CAB URLs in a browser before announcing them.
5. Keep old package versions available when practical, and update the catalog version and URL deliberately.

CAB installation can change a device's system. Review packages before listing them and only distribute software with appropriate permission. GitHub Pages is static hosting; it does not provide app review, malware scanning, package signing, or a submission workflow. OpenMarket currently does not verify package hashes or signatures.

Older Windows Mobile ROMs may not support the TLS versions or certificate authorities needed to connect to GitHub Pages. Test on the intended devices; hosting at this URL does not guarantee every legacy ROM can make an HTTPS connection.
