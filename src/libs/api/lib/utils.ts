export function buildStrapiUrl(path: string): string {
  const base = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");
  const apiBase = base.endsWith("/api") ? base : `${base}/api`;
  console.log({ apiBase, path });
  return `${apiBase}${path}`;
}
