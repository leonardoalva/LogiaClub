import './UsuarioActionPage.css'

const cuotaStatusByMonth = [
  { month: 'Ene', status: 'al-dia' },
  { month: 'Feb', status: 'al-dia' },
  { month: 'Mar', status: 'al-dia' },
  { month: 'Abr', status: 'al-dia' },
  { month: 'May', status: 'al-dia' },
  { month: 'Jun', status: 'al-dia' },
  { month: 'Jul', status: 'pendiente' },
  { month: 'Ago', status: 'pendiente' },
  { month: 'Sep', status: 'pendiente' },
  { month: 'Oct', status: 'pendiente' },
  { month: 'Nov', status: 'pendiente' },
  { month: 'Dic', status: 'pendiente' },
]

function CuotaCalendar() {
  return (
    <div className="usuario-action-page__calendar-card">
      <div className="usuario-action-page__calendar-header">
        <div>
          <p className="usuario-action-page__calendar-eyebrow">Estado de cuota al dia</p>
          <h3>Calendario anual de pagos</h3>
        </div>

        <div className="usuario-action-page__calendar-legend" aria-label="Referencias de estado de cuota">
          <span className="usuario-action-page__legend-item">
            <span className="usuario-action-page__legend-dot usuario-action-page__legend-dot--paid" />
            Al dia
          </span>
          <span className="usuario-action-page__legend-item">
            <span className="usuario-action-page__legend-dot usuario-action-page__legend-dot--pending" />
            Pendiente
          </span>
        </div>
      </div>

      <div className="usuario-action-page__calendar-grid">
        {cuotaStatusByMonth.map(({ month, status }) => (
          <article
            key={month}
            className={`usuario-action-page__month usuario-action-page__month--${status}`}
          >
            <span className="usuario-action-page__month-name">{month}</span>
            <strong>{status === 'al-dia' ? 'Pagado' : 'Pendiente'}</strong>
          </article>
        ))}
      </div>
    </div>
  )
}

function UsuarioActionPage({ eyebrow, title, description, highlights, onBack }) {
  return (
    <section className="usuario-action-page">
      <div className="usuario-action-page__hero">
        <p className="usuario-action-page__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="usuario-action-page__lead">{description}</p>
      </div>

      <article className="usuario-action-page__panel">
        <h2>Acceso rapido</h2>

        <div className="usuario-action-page__highlights">
          {highlights.map((highlight) => (
            highlight === 'Estado de cuota al dia' ? (
              <CuotaCalendar key={highlight} />
            ) : (
              <span key={highlight} className="usuario-action-page__highlight">
                {highlight}
              </span>
            )
          ))}
        </div>
      </article>

      <div className="usuario-action-page__footer">
        <button type="button" className="usuario-action-page__back" onClick={onBack}>
          Volver al menu de usuario
        </button>
      </div>
    </section>
  )
}

export default UsuarioActionPage