import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Clock3,
  HeartHandshake,
} from "lucide-react";

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
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#07040d] py-24 px-6"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-purple-700/15 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />

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
            <h3 className="text-3xl font-bold text-white">
              5.0
            </h3>
            <p className="text-gray-300">
              Avaliação
            </p>
          </div>

          <div className="text-center">
            <HeartHandshake
              className="mx-auto mb-3 text-yellow-400"
            />
            <h3 className="text-3xl font-bold text-white">
              Atendimento
            </h3>
            <p className="text-gray-300">
              Humanizado
            </p>
          </div>

          <div className="text-center">
            <ShieldCheck
              className="mx-auto mb-3 text-yellow-400"
            />
            <h3 className="text-3xl font-bold text-white">
              100%
            </h3>
            <p className="text-gray-300">
              Sigilo
            </p>
          </div>

          <div className="text-center">
            <Clock3
              className="mx-auto mb-3 text-yellow-400"
            />
            <h3 className="text-3xl font-bold text-white">
              Rápido
            </h3>
            <p className="text-gray-300">
              Atendimento Online
            </p>
          </div>
        </motion.div>

        {/* Título */}

        <div
          data-aos="fade-up"
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <span className="uppercase tracking-[0.3em] text-yellow-400 text-sm">
            Depoimentos
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            O que dizem sobre o atendimento
          </h2>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition"
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
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-yellow-400">
                  Cliente
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}