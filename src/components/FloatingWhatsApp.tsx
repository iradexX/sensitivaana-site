import { MessageCircle } from "lucide-react";

const whatsappNumber = "5562998739633";

export default function FloatingWhatsApp() {
  const message =
    "Olá, vim pelo site e gostaria de saber mais sobre as consultas.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Sensitiva Ana pelo WhatsApp"
      title="Falar no WhatsApp"
      className="
        fixed bottom-5 right-5 z-9999
        flex h-16 w-16 items-center justify-center
        rounded-full bg-green-500 text-white
        shadow-[0_8px_30px_rgba(34,197,94,0.45)]
        transition duration-300
        hover:-translate-y-1 hover:scale-110 hover:bg-green-600
        focus:outline-none focus:ring-4 focus:ring-green-300
      "
    >
      <MessageCircle size={34} strokeWidth={2.3} />

      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-500 opacity-25" />
    </a>
  );
}