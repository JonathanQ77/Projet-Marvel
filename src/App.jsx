import "./index.css";
import "./App.css";
import Superhero from "./components/Superheros/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";
import styled from "styled-components";
import marvel from "../public/logoMarvel.svg";
import loki from "./assets/loki.jpeg";
import { useRef, useState, useEffect } from "react";

export default function App() {
  // States
  const [superheroPrefere, setSuperheroPrefere] = useState();
  const [nouveauSuperhero, setNouveauSuperhero] = useState({
    nom: "Anonyme",
    photo: "",
    description: "",
  });

  // Variables
  const nom = useRef();
  const description = useRef();
  const photo = useRef();

  // Cycles
  useEffect(() => {
    photo.current.focus();
  }, [
    nouveauSuperhero.nom,
    nouveauSuperhero.description,
    nouveauSuperhero.photo,
  ]);
  useEffect(() => {
    nom.current.value = "";
    description.current.value = "";
    photo.current.value = "";
  }, [nouveauSuperhero.nom]);

  // Fonction
  const superheroClique = (nom) => {
    setSuperheroPrefere(nom);
  };
  const sauvegarderLeSuperhero = (event) => {
    event.preventDefault();
    setNouveauSuperhero((ancienSuperhero) => ({
      ...ancienSuperhero,
      nom: nom.current.value,
    }));
    setNouveauSuperhero((ancienSuperhero) => ({
      ...ancienSuperhero,
      photo: photo.current.value,
    }));
    setNouveauSuperhero((ancienSuperhero) => ({
      ...ancienSuperhero,
      description: description.current.value,
    }));
  };
  /*
  const Form = styled.div`
    border: 1px solid black;
    padding: 15px;
    background-color: ${nouveauSuperhero.nom != "Anonyme"
      ? "green"
      : "transparent"};
    &:hover {
      border: 1px solid #ed1d24;
    }
    @media (max-width: 500px) {
      &:hover {
        border: 1px solid orange;
      }
    }
  `;
  */

  return (
    <main>
      <img className=" w-28 mx-auto mt-10 " src={marvel} alt="Logo MARVEL" />
      <Superheros>
        {/* Superhero numéro 1 */}
        <Superhero
          nom="Iron Man"
          description="Tony Stark, alias Iron Man est un super-héros évoluant dans
                l'univers Marvel de la maison d'édition Marvel Comics."
          details="À partir de 1968, le personnage a son propre comic, The Invincible Iron Man, publié par Marvel jusqu'en 1996 avec le no 332.

                    Au début de sa carrière de super-héros, Tony Stark avait pour principale occupation de lutter contre les communistes dans le contexte de la guerre froide, de manière beaucoup plus systématique que les autres personnages de Marvel Comics. Ce cadre historique a progressivement disparu, au profit d'aventures de science-fiction. Le contexte de la série Iron Man a ensuite continué d'évoluer avec les années, le personnage affrontant en majorité des menaces de type technologique.
                    
                    Le corps d'Iron Man est celui d'un homme normal, sans pouvoir surnaturel ou surhumain, mais rendu surpuissant quand il revêt l'une des nombreuses armures de haute technologie conçues à l'aide des impressionnantes compétences scientifiques de Stark. L'armure, pouvant voler à des vitesses supersoniques, confère à Tony Stark une force et une résistance surhumaines et est équipée de multiples armes, capteurs et systèmes électroniques."
          films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]}
          photo="./ironman.jpeg"
          estLePrefere={superheroPrefere == "Iron Man"}
          superheroClique={superheroClique}
        />

        {/* Superhero numéro 2 */}
        <Superhero
          nom="Loki"
          description="Appartenant aux groupes des Aesir, Loki est le dieu de
                        la malice, de la discorde et des illusions."
          details="Le personnage est inspiré de son homologue de la mythologie nordique. Une première adaptation de Loki, différente de celle du personnage actuel, était apparue dans Venus (en) #6, publié par Timely Comics en août 1949.

                    Loki tient le rôle du pire ennemi de son demi-frère Thor. À la base un super-vilain, il est parfois dépeint comme un anti-héros. Dieu de la tromperie et manipulateur hors pair, c'est un puissant sorcier qui a été adopté par Odin, Loki appartenant à la race des géants des glaces de Jötunheim.
                    
                    Le personnage a été adapté à l'univers cinématographique Marvel où il est interprété par l'acteur Tom Hiddleston."
          photo={loki}
          estLePrefere={superheroPrefere == "Loki"}
          superheroClique={superheroClique}
        />

        {/* Superhero numéro 3 */}
        <Superhero
          nom="Captain America"
          description="Steven « Steve » Rogers, alias Captain America est un
                        super-héros évoluant dans l'univers Marvel de la maison
                        d'édition Marvel Comics."
          details="Conçu à l'origine comme une figure patriotique américaine en réaction au régime nazi, le personnage devient actif avant même l'entrée en guerre officielle des États-Unis dans la Seconde Guerre mondiale, en décembre 1941. Dès le début de sa publication, il est perçu comme le porte-drapeau des valeurs démocratiques de son pays et comme un défenseur du m
                    
                    onde libre contre les totalitarismes, notamment le Troisième Reich3.

                    Doté d'une condition physique au summum du potentiel humain, Captain America est un combattant hors pair, un chef-né et un stratège militaire accompli. Il porte un costume reconnaissable entre tous, inspiré du drapeau américain et est équipé d'un bouclier quasi indestructible, composé d'un alliage d'acier et du fictif vibranium, qu'il utilise comme une protection ainsi que comme une arme."
          photo="https://www.pause-canap.com/media/wysiwyg/captain-america-2-scaled.jpg"
          estLePrefere={superheroPrefere == "Captain America"}
          superheroClique={superheroClique}
        />

        <Superhero
          nom={nouveauSuperhero.nom}
          description={
            nouveauSuperhero.description != ""
              ? nouveauSuperhero.description
              : undefined
          }
          photo={
            nouveauSuperhero.photo != "" ? nouveauSuperhero.photo : undefined
          }
        />

        {/* Paramétrage de notre superhero */}
        <form className="p-[15px] bg-red-marvel ">
          <h3 className="text-center uppercase font-semibold my-5">
            Crée ton propre superhero
          </h3>

          <div>
            <label className="label" htmlFor="photo">
              Photo
            </label>
            <input
              className="input"
              type="text"
              name="photo"
              id="photo"
              ref={photo}
              style={{
                padding: 5,
                fontSize: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label className="label" htmlFor="nom">
              Nom
            </label>
            <input
              className="input"
              type="text"
              name="nom"
              id="nom"
              ref={nom}
              style={{
                padding: 5,
                fontSize: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label className="label" htmlFor="description">
              Description
            </label>
            <input
              className="input"
              type="text"
              name="description"
              id="description"
              ref={description}
              style={{
                padding: 5,
                fontSize: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: 5,
            }}
            onClick={(event) => sauvegarderLeSuperhero(event)}
          >
            <button className="bg-red-900 text-white px-5 py-1 mt-5 rounded hover:bg-red-400 duration-200">
              Modifier
            </button>
          </div>
        </form>
      </Superheros>
    </main>
  );
}
