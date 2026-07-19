import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { CONTACT } from "../config/contact";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-purple-900/50 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-wide text-yellow-400 sm:text-3xl"
        >
          Sensitiva Ana
        </a>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-8 font-medium text-white lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-yellow-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp desktop */}
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600 lg:flex"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

        {/* Botão hambúrguer */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/30 text-white transition hover:border-yellow-400 hover:text-yellow-400 lg:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-yellow-500/20 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/10 py-4 text-lg font-medium text-white transition hover:text-yellow-400"
                >
                  {item.label}
                </motion.a>
              ))}

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={21} />
                Falar pelo WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;