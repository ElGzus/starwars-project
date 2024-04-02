import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router";
import "./homepage.css";

export const Homepage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsername("");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };



  return (
    <div className="homepage-body">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/starwars-project/src/principal/HomePage.jsx">
            Bienvenido {username || "Invitado"}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/starwars-project/src/Characters/Personajes.jsx">
                  Personajes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/starwars-project/src/testPlanet/Universo.jsx">
                  Planetas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/starwars-project/src/Movies/Peliculas.jsx">
                  Peliculas
                </a>
              </li>

            </ul>
            <button className="btn btn-danger" onClick={handleSignOut}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <div className="container-home container mt-5 card text-bg-dark bg-black" style={{
        width: "1050px",
        height: "auto",
        borderRadius: "10%",
      }}>

        <img
          className="d-flex justify-content-center"
          src="https://rlv.zcache.com/svc/getimage?id=41e2f561-842f-490d-935b-736d44324f22&view_crop=0%2C0%2C1%2C1&max_dim=300&uhmc=cwOCjfK-X8DJbxbIFmZFWiB5uSM1"
          alt="starwars logo"
          style={{
            width: "190px",
            height: "auto",
            margin: "auto",
          }}
        />

        <div className="container-1 container mt-5 card text-bg-dark bg-black" style={{
          width: "1000px",
          height: "auto",
          borderRadius: "10%",
        }}>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://w0.peakpx.com/wallpaper/29/611/HD-wallpaper-star-wars-warrior-lightsaber-sith-star-wars.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://w0.peakpx.com/wallpaper/289/421/HD-wallpaper-star-wars.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://w0.peakpx.com/wallpaper/117/935/HD-wallpaper-star-wars-the-rise-of-skywalker-new-star-wars-the-rise-of-skywalker-movies-2019-movies-star-wars.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://w0.peakpx.com/wallpaper/883/811/HD-wallpaper-argus-darth-vader-skin-star-wars.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://w0.peakpx.com/wallpaper/862/343/HD-wallpaper-star-wars-darth-vader-lightsaber-sith-star-wars.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


        <div className="d-flex justify-content-between mb-5">
          <img
            className="img-starw mb-3"
            src="https://e1.pxfuel.com/desktop-wallpaper/419/646/desktop-wallpaper-star-wars-x-wing-space-movies-black-backgrounds-x-wing-starfighter.jpg"
            alt="Halcon milenario"
            style={{
              width: "115px",
              height: "auto",
              transition: "transform 0.2s ease",
              borderRadius: "16%",
              animation: "slide2 20s infinite linear"
            }}
          />

          <img
            className="img-starw mb-3"
            src="https://elements-video-cover-images-0.imgix.net/files/306f55a3-8740-4112-a197-76713aea3dbb/inline_image_preview.jpg?auto=compress%2Cformat&h=394&w=700&fit=min&s=62a774b4b1736e5a14ecde996d6ad8dc"
            alt="Halcon milenario"
            style={{
              width: "115px",
              height: "auto",
              transition: "transform 0.2s ease",
              borderRadius: "20%",
              animation: "slide1 20s infinite linear, desvanecido 1s infinite linear"
            }}
          />

          <img
            className="img-starw mb-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LiflMOZjEjxFT8EoD32-4tigGLSKFcPOf8CMcsqR2zXKZOHH2kF6DKatwGYtqKf-sHk&usqp=CAU"
            alt="Halcon milenario"
            style={{
              width: "115px",
              height: "auto",
              transition: "transform 0.2s ease",
              borderRadius: "20%",
              animation: "slide 20s infinite linear"
            }}
          />
        </div>


        <div className="mt-5">
          <div className="accordion" id="accordionPanelsStayOpenExample bg-secondary">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  IMPERIO
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body bg-dark-subtle">
                <img
                    className="mx-5"
                    src="https://i.blogs.es/5382dc/death-star/1366_2000.jpg"
                    alt="Halcon milenario"
                    style={{
                      width: "100px",
                      height: "auto",
                      transition: "transform 0.2s ease",
                      borderRadius: "100%",
                      animation: "flyAnimation 16s infinite"
                    }}
                  />
                  <strong>Veo que te interesa saber sobre el imperio</strong> El Imperio Galáctico, y más tarde recordado como El Viejo Imperio, fue el gobierno galáctico y autocrático que procesó un imperio de galaxias que reemplazó a la República Galáctica en las secuelas de las Guerras Clon.
                  Alcanzando el poder en los últimos años de la República, el Lord Sith Darth Sidious aseguró gradualmente el gobierno bajo su control a través de Sheev Palpatine, el último Canciller Supremo de la República. A través de sus maquinaciones como Sidious y Palpatine, los Sith fueron restaurados a una posición de dominio en medio de la caída de la Orden Jedi y la marginación del Senado Galáctico. Sin los guardianes Jedi de paz y justicia para oponerse a él, Sidious puso fin a mil años de democracia; en su lugar instaló la regla absoluta de sí mismo como Emperador Galáctico.
                  Durante más de dos décadas, la oposición al régimen imperial fue reprimida implacablemente por las fuerzas armadas en rápido crecimiento del Imperio. Durante la mayor parte de la existencia del Imperio, el Senado Imperial permaneció dentro del Imperio como el último símbolo sobreviviente de la República. Con la finalización de la Estrella de la Muerte, el Emperador se sintió lo suficientemente seguro para disolver el cuerpo de representantes galácticos mientras mantenía su control sobre la galaxia a través de un colectivo de gobernadores del sector y el temor general que inspiraría la nueva estación de batalla. Sin embargo, el creciente resentimiento hacia el gobierno Imperial condujo gradualmente al surgimiento de varios movimientos de resistencia que finalmente culminaron en la formación de la Alianza para Restaurar la República. Unidos por un objetivo común, la Alianza se convirtió en una amenaza viable para el Imperio después de su exitoso robo de los planos de la Estrella de la Muerte y la subsiguiente destrucción de la estación en la Batalla de Yavin.
                  A lo largo de la Guerra Civil Galáctica, las fuerzas imperiales y de la Alianza lucharon en toda la galaxia en un conflicto que culminó con la muerte de Darth Sidious y su aprendiz, Darth Vader, en la Batalla de Endor en el 4 DBY. Con la extinción Sith, el Gran Visir del Consejo Imperial Regente, Mas Amedda, sucedió efectivamente a Palpatine como Emperador en todo menos en el nombre, pero tuvo un poder limitado más allá de Coruscant mientras el Imperio evolucionó completamente en una estratocracia dominada por oficiales militares. Fue durante este tiempo cuando el Imperio se dividió en una variedad de facciones separadas, feudos y remanentes, conocidos como Remanentes Imperiales, dominados por varios señores de la guerra, moffs disidentes, gobernadores, almirantes y generales debido a la falta de una línea de sucesión para el trono imperial y la cadena de mando poco clara mientras el gobierno imperial oficial permanecía en Coruscant. Sin embargo, cuando las fuerzas destrozadas del Imperio lucharon por mantener su esfuerzo de guerra contra el creciente impulso de la recién formada Nueva República, el poder de Amedda y el gobierno centralizado se desvaneció con el ascenso del Almirante de Flota Gallius Rax, un caudillo que controlaba la mayor fracción de la Armada Imperial.
                  Un año después del fallecimiento de Palpatine, Rax, que controlaba la flota imperial más grande y ocupaba el puesto de Consejero del Imperio, organizó el Remanente Imperial de Jakku mientras el Imperio tomaba su posición final en el mundo desértico de Jakku en la Batalla de Jakku contra el Nuevo República. Sin embargo, el Consejero Rax murió y el Imperio fue derrotado decisivamente por la República, consecuentemente resultando en su capitulación a la República a través de la firma del Concordato Galáctico en el 5 DBY que condujo a la disolución del gobierno imperial central, reduciendo el Imperio a un resto del estado que una vez fue. Durante la era de la Nueva República, lo que quedaba del Imperio se descentralizó y se transformó en un mosaico de posesiones territoriales independientes, todas políticamente unidas por la tradición y los ideales imperiales, aunque encerradas en estrictos tratados de desarme y duras reparaciones. Una de estas entidades se formó en Core and Inner Rim, que se vio obligada a permanecer dentro de sus fronteras. Un nuevo gobierno en Coruscant, dirigido por el Gran Visir Mas Amedda y supervisado por la República, se formó, aunque era una administración provincial que tenía poco poder real.
                  Sin embargo, a pesar de la caída del Imperio, su legado perduró durante décadas en las Regiones Desconocidas del espacio, donde antiguos oficiales imperiales, nobles, tecnólogos, soldados y leales, entre ellos la Gran Almirante Rae Sloane y el Comandante Brendol Hux, habían abandonado la nave para después la Batalla de Jakku a través de los esfuerzos de Rax y una Contingencia secreta ideada por Darth Sidious basada en el conocimiento proporcionado por el Gran Almirante Thrawn, nativo de las Regiones Desconocidas. Allí, formaron una junta militar llamada la Primera Orden, y comenzaron a construir sus fuerzas militares en secreto y tramando su eventual regreso al poder y la recuperación del legado y la causa perdidos del Imperio.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  REBELDES
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body bg-dark-subtle">
                  <img
                    className="mx-5"
                    src="https://elcomercio.pe/resizer/TnNgWOuGpVY3hez2n36WaSEhAws=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/44OZTQPLXNGPDBWJ35QND7KXMA.jpg"
                    alt="Halcon milenario"
                    style={{
                      width: "100px",
                      height: "auto",
                      transition: "transform 0.2s ease",
                      borderRadius: "100%",
                      animation: "flyAnimation 16s infinite"
                    }}
                  />
                  <strong>Veo que te interesan los rebeldes</strong> La Alianza para Restaurar la República, comúnmente conocida como la Alianza Rebelde, la Alianza, la Rebelión, la Primera Rebelión, y rara vez los Separatistas, fue un movimiento de resistencia formado por Bail Organa y Mon Mothma para oponerse al reinado del Imperio Galáctico. La Alianza se formó a partir de un movimiento menos organizado para oponerse al Imperio ya existente, que era dirigido secretamente por Organa. Este primer grupo se unió a partir de una serie de células rebeldes, que incluía a la tripulación del Espíritu y a la Célula Fénix. El Grupo de Resistencia de Atrivis fue una de las primeras células en unirse a lo que Mothma comenzó a llamar «la Alianza», antes del establecimiento formal de la Alianza para Restaurar la República. La Alianza fue declarada pública y de manera formal con la Declaración de la Alianza Rebelde y el documento de la Declaración de Rebelión.
                  La Alianza y las células anteriores nacieron del descontento general dentro del Imperio de aquellos que deseaban restaurar la Antigua República. Sus esfuerzos fueron dirigidos por miembros renegados en el Senado Imperial, como Mon Mothma, Bail Organa y, más tarde, su hija Leia Organa, y sus miembros eran ciudadanos del Imperio y desertores de las Fuerzas Armadas Imperiales, como Jan Dodonna, Ryder Azadi y Wedge Antilles. Fundados y unidos por Organa y Ahsoka Tano, los primeros rebeldes fueron asistidos por Jedi sobrevivientes, como Kanan Jarrus, y su padawan, Ezra Bridger. Los veteranos de las Guerras Clon como el Capitán Rex también ayudaron en el movimiento inicial.
                  A diferencia de librar una guerra total, la Alianza libró una guerra de atrición contra el gobierno, estableciendo pequeñas bases en toda la galaxia en lugar de controlar un planeta entero.
                  Cuando la Alianza robó los planos del arma definitiva del Imperio, la Estrella de la Muerte, y destruyó la estación espacial en la Batalla de Yavin con la ayuda de Luke Skywalker, la marea de la guerra comenzó a cambiar, y la amenaza rebelde comenzó a ser tomada en serio por el Imperio. La Rebelión continuó participando en batallas contra el Imperio en la Guerra Civil Galáctica. Sin embargo, bajo el mando de Darth Vader, las fuerzas Imperiales lograron derrotar a la Alianza en Hoth, forzandolos a dispersar sus fuerzas para sobrevivir.
                  Finalmente, la Alianza prevaleció contra el Imperio y lo dañó críticamente al lanzar un ataque contra la segunda Estrella de la Muerte durante su construcción en lo que se convertiría en la Batalla de Endor. No solo logrando destruir la superarma, sino que la Armada Imperial quedó severamente paralizada por la pérdida de uno de sus Superdestructores Estelares, y Luke Skywalker redimió a su padre, Darth Vader, quién mató al Emperador Sheev Palpatine, antes de morir en la batalla. La Alianza pronto se reorganizó en la incipiente Nueva República, que luego derrotaría al Imperio en la Batalla de Jakku, y lo obligaría a rendirse finalmente firmando el Concordato Galáctico, terminando efectivamente la guerra.
                  Para el momento de la Batalla de Yavin, la Alianza Rebelde había elegido una ave estelar roja como símbolo y logotipo.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  DROIDES
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body bg-dark-subtle">
                <img
                    className="mx-5"
                    src="https://st1.uvnimg.com/dims4/default/f8a066e/2147483647/thumbnail/1024x576/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fd%2Fdroides_de_batalla_star_wars_2.jpg"
                    alt="Halcon milenario"
                    style={{
                      width: "100px",
                      height: "auto",
                      transition: "transform 0.2s ease",
                      borderRadius: "20%",
                      animation: "flyAnimation 16s infinite"
                    }}
                  />
                  <strong>Quieres convertirte en un droide?</strong> Droide, acortamiento de Androide, es el término dado a los robots: seres mecánicos que poseen inteligencia artificial. Eran utilizados en una variedad de roles y ambientes considerados muy cansados o muy peligrosos para los seres humanos y para las otras especies. Los droides también eran usados en campos que requerían una extensa especialización y conocimiento, tales como los droides médicos y los droides astromecánicos.
                  Dependiendo de su diseño y de su propósito, los droides eran totalmente obedientes, capaces de almacenar gran cantidad de información en sus extensas memorias y matemáticamente precisos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
