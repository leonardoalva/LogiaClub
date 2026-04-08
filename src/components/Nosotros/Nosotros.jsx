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
          La Logia es un espacio creado para personas que buscan sentirse
          cómodas, informarse y conectar con otras que comparten el mismo
          interés por el cannabis. Más allá del club, nos importa generar un
          ambiente ameno, cuidado y sin vueltas, donde cada uno pueda acercarse
          a su manera.
        </p>
      </div>

      <div className="nosotros__content">
        {/* Bloque narrativo que resume la identidad y el enfoque del club. */}
        <section className="nosotros__section nosotros__section--story">
          <span className="nosotros__kicker">Nuestra esencia</span>
          <h2>Un espacio cercano, con identidad propia</h2>
          <p>
            La Logia nació con una idea simple: armar un lugar donde se pueda
            hablar de cannabis con naturalidad, sin prejuicios y con respeto.
            Nos interesa que cada persona se sienta bienvenida y pueda vivir la
            experiencia desde su propio camino.
          </p>
          <p>
            Acá se mezclan buena compañía, información útil y un clima relajado.
            Buscamos que el espacio se sienta genuino, reservado y agradable.
          </p>
        </section>

        {/* Tarjetas con los ejes principales de la propuesta. */}
        <section className="nosotros__highlights">
          <article className="nosotros__card">
            {/* <span className="nosotros__card-number"></span> */}
            <h3>Comunidad</h3>
            <p>
              Lo valioso está en el intercambio, en las
              charlas que surgen y en los vínculos que se van construyendo de
              forma natural.
            </p>
          </article>

          <article className="nosotros__card">
            {/* <span className="nosotros__card-number"></span> */}
            <h3>Aprendizaje</h3>
            <p>
              Compartimos información clara y útil sobre cultivo, genética y
              consumo responsable. La idea es que cada
              persona pueda sacarse dudas, aprender algo nuevo y sentirse más
              segura en su camino.
            </p>
          </article>
{/* 
          <article className="nosotros__card">
            <span className="nosotros__card-number">03</span>
            <h3>Experiencia</h3>
            <p>
              Cuidamos el ambiente para que cada visita se disfrute de verdad.
              Desde la energía del lugar hasta los pequeños detalles, todo está
              pensado para que te sientas a gusto, puedas relajarte y conectar
              con el momento.
            </p>
          </article>
           */}
        </section>

        {/* Lista de valores que guian la experiencia del club. */}
        <section className="nosotros__section nosotros__section--values">
          <span className="nosotros__kicker">Lo que nos guía</span>
          <ul className="nosotros__list">
            <li>
              La confidencialidad: cuidamos la privacidad de cada persona y el
              respeto dentro del espacio.
            </li>
            <li>
              La información clara: compartimos contenido útil, directo y con
              criterio.
            </li>
            <li>
              La experiencia consciente: priorizamos encuentros con sentido, en
              un ambiente cuidado.
            </li>
            <li>
              Los vínculos reales: creemos en una comunidad que se construye
              desde la confianza.
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
            Volver al menú principal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
