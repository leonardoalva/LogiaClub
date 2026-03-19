import "./WhatsAppCard.css";

function WhatsAppCard({ className = "" }) {
  // Construye y abre el enlace a WhatsApp usando el numero configurado en .env.
  const handleWhatsAppClick = () => {
    const clubPhone = import.meta.env.VITE_CLUB_WHATSAPP_NUMBER?.replace(/\D/g, "");
    const message = "Hola, quiero hablar con el club.";
    const whatsappUrl = clubPhone
      ? `https://wa.me/${clubPhone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article className={`whatsapp-card${className ? ` ${className}` : ""}`}>
      <p className="whatsapp-card__eyebrow">Contacto directo</p>
      <h2>Hablar por WhatsApp con el club</h2>
      <p>
        Abri una conversacion directa para resolver dudas, pedir ayuda con tu
        membresia o recibir acompanamiento.
      </p>
      <button
        type="button"
        className="whatsapp-card__button"
        onClick={handleWhatsAppClick}
      >
        Abrir WhatsApp
      </button>
    </article>
  );
}

export default WhatsAppCard;