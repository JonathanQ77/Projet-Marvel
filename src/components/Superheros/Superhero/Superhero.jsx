import classes from "./Superhero.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Superhero({
  nom,
  description = "Pas de description pour l'instant.",
  films = ["Aucun film pour ce superhero"],
  photo = "https://st2.depositphotos.com/4326917/9505/v/450/depositphotos_95051378-stock-illustration-user-icon-vector.jpg",
  details = "Aucun nouveau détail",
  estLePrefere,
  superheroClique = () => {},
  ...props
}) {
  console.log(classes);

  // States
  const [montrerLesDetails, setMontrerLesDetails] = useState(false);
  const [afficherModale, setAfficherModale] = useState(false);

  // Fonction
  const nomClique = (evenement) => {
    evenement.stopPropagation();
    setAfficherModale(true);
  };

  useEffect(() => {
    if (afficherModale) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [afficherModale]);
  return (
    <div
      className={`${classes.superhero} ${
        estLePrefere && classes.superheroPrefere
      }`}
      onClick={() => superheroClique(nom)}
      style={{ position: "relative" }}
    >
      {afficherModale &&
        createPortal(
          <div
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              position: "absolute",
              bottom: 0,
              right: 0,
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(evenement) => {
              evenement.stopPropagation();
              setAfficherModale(false);
            }}
          >
            <div style={{ padding: 30, background: "white" }}>
              <b>Informations</b>
              <ul>
                <li>Taille : 1,85</li>
                <li>Couleur des cheveux : Noirs</li>
                <li>Couleur des yeux : Bleus</li>
              </ul>
            </div>
          </div>,
          document.body
        )}
      {/* Carte */}
      <img alt={`${nom} photo`} src={photo} />
      <h2
        onClick={(evenement) => nomClique(evenement)}
        className=" text-xl font-bold"
      >
        {nom}
      </h2>
      <p>{description}</p>

      {/* Details */}
      <div
        className={`font-bold mb-[10px] cursor-pointer inline-block ${
          montrerLesDetails && "text-blue-950"
        } hover:text-red-marvel`}
        onClick={(evenement) => {
          evenement.stopPropagation();
          setMontrerLesDetails((statePrecedent) => !statePrecedent);
        }}
      >
        {montrerLesDetails ? "Masquer les détails" : "En savoir plus"}
      </div>
      {montrerLesDetails && (
        <div
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {details}
        </div>
      )}

      {/* Films */}
      <div style={{ marginTop: 10 }}>
        <b>Films :</b>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
