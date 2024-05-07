import React, { useEffect, useState } from 'react';
import styles from './Pokemons.module.css';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPokemons(res.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={styles.pokemons}>
      <h1>Pokemons</h1>
      <ol>
        {pokemons.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ol>
    </div>
  );
}

export default Pokemons;
