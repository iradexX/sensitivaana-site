import { MessageCircle, Mail, Globe2 } from "lucide-react";
import { CONTACT } from "../config/contact";

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/50 bg-black px-6 py-12 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Sensitiva Ana
          </h2>

          <p className="mt-4 max-w-sm leading-7">
            Consultas de Tarot, Astrologia e orientação espiritual com
            atendimento online, individual e sigiloso.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Navegação</h3>

          <nav className="mt-4 flex flex-col gap-3">
            <a href="#inicio" className="transition hover:text-yellow-400">
              Início
            </a>
            <a href="#sobre" className="transition hover:text-yellow-400">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-yellow-400">
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="transition hover:text-yellow-400"
            >
              Depoimentos
            </a>
            <a href="#faq" className="transition hover:text-yellow-400">
              Perguntas frequentes
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contato</h3>

          <div className="mt-4 flex flex-col gap-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-green-400"
            >
              <MessageCircle size={20} />
              +55 62 998739633
            </a>

            <a
              href="mailto:sensitivaana1005@gmail.com"
              className="flex items-center gap-3 transition hover:text-yellow-400"
            >
              <Mail size={20} />
              sensitivaana1005@gmail.com
            </a>

            <a
              href="https://sensitivaana.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-yellow-400"
            >
              <Globe2 size={20} />
              sensitivaana.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sensitiva Ana. Todos os direitos reservados.
      </div>
    </footer>
  );
}