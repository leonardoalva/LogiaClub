import './UsuarioActionPage.css'




function UsuarioActionPage({ eyebrow, title, description, highlights, onBack }) {
  return (
    <section className="usuario-action-page">
      {/* Hero con el contenido principal de la seccion seleccionada. */}
      <div className="usuario-action-page__hero">
        <p className="usuario-action-page__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="usuario-action-page__lead">{description}</p>
      </div>

      <article className="usuario-action-page__panel">
        <h2>Acceso rapido</h2>

        <div className="usuario-action-page__highlights">
          {/* Muestra items simples o el calendario completo cuando corresponde. */}
          {highlights.map((highlight) => (
            <span key={highlight} className="usuario-action-page__highlight">
              {highlight}
            </span>
          ))}
        </div>
      </article>

      {/* Navegacion de regreso al menu del usuario. */}
      <div className="usuario-action-page__footer">
        <button type="button" className="usuario-action-page__back" onClick={onBack}>
          Volver al menu de usuario
        </button>
      </div>
    </section>
  )
}

export default UsuarioActionPage