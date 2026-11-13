// Avisa Bing/Copilot (e os demais buscadores do IndexNow) que as páginas mudaram.
// Rodar depois de cada deploy de produção: npm run indexnow
// Lê o sitemap publicado, então só envia URLs que estão no ar.
const HOST = "brandcodesolutions.com.br";
const KEY = "46ae4ba95007aa146c934a5607aff874"; // arquivo em public/<KEY>.txt

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) throw new Error("Sitemap sem URLs");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs enviadas -> HTTP ${res.status}`);
if (!res.ok && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
