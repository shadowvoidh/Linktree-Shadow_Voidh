import { useEffect } from "react";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Política de privacidade — Shadow_Voidh";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F6FAFB] text-[#1B2426]">
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <h1 className="text-2xl font-semibold">Política de privacidade</h1>
        <p className="mt-2 text-sm text-[#1B2426]/60">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section className="mt-8 space-y-4 text-[15px] leading-relaxed">
          <p>
            Este site é uma página pessoal de links (Shadow_Voidh / Pedro
            Carnio) e não coleta dados por meio de formulários. As seções
            abaixo explicam o que acontece quando você visita ou clica em um
            dos links.
          </p>

          <h2 className="text-lg font-medium">O que é armazenado localmente</h2>
          <p>
            A preferência de tema (claro ou escuro) é mantida apenas na
            memória da página durante a sessão. Nenhum cookie de rastreamento
            é definido por este site.
          </p>

          <h2 className="text-lg font-medium">Links externos</h2>
          <p>
            Os links para GitHub, LinkedIn e e-mail levam a serviços de
            terceiros, cada um com sua própria política de privacidade. Este
            site não tem controle sobre o que esses serviços fazem com os
            dados coletados por eles.
          </p>

          <h2 className="text-lg font-medium">Hospedagem e registros de acesso</h2>
          <p>
            O provedor de hospedagem pode registrar informações técnicas
            padrão (endereço IP, navegador, data e hora do acesso) para fins
            de segurança e diagnóstico, conforme sua própria política.
          </p>

          <h2 className="text-lg font-medium">Contato</h2>
          <p>
            Dúvidas sobre esta política podem ser enviadas para{" "}
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
