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

Start or update the service:

```bash
docker compose -f deploy/glados/compose.yml up -d --build
```
