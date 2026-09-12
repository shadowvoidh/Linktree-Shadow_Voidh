import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#404A4C] text-[#F6FAFB]">
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm text-[#6FE3C4]">404</p>
        <h1 className="mt-3 text-2xl font-semibold">Essa página não existe</h1>
        <p className="mt-2 max-w-[38ch] text-sm text-white/60">
          O link que você seguiu pode estar quebrado, ou a página foi movida.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-lg bg-[#6FE3C4] px-5 py-2.5 text-sm font-medium text-[#0F3D31] transition-colors hover:bg-[#5FD2B3]"
        >
          Voltar para o início
        </Link>
      </main>
      <Footer />
    </div>
  );
}
