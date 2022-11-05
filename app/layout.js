"use client";
import "../styles/globals.css";
import Nav from "./Nav";
import sidebarHome from "../utils/sidebarHome.json";
import sidebarDocs from "../utils/sidebarDocs.json";
import { useActiveSection } from "../hooks/useActiveSection";
import { SidebarContext } from "./SidebarContext";

export default function RootLayout({ children }) {
  const section = useActiveSection();
  let routeTree = sidebarHome;
  switch (section) {
    case 'docs':
      routeTree = sidebarDocs;
      break;
  }
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className="font-sans antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base">
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    if (newTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else if (newTheme === 'light') {
                      document.documentElement.classList.remove('dark');
                    }
                  }

                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }

                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };

                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);

                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });
                })();
              `,
          }}
        />
        <SidebarContext.Provider value={routeTree}>
          <div className="grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
            <div className="fixed lg:sticky top-0 left-0 right-0 py-0 shadow lg:shadow-none z-50">
              <Nav />
            </div>
            <main className="min-w-0 p-4">
              <div className="lg:hidden h-16 mb-2" />
              <article className="break-words min-h-full">
                {children}
              </article>
              <div className="h-16" />
              <footer>Footer</footer>
            </main>
          </div>
        </SidebarContext.Provider>
      </body>
    </html>
  )
}
