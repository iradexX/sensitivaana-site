import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import heroImage from "../assets/images/hero-principal.png";
import { CONTACT } from "../config/contact";

const whatsappNumber = CONTACT.whatsapp;

const trustItems = [
  {
    icon: Star,
    text: "Mais de 30 anos de experiência",
  },
  {
    icon: CheckCircle2,
    text: "Mais de 5.000 consultas",
  },
  {
    icon: ShieldCheck,
    text: "Atendimento sigiloso",
  },
];

export default function Hero() {
  const message =
    "Olá, vim pelo site e gostaria de saber como funciona a consulta com a Sensitiva Ana.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#05010d] px-5 pb-20 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-32"
    >
      {/* Imagem principal */}
      <motion.img
        src={heroImage}
        alt="Sensitiva Ana realizando atendimento espiritual com cartas de Tarot"
        initial={{ scale: 1.07, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:object-[70%_center]"
      />

      {/* Escurecimento para melhorar a leitura */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/55 to-[#05010d]" />

      {/* Luz roxa decorativa */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.22, 0.38, 0.22],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/30 blur-[130px]"
      />

      {/* Luz dourada decorativa */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.14, 0.26, 0.14],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[32%] h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[100px]"
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Etiqueta superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/35 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 backdrop-blur-md sm:mb-6 sm:px-5 sm:text-sm sm:tracking-[0.25em]"
        >
          <Sparkles size={16} aria-hidden="true" />
          Consulta espiritual online
        </motion.div>

        {/* Título principal */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto max-w-5xl text-[2.65rem] font-bold leading-[1.05] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          Encontre clareza para sua vida{" "}
          <span className="bg-linear-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            amorosa e espiritual
          </span>
        </motion.h1>

        {/* Texto de apoio */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-100 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl"
        >
          Tire suas dúvidas sobre amor, relacionamentos, trabalho e vida
          espiritual por meio do Tarot, da Cartomancia e da Astrologia, com
          atendimento personalizado pelo WhatsApp.
        </motion.p>

        {/* Frase emocional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-sm font-medium text-yellow-100/90 sm:text-base"
        >
          Receba uma orientação individual para tomar suas decisões com mais
          segurança e tranquilidade.
        </motion.p>

        {/* Botão principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 sm:mt-9"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Sensitiva Ana pelo WhatsApp"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex min-h-14 w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-full bg-green-500 px-6 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-colors duration-300 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300/70 sm:w-auto sm:px-9 sm:text-lg"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />

            <MessageCircle
              size={25}
              aria-hidden="true"
              className="relative shrink-0"
            />

            <span className="relative">
              Quero falar com a Sensitiva Ana
            </span>
          </motion.a>
        </motion.div>

        {/* Informação abaixo do botão */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-200"
        >
          <Clock3 size={16} className="text-green-400" aria-hidden="true" />
          <span>Atendimento online com resposta rápida</span>
        </motion.div>

        {/* Provas de confiança */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mx-auto mt-7 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {trustItems.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm font-medium text-gray-100 backdrop-blur-md"
            >
              <Icon
                size={18}
                className="shrink-0 text-yellow-400"
                aria-hidden="true"
              />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Microtexto de segurança */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-5 text-xs leading-5 text-gray-400 sm:text-sm"
        >
          Atendimento individual • Privacidade e sigilo • Disponível para todo
          o Brasil
        </motion.p>
      </div>

      {/* Indicador para rolar */}
      <motion.a
        href="#sobre"
        aria-label="Ir para a seção sobre a Sensitiva Ana"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 focus-visible:outline-none sm:block"
      >
        <div className="flex h-11 w-7 justify-center rounded-full border border-yellow-400/50 p-2">
          <div className="h-2 w-1 rounded-full bg-yellow-400" />
        </div>
      </motion.a>
    </section>
  );
}