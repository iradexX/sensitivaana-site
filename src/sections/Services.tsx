import { motion } from "framer-motion";
import { CONTACT } from "../config/contact";
import {
  Heart,
  MoonStar,
  Sparkles,
  Stars,
  MessageCircle,
} from "lucide-react";

const whatsappNumber = CONTACT.whatsapp;

const services = [
  {
    title: "Consulta de Tarot",
    description:
      "Orientação para amor, trabalho, decisões e caminhos futuros por meio das cartas.",
    icon: Sparkles,
  },
  {
    title: "Consulta Amorosa",
    description:
      "Clareza sobre sentimentos, relacionamentos, reconciliação e vida afetiva.",
    icon: Heart,
  },
  {
    title: "Astrologia",
    description:
      "Compreenda suas características, desafios e possibilidades por meio dos astros.",
    icon: MoonStar,
  },
  {
    title: "Orientação Espiritual",
    description:
      "Acolhimento e direcionamento para momentos de dúvida, ansiedade e transformação.",
    icon: Stars,
  },
];

export default function Services() {
  const message =
    "Olá, vim pelo site e gostaria de saber mais sobre as consultas.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#090611] px-6 py-24"
    >
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-800/20 blur-[130px]" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Como posso ajudar
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Consultas para orientar o seu caminho
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Escolha o atendimento mais adequado para o seu momento e receba
            orientação com acolhimento, respeito e sigilo.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/4 p-7 shadow-xl backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/0 via-purple-600/0 to-purple-600/0 opacity-0 transition duration-500 group-hover:from-yellow-400/10 group-hover:via-purple-600/10 group-hover:to-transparent group-hover:opacity-100" />

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/0 blur-3xl transition duration-500 group-hover:bg-yellow-400/15" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-500/10 text-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.1)] transition duration-500 group-hover:shadow-[0_0_35px_rgba(250,204,21,0.3)]"
                  >
                    <Icon size={31} strokeWidth={1.8} />
                  </motion.div>

                  <h3 className="mt-7 text-2xl font-bold text-white transition group-hover:text-yellow-300">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    {service.description}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-yellow-400 transition hover:text-yellow-300"
                  >
                    <MessageCircle size={19} />
                    Saiba mais
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-transparent via-yellow-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}