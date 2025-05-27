import {
  Links,
  Meta,
  Outlet,
  ScrollRestoration,
  Scripts,
} from "@remix-run/react"
import type { LinksFunction } from "@remix-run/node"
import rootStylesHref from "./root.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: rootStylesHref },
]

export default function App() {
  return (
    <html
      lang="pt"
      className="h-full"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>

      <body className="h-full bg-stone-950 text-stone-50 font-sans tracking-wide whitespace-pre-line wrap-anywhere">
        <main>
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
