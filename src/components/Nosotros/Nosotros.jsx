import "./Nosotros.css";
import WhatsAppCard from "../WhatsAppCard/WhatsAppCard";

const Nosotros = ({ onBack }) => {
  return (
    <section className="nosotros">
      {/* Presentacion principal del club y su propuesta general. */}
      <div className="nosotros__hero">
        <p className="nosotros__eyebrow">Quiénes somos</p>
        <h1>LA LOGIA CLUB CANNÁBICO</h1>
        <p className="nosotros__lead">
          La Logia es un círculo reservado donde convergen quienes sienten
          afinidad por la planta y el conocimiento que la envuelve. No se trata
          solo de un club, sino de un espacio de iniciación y encuentro, donde
          la experiencia cannábica se vive desde la conciencia, la información y
          el respeto. Aquí, cada integrante transita su propio camino acompañado
          por una comunidad que valora la discreción, la calidad y la
          profundidad de lo que se comparte.
        </p>
      </div>

      <div className="nosotros__content">
        {/* Bloque narrativo que resume la identidad y el enfoque del club. */}
        <section className="nosotros__section nosotros__section--story">
          <span className="nosotros__kicker">Nuestra esencia</span>
          <h2>Un espacio resguardado, con identidad y propósito</h2>
          <p>
            La Logia nace como un punto de resguardo para quienes sienten el
            llamado de la planta y el conocimiento que la rodea. Un espacio
            donde la pasión se comparte en confianza, donde el cultivo se
            transforma en práctica consciente y el uso responsable en un
            principio fundamental. Aquí, cada encuentro tiene sentido y cada
            experiencia deja aprendizaje.
          </p>
          <p>
            Nuestra propuesta integra comunidad, guía y una atmósfera
            cuidadosamente resguardada. Un entorno pensado para quienes valoran
            la discreción, el respeto mutuo y la claridad en el camino. Más que
            un espacio social, es un ámbito donde se cultiva tanto la planta
            como la conciencia y el conocimiento.
          </p>
        </section>

        {/* Tarjetas con los ejes principales de la propuesta. */}
        <section className="nosotros__highlights">
          <article className="nosotros__card">
            <span className="nosotros__card-number">01</span>
            <h3>Comunidad</h3>
            <p>
              Construimos un espacio de encuentro real entre personas que
              comparten una misma filosofía: el respeto por la planta, el
              cultivo consciente y la conexión humana. Fomentamos vínculos
              genuinos en un entorno cuidado, sereno y privado, donde cada
              integrante aporta su experiencia y se nutre de la del resto. La
              comunidad no es solo un concepto, es el corazón vivo del club.
            </p>
          </article>

          <article className="nosotros__card">
            <span className="nosotros__card-number">02</span>
            <h3>Aprendizaje</h3>
            <p>
              Entendemos el cannabis como un camino de conocimiento. Generamos
              espacios donde se comparten saberes sobre cultivo, genética, usos
              responsables y cultura cannábica, integrando tanto la experiencia
              práctica como el fundamento teórico. Buscamos formar cultivadores
              conscientes, informados y comprometidos con un uso respetuoso y
              responsable.
            </p>
          </article>

          <article className="nosotros__card">
            <span className="nosotros__card-number">03</span>
            <h3>Experiencia</h3>
            <p>
              Diseñamos cada detalle para ofrecer una experiencia que trascienda
              el consumo. Desde la estética hasta la energía del espacio, todo
              está pensado para generar una sensación de calma, identidad y
              pertenencia. Un refugio donde bajar el ritmo, reconectar y habitar
              el momento con presencia.
            </p>
          </article>
        </section>

        {/* Lista de valores que guian la experiencia del club. */}
<section className="nosotros__section nosotros__section--values">
  <span className="nosotros__kicker">Lo que defendemos</span>
  <ul className="nosotros__list">
    <li>
      La confidencialidad como principio sagrado: cada miembro es resguardado
      dentro del círculo, donde el respeto no se negocia.
    </li>
    <li>
      La claridad del conocimiento: promovemos un entendimiento profundo y
      responsable del uso, lejos de la desinformación.
    </li>
    <li>
      La experiencia consciente: cada encuentro es cuidado en su energía,
      seguridad y propósito.
    </li>
    <li>
      La construcción de lazos reales: una comunidad que se fortalece desde la
      confianza, el compromiso y la presencia.
    </li>
  </ul>
</section>

        {/* Tarjeta de contacto reutilizable para iniciar una conversacion por WhatsApp. */}
        <WhatsAppCard className="nosotros__whatsapp-card" />

        {/* Boton para volver a la pantalla inicial. */}
        <div className="nosotros__footer">
          <button
            className="nosotros__back-button"
            type="button"
            onClick={onBack}
          >
            Volver al menu principal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
