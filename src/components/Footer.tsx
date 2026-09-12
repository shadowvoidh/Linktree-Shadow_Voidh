import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 mt-12">
      <div className="mx-auto grid max-w-4xl gap-8 px-6 py-10 text-left sm:grid-cols-3 text-sm">
        <div>
          <p className="text-base font-semibold text-zinc-100">Shadow_Voidh</p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            Página pessoal de Pedro Carnio — estudante de TI com foco em TSX,
            Rust, Go e Java.
          </p>
          <p className="mt-4 text-[11px] text-zinc-500">
            © {new Date().getFullYear()} Pedro Carnio. Conteúdo pessoal, sem
            fins comerciais.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Navegação
          </h2>
          <ul className="mt-3 space-y-2 text-xs">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/politica-de-privacidade" className="hover:text-emerald-400 transition-colors">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link to="/termos-de-uso" className="hover:text-emerald-400 transition-colors">
                Termos de uso
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Contato
          </h2>
          <address className="mt-3 space-y-2 text-xs not-italic leading-relaxed">
            <div>
              <strong className="block font-medium text-zinc-200">Pedro Carnio</strong>
              <span className="text-[11px] text-zinc-500">Paraná, Brasil</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <svg
                className="h-4 w-4 shrink-0 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:shadow.voidh@gmail.com"
                className="hover:text-emerald-400 transition-colors"
              >
                shadow.voidh@gmail.com
              </a>
            </div>
          </address>

          <div className="mt-3 flex items-center gap-2">
            <a
              href="https://github.com/shadowvoidh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 hover:border-emerald-500/50 hover:text-white transition-all"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/pedrocarnio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 hover:border-emerald-500/50 hover:text-white transition-all"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>
          </div>
        </div>
      </div>
    </footer>
  );
}