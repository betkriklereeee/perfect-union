# Perfect Union

Official website for the Los Angeles rock band Perfect Union.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Production builds

- `npm run build` creates the existing Sites/Cloudflare Worker build.
- `npm run build:plesk` creates a static Plesk build in `out/`.

The Plesk build contains the home and About pages, assets, metadata, and all
client-side navigation. It does not require a long-running Node.js process.

## Deploy with Plesk Git

1. Add `perfectuniontheband.com` under **Websites & Domains**.
2. Set its document root to `httpdocs`.
3. Under **Git**, add the remote repository:
   `https://github.com/betkriklereeee/perfect-union.git`
4. Use branch `main`, manual deployment for the first release, and a source
   deployment directory separate from `httpdocs`, such as `perfect-union-source`.
5. Enable additional deployment actions and run:

```bash
npm ci
npm run build:plesk
rsync -a --delete out/ ../httpdocs/
```

If the repository directory and `httpdocs` are not siblings in your Plesk
subscription, adjust the final relative path using the location shown by
Plesk's File Manager. Do not point the Git source deployment directly at
`httpdocs`; only the contents of `out/` belong there.

After the first successful deployment, issue a Let's Encrypt certificate for
both `perfectuniontheband.com` and `www.perfectuniontheband.com`, then change
Cloudflare DNS to the Plesk server.
