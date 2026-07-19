import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import heroImage from "../assets/images/hero-principal.png";
import { CONTACT } from "../config/contact";

const whatsappNumber = CONTACT.whatsapp;

export default function Hero() {
  const message =
    "Olá, vim pelo site e gostaria de saber mais sobre as consultas.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05010d] px-6 py-28 text-center"
    >
      {/* Imagem com movimento suave */}
      <motion.img
        src={heroImage}
        alt="Sensitiva Ana"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Camada escura */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-[#05010d]" />

      {/* Luz roxa */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/30 blur-[130px]"
      />

      {/* Luz dourada */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[35%] h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/30 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 backdrop-blur-md"
        >
          <Sparkles size={17} />
          Orientação espiritual
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl font-bold leading-tight text-white drop-shadow-2xl sm:text-6xl md:text-8xl"
        >
          Encontre respostas para o seu{" "}
          <span className="bg-linear-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
            caminho
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl"
        >
          Consultas de Tarot, Astrologia e orientação espiritual com
          atendimento online, individual e sigiloso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_35px_rgba(34,197,94,0.45)] transition hover:bg-green-600"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <MessageCircle size={25} className="relative" />

            <span className="relative">Agendar consulta</span>
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-5 text-sm text-gray-300"
        >
          Atendimento online • Resposta rápida • Sigilo absoluto
        </motion.p>
      </div>

      {/* Indicador para rolar */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-11 w-7 justify-center rounded-full border border-yellow-400/50 p-2">
          <div className="h-2 w-1 rounded-full bg-yellow-400" />
        </div>
      </motion.a>
    </section>
  );
}