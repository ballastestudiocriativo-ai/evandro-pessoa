import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Evandro Pessoa — Investigação Profissional" },
      { name: "author", content: "Evandro Pessoa" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Evandro Pessoa — Investigação Profissional" },
      { name: "twitter:title", content: "Evandro Pessoa — Investigação Profissional" },
      { name: "description", content: "Website for Evandro Pessoa Investigações, a professional investigation service focused on generating WhatsApp leads." },
      { property: "og:description", content: "Website for Evandro Pessoa Investigações, a professional investigation service focused on generating WhatsApp leads." },
      { name: "twitter:description", content: "Website for Evandro Pessoa Investigações, a professional investigation service focused on generating WhatsApp leads." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0IomQGV5zfV7des8GK3F1HFnFV42/social-images/social-1778016292172-Evandro_Pessoa_Logo_Original.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0IomQGV5zfV7des8GK3F1HFnFV42/social-images/social-1778016292172-Evandro_Pessoa_Logo_Original.webp" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
