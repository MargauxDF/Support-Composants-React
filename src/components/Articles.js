import React, { useState } from "react";
import Article from "./Article";

// création const pour récupérer des objets avec diverses données
const articles = [
  { id: 1, animal: "cat", dateParution: "09/12/2020" },
  { id: 2, animal: "monkey", dateParution: "25/02/2022" },
  { id: 3, animal: "pigeon", dateParution: "12/03/2020" },
  { id: 4, animal: "horse", dateParution: "30/06/2021" },
  { id: 5, animal: "dolphin", dateParution: "22/01/2019" },
  { id: 6, animal: "tiger", dateParution: "08/04/2019" },
  { id: 7, animal: "bear", dateParution: "17/09/2018" },
];

export default function Articles() {
  // on créer un state pour récupérer la valeur recherchée
  const [searchInput, setSearchInput] = useState("");
  // on créer un state pour récupérer les résultats filtrés ou non 
  const [filteredResults, setFilteredResults] = useState(articles);
  
  // on créer une fonction pour rechercher un élément (searchValue = e.target.vakue récupérer plus bas)
  const searchItem = (searchValue) => {
    // on set cette valeur dans notre search input
    setSearchInput(searchValue);
    // on oublie pas de console.log pour vérifier ce qu'on récupère
    console.log(searchInput);
    // si valeur recherché n'est pas vide
    if (searchValue !== '') {
      // on filte les articles en fonction du mot clé
      const filteredItem = articles.filter((article) => {
        return Object.values(article) // récupère les keys de l’object
        .join("") // on les joint dans une string
        .toLowerCase() // on met tout en minuscule pour éviter les pbs de casse
        .includes(searchInput.toLowerCase()) // et on cherche si la string contient un des mots recherché qu’on converti en minuscule pour être sur de faire une recherche efficace
      })
      // on set nos Réstats de recherche avec les éléments filtrés
      setFilteredResults(filteredItem)
      // sinon on affiche le tableau d'articles initial
    } else {
      setFilteredResults(articles)
    }
  }

  return (
    <section id="featured-posts">
      <h2>Featured posts</h2>
      {/* On met un écouteur d'événement sur le changement de valeur auquel on attache l'événement et on récupère la valeur */}
      <input type="text" className="searchBar" placeholder="Rechercher un article" onChange={(e) => searchItem(e.target.value)} />
      {/* on map sur les articles pour en récupérer les props */}
      {filteredResults.map(( article, index) => <Article
            key={index}
            {...article}
          />
      )}
    </section>
  );
}
