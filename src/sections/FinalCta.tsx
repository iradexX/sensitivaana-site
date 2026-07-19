import { MessageCircle, ShieldCheck, Clock3 } from "lucide-react";
import { CONTACT } from "../config/contact";

const whatsappNumber = CONTACT.whatsapp;

export default function FinalCta() {
  const message =
    "Olá, vim pelo site e gostaria de informações sobre a consulta.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#0d0614] px-6 py-24">
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

      <div
        data-aos="zoom-in"
        className="relative mx-auto max-w-5xl rounded-3xl border border-yellow-500/20 bg-white/5 px-6 py-16 text-center shadow-2xl backdrop-blur-xl md:px-14"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Atendimento personalizado
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
          Encontre orientação para o seu momento
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Converse diretamente com a Sensitiva Ana e saiba como funciona o
          atendimento online, individual e sigiloso.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-yellow-400" size={20} />
            Atendimento sigiloso
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="text-yellow-400" size={20} />
            Resposta rápida
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-green-600"
        >
          <MessageCircle size={24} />
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}