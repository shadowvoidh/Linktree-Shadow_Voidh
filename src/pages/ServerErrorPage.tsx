import Footer from "../components/Footer";

export default function ServerErrorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#404A4C] text-[#F6FAFB]">
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm text-[#6FE3C4]">500</p>
        <h1 className="mt-3 text-2xl font-semibold">Algo deu errado do nosso lado</h1>
        <p className="mt-2 max-w-[38ch] text-sm text-white/60">
          O servidor encontrou um problema inesperado. Já estamos cientes —
          tente novamente em alguns minutos.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 rounded-lg bg-[#6FE3C4] px-5 py-2.5 text-sm font-medium text-[#0F3D31] transition-colors hover:bg-[#5FD2B3]"
        >
          Tentar novamente
        </button>
      </main>
      <Footer />
    </div>
  );
}
