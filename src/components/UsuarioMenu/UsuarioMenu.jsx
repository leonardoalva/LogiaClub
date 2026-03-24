import "./UsuarioMenu.css";
import WhatsAppCard from "../WhatsAppCard/WhatsAppCard";

// Opciones disponibles dentro del espacio privado del usuario.
const options = [
  {
    key: "cursos",
    title: "Cursos online",
    eyebrow: "Formacion",
    description:
      "Explora contenidos sobre cultivo, uso responsable y comunidad con materiales pensados para aprender a tu ritmo.",
    buttonLabel: "Ver cursos",
  },
  {
    key: "reprocann",
    title: "Gestiona tu reprocann",
    eyebrow: "Acompanamiento",
    description:
      "Centraliza el seguimiento de tu tramite, la documentacion requerida y los pasos para renovar o iniciar tu gestion.",
    buttonLabel: "Gestionar tramite",
  },
];

function UsuarioMenu({ onBack, usuarioReprocann }) {
  // Si usuarioReprocann es false, muestra reprocann primero.
  const sortedOptions = usuarioReprocann === false
    ? [options.find((o) => o.key === 'reprocann'), ...options.filter((o) => o.key !== 'reprocann')]
    : options

  return (
    <section className="usuario-menu">
      {/* Encabezado de bienvenida al espacio de usuario. */}
      <div className="usuario-menu__hero">
        <p className="usuario-menu__eyebrow">Espacio de usuario</p>
        <h1>Tu menu del club</h1>
        <p className="usuario-menu__lead">
          Desde aca podes acceder rapidamente a las gestiones y recursos
          principales de tu membresia.
        </p>
      </div>

      <div className="usuario-menu__grid">
        {/* Recorre las opciones configuradas y crea una tarjeta por cada seccion. */}
        {sortedOptions.map((option) => (
          <article key={option.title} className="usuario-menu__card">
            <p className="usuario-menu__card-eyebrow">{option.eyebrow}</p>
            <h2>{option.title}</h2>
            <p>{option.description}</p>
            <button
              type="button"
              className="usuario-menu__action"
            >
              {option.buttonLabel}
            </button>
          </article>
        ))}

        {/* Tarjeta fija para iniciar una conversacion directa por WhatsApp. */}
        <WhatsAppCard className="usuario-menu__whatsapp-card" />
      </div>

      {/* Accion para salir del menu de usuario y volver al inicio. */}
      <div className="usuario-menu__footer">
        <button type="button" className="usuario-menu__back" onClick={onBack}>
          Volver al menu principal
        </button>
      </div>
    </section>
  );
}

export default UsuarioMenu;
