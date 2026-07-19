import { useState } from "react";

const faqs = [
  {
    question: "As consultas são online?",
    answer: "Sim. Todo o atendimento é realizado de forma online, com total comodidade e sigilo."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento é realizado antes da consulta, por Pix ou outro método disponível."
  },
  {
    question: "As consultas são sigilosas?",
    answer: "Sim. Todas as informações compartilhadas são tratadas com absoluto sigilo."
  },
  {
    question: "Posso fazer perguntas sobre amor, trabalho e família?",
    answer: "Sim. Durante a consulta você pode abordar qualquer área da sua vida."
  }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Perguntas Frequentes
        </h2>

        <p className="text-gray-300 text-center mt-6 mb-16">
          Tire suas principais dúvidas antes da consulta.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 rounded-2xl border border-purple-800 overflow-hidden"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full text-left p-6 bg-[#170d26] text-white flex justify-between items-center"
            >
              <span className="font-semibold">
                {faq.question}
              </span>

              <span className="text-yellow-400 text-2xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="bg-[#12081d] p-6 text-gray-300 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}