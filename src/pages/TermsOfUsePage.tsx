import { useEffect } from "react";
import Footer from "../components/Footer";

export default function TermsOfUsePage() {
  useEffect(() => {
    document.title = "Termos de uso — Shadow_Voidh";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F6FAFB] text-[#1B2426]">
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <h1 className="text-2xl font-semibold">Termos de uso</h1>
        <p className="mt-2 text-sm text-[#1B2426]/60">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section className="mt-8 space-y-4 text-[15px] leading-relaxed">
          <h2 className="text-lg font-medium">Sobre este site</h2>
          <p>
            Este é o site pessoal de Pedro Carnio (Shadow_Voidh), usado para
            reunir links de contato e projetos. O conteúdo é fornecido "como
            está", sem garantias de disponibilidade contínua.
          </p>

          <h2 className="text-lg font-medium">Uso aceitável</h2>
          <p>
            Você pode navegar e acessar os links livremente. Não é permitido
            tentar comprometer a segurança do site (varreduras automatizadas,
            exploração de vulnerabilidades ou sobrecarga do servidor).
          </p>

          <h2 className="text-lg font-medium">Propriedade e conteúdo de terceiros</h2>
          <p>
            Marcas, nomes e conteúdos de terceiros referenciados (GitHub,
            LinkedIn) pertencem aos respectivos titulares. Este site apenas
            aponta para eles.
          </p>

          <h2 className="text-lg font-medium">Alterações</h2>
          <p>
            Estes termos podem ser atualizados a qualquer momento; a data no
            topo da página reflete a última revisão.
          </p>

          <h2 className="text-lg font-medium">Contato</h2>
          <p>
            Dúvidas:{" "}
            <a
              href="mailto:shadow.voidh@gmail.com"
              className="text-[#0F7A5F] underline underline-offset-2"
            >
              shadow.voidh@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
