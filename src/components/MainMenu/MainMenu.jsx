import './MainMenu.css'

function MainMenu({ onUserLogin, onGuestLogin }) {
  return (
    <section className="main-menu">
      {/* Contenedor principal del menu de acceso. */}
      <div className="main-menu__panel">
        <h1>LA LOGIA</h1>
        <p className="main-menu__description">
          Ingresa con tu cuenta para acceder a tu espacio o entra como invitado para conocer la plataforma.
        </p>

        <div className="main-menu__actions">
          {/* Boton para entrar al flujo de usuario registrado. */}
          <button type="button" className="main-menu__button main-menu__button--primary" onClick={onUserLogin}>
            Entrar como usuario
          </button>

          {/* Boton para navegar a la vista informativa como invitado. */}
          <button type="button" className="main-menu__button main-menu__button--secondary" onClick={onGuestLogin}>
            Entrar como invitado
          </button>
        </div>
      </div>
    </section>
  )
}

export default MainMenu