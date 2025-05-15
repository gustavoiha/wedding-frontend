import { defineConfig } from "vite"
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    remix(),
    tailwindcss()
  ]
})
