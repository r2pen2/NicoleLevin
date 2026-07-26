# Cloudflare Tunnel Routing

Use the entries in `nicole-levin-tunnel.example.yml` in the shared glados tunnel configuration.

Expected DNS/tunnel routing:

```text
nicolelevin.org      -> glados tunnel -> http://traefik:80
www.nicolelevin.org  -> glados tunnel -> http://traefik:80
```

The app container itself should not publish public ports. Cloudflare reaches it through `cloudflared`, the shared reverse proxy, and the Docker `proxy` network.

After updating the tunnel ingress, restart the `cloudflared` container on glados and verify both hostnames.
