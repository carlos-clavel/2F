import { copyFile, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
)
const outputDirectory = path.join(projectRoot, "dist")
const builtHtmlPath = path.join(outputDirectory, "index.html")
const portableHtmlPath = path.join(projectRoot, "fluxus.html")

let html = await readFile(builtHtmlPath, "utf8")

// This redirect is useful only in the source index.html opened from disk.
html = html.replace(
  /\s*<script id="standalone-redirect">[\s\S]*?<\/script>/,
  "",
)

const stylesheetTag = html.match(/<link\b[^>]*rel="stylesheet"[^>]*>/)?.[0]
const moduleTag = html.match(
  /<script\b[^>]*type="module"[^>]*src="[^"]+"[^>]*><\/script>/,
)?.[0]

if (!stylesheetTag || !moduleTag) {
  throw new Error("Não foi possível localizar os assets gerados pelo Vite.")
}

const stylesheetPath = stylesheetTag.match(/\bhref="([^"]+)"/)?.[1]
const modulePath = moduleTag.match(/\bsrc="([^"]+)"/)?.[1]

if (!stylesheetPath || !modulePath) {
  throw new Error("Os caminhos dos assets gerados são inválidos.")
}

function resolveBuiltAsset(assetPath) {
  const resolvedPath = path.resolve(outputDirectory, assetPath)
  const relativePath = path.relative(outputDirectory, resolvedPath)

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    throw new Error(`Asset fora do diretório de build: ${assetPath}`)
  }

  return resolvedPath
}

const [css, javascript] = await Promise.all([
  readFile(resolveBuiltAsset(stylesheetPath), "utf8"),
  readFile(resolveBuiltAsset(modulePath), "utf8"),
])

const safeCss = css.replace(/<\/style/gi, "<\\/style")
const safeJavascript = javascript.replace(/<\/script/gi, "<\\/script")

html = html
  .replace(stylesheetTag, () => `<style>\n${safeCss}\n</style>`)
  .replace(
    moduleTag,
    () => `<script type="module">\n${safeJavascript}\n</script>`,
  )

if (/(?:src|href)="(?:\.{0,2}\/)?assets\//.test(html)) {
  throw new Error("O HTML autônomo ainda contém referências a assets locais.")
}

await writeFile(builtHtmlPath, html, "utf8")
await copyFile(builtHtmlPath, portableHtmlPath)

console.log("HTML autônomo criado em dist/index.html e fluxus.html")
