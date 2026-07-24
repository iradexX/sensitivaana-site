import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import heroDesktop from "../assets/images/hero-desktop.png";
import heroMobile from "../assets/images/hero-mobile.png";
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

const whatsappMessage =
  "Olá, vim pelo site e gostaria de saber como funciona a consulta com a Sensitiva Ana.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

function WhatsAppButton() {
  return (
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
      className="
        group
        relative
        inline-flex
        min-h-14
        w-full
        max-w-md
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-full
        bg-green-500
        px-6
        py-4
        text-base
        font-bold
        text-white
        shadow-[0_0_40px_rgba(34,197,94,0.5)]
        transition-colors
        duration-300
        hover:bg-green-600
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-green-300/70
        sm:w-auto
        sm:px-9
        sm:text-lg
      "
    >
      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/25
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <MessageCircle
        size={25}
        aria-hidden="true"
        className="relative shrink-0"
      />

      <span className="relative">Quero falar com a Sensitiva Ana</span>
    </motion.a>
  );
}

function TrustCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.95 }}
      className="
        mt-7
        grid
        w-full
        max-w-3xl
        grid-cols-1
        gap-3
        min-[700px]:grid-cols-3
      "
    >
      {trustItems.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="
            flex
            min-h-16
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-black/50
            px-4
            py-3
            text-sm
            font-medium
            text-gray-100
            backdrop-blur-md
          "
        >
          <Icon
            size={18}
            aria-hidden="true"
            className="shrink-0 text-yellow-400"
          />

          <span>{text}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[#05010d]"
    >
      {/* ========================================================= */}
      {/* MOBILE E TABLET */}
      {/* ========================================================= */}

      <div className="relative flex min-h-svh flex-col lg:hidden">
        {/* Área superior da foto */}
        <div className="relative h-[42vh] min-h-80 max-h-107.5 overflow-hidden">
          <motion.img
            src={heroMobile}
            alt="Sensitiva Ana realizando atendimento espiritual com cartas de Tarot"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="
              absolute
              inset-0
              h-full
              w-full
             object-top
             sm:object-[70%_10%]
             "
          />

          {/* Escurecimento leve sobre a foto */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Escurecimento nas laterais */}
          <div
            className="
              absolute
              inset-0
              bg-linear-to-r
              from-[#05010d]/65
              via-transparent
              to-[#05010d]/20
            "
          />

          {/* Transição da imagem para o conteúdo */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-40
              bg-linear-to-b
              from-transparent
              via-[#05010d]/70
              to-[#05010d]
            "
          />
        </div>

        {/* Conteúdo mobile */}
        <div
          className="
            relative
            z-10
            -mt-6
            flex
            flex-1
            flex-col
            items-center
            px-5
            pb-16
            text-center
            sm:px-8
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-400/35
              bg-black/65
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-yellow-300
              backdrop-blur-md
              sm:text-sm
            "
          >
            <Sparkles size={16} aria-hidden="true" />
            Consulta espiritual online
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="
           max-w-205
           text-[2.15rem]
           font-bold
            leading-[1.08]
           text-white
           drop-shadow-2xl
           min-[430px]:text-[2.45rem]
           sm:text-[2.9rem]
            md:text-[3.25rem]
"
          >
            Encontre clareza para sua vida{" "}
            <span
              className="
                bg-linear-to-r
                from-yellow-200
                via-yellow-400
                to-amber-500
                bg-clip-text
                text-transparent
              "
            >
              amorosa e espiritual
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-100
              sm:text-lg
              sm:leading-8
            "
          >
            Tire suas dúvidas sobre amor, relacionamentos, trabalho e vida
            espiritual por meio do Tarot, da Cartomancia e da Astrologia, com
            atendimento personalizado pelo WhatsApp.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="
              mt-4
              max-w-xl
              text-sm
              font-medium
              leading-6
              text-yellow-100/90
              sm:text-base
            "
          >
            Receba uma orientação individual para tomar suas decisões com mais
            segurança e tranquilidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 w-full"
          >
            <WhatsAppButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-gray-200
            "
          >
            <Clock3
              size={16}
              aria-hidden="true"
              className="text-green-400"
            />

            <span>Atendimento online com resposta rápida</span>
          </motion.div>

          <TrustCards />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-5 text-xs leading-5 text-gray-400 sm:text-sm"
          >
            Atendimento individual • Privacidade e sigilo • Disponível para
            todo o Brasil
          </motion.p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP */}
      {/* ========================================================= */}

      <div
        className="
          relative
          hidden
          min-h-svh
          items-center
          overflow-hidden
          px-10
          pb-20
          pt-28
          lg:flex
          xl:px-14
        "
      >
        {/* Imagem desktop */}
        <motion.img
          src={heroDesktop}
          alt="Sensitiva Ana realizando atendimento espiritual com cartas de Tarot"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Escurecimento geral */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Degradê lateral para proteger o texto */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-r
            from-[#05010d]
            via-[#05010d]/90
            to-transparent
          "
        />

        {/* Degradê vertical */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-b
            from-black/35
            via-transparent
            to-[#05010d]/95
          "
        />

        {/* Luz roxa */}
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.16, 0.28, 0.16],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[32%]
            top-1/2
            h-125
            w-125
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/25
            blur-[130px]
          "
        />

        {/* Conteúdo desktop */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-200 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-yellow-400/35
                bg-black/50
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-yellow-300
                backdrop-blur-md
              "
            >
              <Sparkles size={16} aria-hidden="true" />
              Consulta espiritual online
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="
                text-[4.1rem]
                font-bold
                leading-[1.04]
                text-white
                drop-shadow-2xl
                xl:text-[4.7rem]
              "
            >
              Encontre clareza para sua vida{" "}
              <span
                className="
                  bg-linear-to-r
                  from-yellow-200
                  via-yellow-400
                  to-amber-500
                  bg-clip-text
                  text-transparent
                "
              >
                amorosa e espiritual
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-gray-100
                xl:text-xl
              "
            >
              Tire suas dúvidas sobre amor, relacionamentos, trabalho e vida
              espiritual por meio do Tarot, da Cartomancia e da Astrologia, com
              atendimento personalizado pelo WhatsApp.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="
                mt-4
                max-w-2xl
                text-base
                font-medium
                leading-7
                text-yellow-100/90
              "
            >
              Receba uma orientação individual para tomar suas decisões com
              mais segurança e tranquilidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-9"
            >
              <WhatsAppButton />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="
                mt-4
                flex
                items-center
                gap-2
                text-sm
                text-gray-200
              "
            >
              <Clock3
                size={16}
                aria-hidden="true"
                className="text-green-400"
              />

              <span>Atendimento online com resposta rápida</span>
            </motion.div>

            <TrustCards />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-5 text-sm leading-5 text-gray-400"
            >
              Atendimento individual • Privacidade e sigilo • Disponível para
              todo o Brasil
            </motion.p>
          </div>
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
          className="
            absolute
            bottom-5
            left-1/2
            z-10
            hidden
            -translate-x-1/2
            focus-visible:outline-none
            xl:block
          "
        >
          <div
            className="
              flex
              h-11
              w-7
              justify-center
              rounded-full
              border
              border-yellow-400/50
              p-2
            "
          >
            <div className="h-2 w-1 rounded-full bg-yellow-400" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}