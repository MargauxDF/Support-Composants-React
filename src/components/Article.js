import React from "react";

export default function Article({id, animal, dateParution}) {
  return (
    <article>
      <h1>Article numero {id} about {animal}</h1>
      <p>{dateParution}</p>
    </article>
  );
}
