import { defineConfig } from "vite"
import { installGlobals } from "@remix-run/node"
import { vitePlugin as remix } from "@remix-run/dev"
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import devtoolsJson from "vite-plugin-devtools-json"

installGlobals()

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true,
    v3_throwAbortReason: true,
    v3_relativeSplatPath: true,
    v3_lazyRouteDiscovery: true,
    v3_fetcherPersist: true
  }
}

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
      future: {
        v3_singleFetch: true,
        v3_throwAbortReason: true,
        v3_relativeSplatPath: true,
        v3_lazyRouteDiscovery: true,
        v3_fetcherPersist: true
      }
    }),
    tailwindcss(),
    tsconfigPaths(),
    devtoolsJson()
  ]
})
