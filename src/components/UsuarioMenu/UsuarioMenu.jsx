import './UsuarioMenu.css'

const options = [
  {
    key: 'pagos',
    title: 'Pagos del club',
    eyebrow: 'Panel de pagos',
    description:
      'Consulta vencimientos, revisa el estado de tu cuota y accede a la informacion necesaria para mantener tu membresia al dia.',
    buttonLabel: 'Ir a pagos',
  },
  {
    key: 'cursos',
    title: 'Cursos online',
    eyebrow: 'Formacion',
    description:
      'Explora contenidos sobre cultivo, uso responsable y comunidad con materiales pensados para aprender a tu ritmo.',
    buttonLabel: 'Ver cursos',
  },
  {
    key: 'reprocann',
    title: 'Gestiona tu reprocann',
    eyebrow: 'Acompanamiento',
    description:
      'Centraliza el seguimiento de tu tramite, la documentacion requerida y los pasos para renovar o iniciar tu gestion.',
    buttonLabel: 'Gestionar tramite',
  },
]

function UsuarioMenu({ onBack, onNavigate }) {
  const handleWhatsAppClick = () => {
    const clubPhone = import.meta.env.VITE_CLUB_WHATSAPP_NUMBER?.replace(/\D/g, '')
    const message = 'Hola La Logia, quiero hablar con el club.'
    const whatsappUrl = clubPhone
      ? `https://wa.me/${clubPhone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="usuario-menu">
      <div className="usuario-menu__hero">
        <p className="usuario-menu__eyebrow">Espacio de usuario</p>
        <h1>Tu menu del club</h1>
        <p className="usuario-menu__lead">
          Desde aca podes acceder rapidamente a las gestiones y recursos principales de tu membresia.
        </p>
      </div>

      <div className="usuario-menu__grid">
        {options.map((option) => (
          <article key={option.title} className="usuario-menu__card">
            <p className="usuario-menu__card-eyebrow">{option.eyebrow}</p>
            <h2>{option.title}</h2>
            <p>{option.description}</p>
            <button
              type="button"
              className="usuario-menu__action"
              onClick={() => onNavigate(option.key)}
            >
              {option.buttonLabel}
            </button>
          </article>
        ))}

        <article className="usuario-menu__card usuario-menu__card--accent">
          <p className="usuario-menu__card-eyebrow">Contacto directo</p>
          <h2>Hablar por WhatsApp con el club</h2>
          <p>
            Abri una conversacion directa para resolver dudas, pedir ayuda con tu membresia o recibir acompanamiento.
          </p>
          <button type="button" className="usuario-menu__whatsapp" onClick={handleWhatsAppClick}>
            Abrir WhatsApp
          </button>
        </article>
      </div>

      <div className="usuario-menu__footer">
        <button type="button" className="usuario-menu__back" onClick={onBack}>
          Volver al menu principal
        </button>
      </div>
    </section>
  )
}

export default UsuarioMenu