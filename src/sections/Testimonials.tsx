import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Clock3,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";
import { CONTACT } from "../config/contact";

const whatsappNumber = CONTACT.whatsapp;

const testimonials = [
  {
    name: "João P. de Goiânia",
    location: "GO",
    text: "A consulta me trouxe muita clareza sobre minha vida amorosa. Fui atendida com muito respeito e carinho.",
  },
  {
    name: "Julio C. São Paulo",
    location: "SP",
    text: "Gostei muito da atenção e da forma como tudo foi explicado. Recomendo o atendimento.",
  },
  {
    name: "Maria H. Brasília",
    location: "DF",
    text: "Saí da consulta muito mais tranquila e confiante para tomar minhas decisões.",
  },
];

export default function Testimonials() {
  const message =
    "Olá, vim pelo site e gostaria de agendar uma consulta.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#07040d] px-6 py-24"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-purple-700/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Barra de confiança */}
        <motion.div
          data-aos="fade-up"
          className="grid gap-6 rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-4"
        >
          <div className="text-center">
            <Star
              className="mx-auto mb-3 text-yellow-400"
              fill="currentColor"
            />
            <h3 className="text-3xl font-bold text-white">5.0</h3>
            <p className="text-gray-300">Avaliação</p>
          </div>

          <div className="text-center">
            <HeartHandshake className="mx-auto mb-3 text-yellow-400" />
            <h3 className="text-3xl font-bold text-white">Atendimento</h3>
            <p className="text-gray-300">Humanizado</p>
          </div>

          <div className="text-center">
            <ShieldCheck className="mx-auto mb-3 text-yellow-400" />
            <h3 className="text-3xl font-bold text-white">100%</h3>
            <p className="text-gray-300">Sigilo absoluto</p>
          </div>

          <div className="text-center">
            <Clock3 className="mx-auto mb-3 text-yellow-400" />
            <h3 className="text-3xl font-bold text-white">Rápido</h3>
            <p className="text-gray-300">Atendimento pelo WhatsApp</p>
          </div>
        </motion.div>

        {/* Título */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Depoimentos
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            O que dizem sobre o atendimento
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="flex h-full min-h-[320px] flex-col rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-gray-300">
                “{item.text}”
              </p>

              <div className="mt-auto pt-8">
                <h4 className="font-bold text-white">{item.name}</h4>

                <p className="text-sm text-yellow-400">
                  Cliente • {item.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Botão final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_35px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-600"
          >
            <MessageCircle size={24} />
            Falar com a Sensitiva Ana no WhatsApp
          </a>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <span>✓ Atendimento online</span>
            <span>✓ Consulta individual</span>
            <span>✓ Sigilo absoluto</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}