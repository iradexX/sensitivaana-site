import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "../config/contact";

const whatsappNumber = CONTACT.whatsapp;

const faqs = [
  {
    question: "As consultas são online?",
    answer:
      "Sim. Todo o atendimento é realizado de forma online, pelo WhatsApp, com comodidade, privacidade e sigilo.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é realizado antes da consulta. As formas disponíveis são informadas no atendimento pelo WhatsApp.",
  },
  {
    question: "As consultas são sigilosas?",
    answer:
      "Sim. Todas as informações compartilhadas durante a consulta são tratadas com total respeito, privacidade e sigilo.",
  },
  {
    question: "Posso fazer perguntas sobre amor, trabalho e família?",
    answer:
      "Sim. Durante a consulta você pode abordar questões amorosas, profissionais, familiares e espirituais.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Basta clicar em um dos botões do WhatsApp, enviar sua mensagem e aguardar as orientações para o agendamento.",
  },
  {
    question: "Quanto tempo dura a consulta?",
    answer:
      "A duração pode variar conforme o tipo de atendimento. Todas as informações são explicadas antes da confirmação.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const message =
    "Olá, vim pelo site e gostaria de tirar uma dúvida e agendar uma consulta.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="faq"
      data-aos="fade-left"
      className="relative overflow-hidden bg-black px-6 py-24"
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-800/15 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Tire suas dúvidas
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Perguntas frequentes
          </h2>

          <p className="mt-6 mb-14 text-gray-300">
            Veja as principais informações antes de agendar sua consulta.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-purple-800 bg-[#12081d]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 bg-[#170d26] p-6 text-left text-white transition hover:bg-[#211032]"
                >
                  <span className="font-semibold">{faq.question}</span>

                  <span className="shrink-0 text-2xl text-yellow-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-purple-800/50 bg-[#12081d] p-6 leading-7 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-lg text-gray-300">
            Ainda ficou com alguma dúvida?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_35px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-600"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp
          </a>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span>✓ Atendimento online</span>
            <span>✓ Resposta rápida</span>
            <span>✓ Sigilo absoluto</span>
          </div>
        </div>
      </div>
    </section>
  );
}