# NicoleLevin on glados

This app is intended to run behind the shared glados reverse proxy and Cloudflare Tunnel.

Expected host paths:

```text
/opt/services/data/app-env/nicole-levin.env
/opt/services/data/app-env/nicole-levin-serviceAccountKey.json
/opt/services/data/app-assets/nicole-levin/static
```

The env file must provide `NLUSERKEY`. The Firebase service account JSON should be copied from the current host into `nicole-levin-serviceAccountKey.json`; do not commit it.

Before first start, copy the current runtime static assets from Host A:

```bash
mkdir -p /opt/services/data/app-assets/nicole-levin/static
rsync -a root@45.63.18.108:/root/NicoleLevin/static/ /opt/services/data/app-assets/nicole-levin/static/
```

Start or update the service from the GHCR image:

```bash
/opt/services/bin/deploy-app nicole-levin
```

GitHub Actions publishes `ghcr.io/r2pen2/nicolelevin:latest`. Watchtower on glados can then pull and restart this service automatically when the image changes.
