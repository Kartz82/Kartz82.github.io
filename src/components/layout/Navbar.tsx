import { useEffect, useState } from "react";
import { links } from "../../data/links";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Certificates", href: "#certificates" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scrollspy: highlight the nav item for the section in the middle band of the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="border-b border-[#16181d]/10 bg-[#f7f6f3]/85 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-widest text-[#16181d]"
          >
            KV<span className="text-[#e8480c]">.</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative text-sm font-medium transition-colors hover:text-[#16181d] ${
                    isActive ? "text-[#16181d]" : "text-[#4b4f58]"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#e8480c] transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href={links.resume}
              download
              className="rounded-full bg-[#16181d] px-4 py-1.5 text-sm font-medium text-[#f7f6f3] transition-colors hover:bg-[#e8480c]"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#16181d]/15 text-[#16181d] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-current ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>

        {open && (
          <div id="mobile-nav" className="border-t border-[#16181d]/10 px-5 pb-5 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2.5 text-base text-[#4b4f58] hover:bg-[#16181d]/[0.04] hover:text-[#16181d]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={links.resume}
                download
                className="mt-2 rounded-full bg-[#16181d] px-4 py-2.5 text-center text-base font-medium text-[#f7f6f3]"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
