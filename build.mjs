import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = process.cwd();
const out = resolve(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const name of ['index.html', 'app.js', 'styles.css', 'sw.js', 'manifest.webmanifest', 'public']) {
  await cp(resolve(root, name), resolve(out, name), { recursive: true });
}
console.log('Build terminé : dossier dist/ prêt à être publié sur un hébergement HTTPS.');
