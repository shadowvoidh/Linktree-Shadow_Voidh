import { useEffect, useState } from "react";
import Footer from "../components/Footer";

interface Profile {
  name: string;
  handle: string;
  role: string;
  bio: string;
  avatarUrl: string;
  languages: string[];
}

interface LinkItem {
  id: string;
  label: string;
  href: string;
  description: string;
  tag?: string;
  icon: JSX.Element;
}

const profile: Profile = {
  name: "Pedro Carnio",
  handle: "Shadow_Voidh",
  role: "Estudante de TI & Desenvolvedor",
  bio: "Focado em desenvolvimento backend de alta performance e aplicações web modernas.",
  avatarUrl: "https://github.com/shadowvoidh.png",
  languages: ["Rust", "Go", "Java", "TSX"],
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}


const links: LinkItem[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/shadowvoidh",
    description: "Repositórios e projetos pessoais",
    tag: "rust · go · java",
    icon: <GithubIcon />,
  },
    {
    id: "portfolio",
    label: "Portfólio Pessoal",
    href: "https://github.com/shadowvoidh/readme-repository",
    description: "Projetos em destaque e estudos de caso",
    icon: <GithubIcon />,
  },

  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pedrocarnio",
    description: "Trajetória profissional e contatos",
    icon: <LinkedinIcon />,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/shadow_voidh", 
    description: "Instagram pessoal",
    icon: <InstagramIcon />,
  },

  {
    id: "email",
    label: "E-mail",
    href: "mailto:shadow.voidh@gmail.com",
    description: "shadow.voidh@gmail.com",
    icon: <MailIcon />,
  },
];

type Theme = "dark" | "light";

export default function PersonalLinktree() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.title = `${profile.name} (@${profile.handle}) — ${profile.role}`;

    const ensureMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta("description", profile.bio);
    ensureMeta("og:title", `${profile.name} — Portfolio & Links`, "property");
    ensureMeta("og:description", profile.bio, "property");
    ensureMeta("og:image", profile.avatarUrl, "property");
    ensureMeta("og:type", "profile", "property");
    ensureMeta("twitter:card", "summary_large_image");
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden transition-colors duration-300 font-sans flex flex-col items-center justify-between p-6 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Luz ambiente no topo (Spotlight Glow) */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] blur-[120px] pointer-events-none rounded-full transition-opacity duration-300 ${
          isDark ? "bg-emerald-500/10 opacity-100" : "bg-emerald-500/15 opacity-60"
        }`}
      />

      {/* Botão de Alternar Tema */}
      <div className="w-full max-w-[440px] flex justify-end z-10 pt-2">
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
          className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
            isDark
              ? "bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
              : "bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm"
          }`}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
          <span>{isDark ? "Claro" : "Escuro"}</span>
        </button>
      </div>

      {/* Conteúdo Principal */}
      <main
        className={`w-full max-w-[440px] my-auto flex flex-col items-center text-center z-10 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {/* Foto de Perfil com Anel de Gradiente */}
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-teal-500 to-emerald-400 shadow-xl shadow-emerald-950/20">
            <img
              src={profile.avatarUrl}
              alt={`Foto de perfil de ${profile.name}`}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              className={`w-full h-full rounded-full object-cover ${
                isDark ? "bg-zinc-900" : "bg-white"
              }`}
            />
          </div>
        </div>

        {/* Informações Pessoais */}
        <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-xs font-mono font-medium text-emerald-500 mt-0.5">
          @{profile.handle}
        </p>
        <p
          className={`text-sm font-semibold mt-1 ${
            isDark ? "text-emerald-400" : "text-emerald-600"
          }`}
        >
          {profile.role}
        </p>
        <p
          className={`mt-2.5 text-sm leading-relaxed max-w-[36ch] ${
            isDark ? "text-zinc-400" : "text-slate-600"
          }`}
        >
          {profile.bio}
        </p>

        {/* Badges de Tecnologias */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          {profile.languages.map((lang) => (
            <span
              key={lang}
              className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-md border ${
                isDark
                  ? "bg-zinc-900/80 border-zinc-800 text-zinc-300"
                  : "bg-white border-slate-200 text-slate-700 shadow-sm"
              }`}
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Lista de Links */}
        <nav aria-label="Links principais" className="mt-8 flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 border transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800/80 hover:border-emerald-500/50 hover:bg-zinc-900 hover:shadow-emerald-950/20"
                  : "bg-white border-slate-200/80 hover:border-emerald-500/50 hover:bg-slate-50 hover:shadow-emerald-500/10"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isDark
                    ? "bg-zinc-800/60 text-emerald-400 group-hover:bg-emerald-500/10"
                    : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                }`}
              >
                {link.icon}
              </span>
              <span className="flex min-w-0 flex-1 flex-col text-left">
                <span className="text-[15px] font-semibold tracking-tight">
                  {link.label}
                </span>
                <span
                  className={`truncate text-xs ${
                    isDark ? "text-zinc-500" : "text-slate-500"
                  }`}
                >
                  {link.description}
                </span>
              </span>
              {link.tag && (
                <span
                  className={`font-mono shrink-0 text-[11px] hidden sm:block ${
                    isDark ? "text-zinc-600" : "text-slate-400"
                  }`}
                >
                  {link.tag}
                </span>
              )}
            </a>

          ))}
        </nav>
      </main>

<Footer />
    </div>
  );
}
