import "./Nosotros.css";

const Nosotros = ({ onBack }) => {
  return (
    <section className="nosotros">
      <div className="nosotros__hero">
        <p className="nosotros__eyebrow">Quienes somos</p>
        <h1>LA LOGIA CLUB CANNABICO</h1>
        <p className="nosotros__lead">
          La Logia es un club cannabico privado que busca reunir a personas con
          interes en una experiencia informada, responsable y humana alrededor
          del cannabis.
        </p>
      </div>

      <div className="nosotros__content">
        <section className="nosotros__section nosotros__section--story">
          <span className="nosotros__kicker">Nuestra esencia</span>
          <h2>Un espacio seguro, cercano y con identidad propia</h2>
          <p>
            Creamos un entorno donde los miembros pueden compartir su pasion,
            aprender sobre cultivo, consumo responsable y bienestar, y vivir
            una experiencia social mas cuidada que la de un espacio comun.
          </p>
          <p>
            La propuesta combina comunidad, acompanamiento y una atmosfera
            reservada para quienes valoran el respeto, la informacion clara y
            la calidad del entorno.
          </p>
        </section>

        <section className="nosotros__highlights">
          <article className="nosotros__card">
            <span className="nosotros__card-number">01</span>
            <h3>Comunidad</h3>
            <p>
              Un punto de encuentro para conectar con personas afines en un
              ambiente sereno y privado.
            </p>
          </article>

          <article className="nosotros__card">
            <span className="nosotros__card-number">02</span>
            <h3>Aprendizaje</h3>
            <p>
              Espacios para descubrir beneficios, usos responsables y cultura
              cannabica con mas contexto.
            </p>
          </article>

          <article className="nosotros__card">
            <span className="nosotros__card-number">03</span>
            <h3>Experiencia</h3>
            <p>
              Una propuesta pensada para disfrutar con calma, identidad visual y
              una sensacion de refugio.
            </p>
          </article>
        </section>

        <section className="nosotros__section nosotros__section--values">
          <span className="nosotros__kicker">Lo que defendemos</span>
          <ul className="nosotros__list">
            <li>Privacidad y respeto por cada miembro.</li>
            <li>Informacion clara sobre el uso responsable.</li>
            <li>Una experiencia social cuidada y segura.</li>
            <li>Construccion de comunidad desde la confianza.</li>
          </ul>
        </section>

        <section className="nosotros__section nosotros__section--closing">
          <h2>¿Querés ser parte?</h2>
          <span className="nosotros__kicker">Comunicate con nosotros para unirte al club</span>
          <p>
            Estamos aquí para responder tus preguntas y guiarte en el proceso de membresía,
            también gestionamos tu permiso de reprocann y te acompañamos en todo el proceso.
          </p>
        </section>

        <div className="nosotros__footer">
          <button className="nosotros__back-button" type="button" onClick={onBack}>
            Volver al menu principal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
