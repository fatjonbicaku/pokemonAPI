import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './Pokemons.module.css'

function Pokemons() {

 const [pokemons , setPokemons] = useState([])

  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0').then(res =>{
      setPokemons((prevPokemons)=> [...prevPokemons, ...res.data.results])
    }).catch((err)=> console.log(err))


  },[])

    console.log(pokemons);
  return (
   
    <div className={styles.pokemons}>
      <h1>Pokemons</h1>
    <ul>
    {pokemons.map((pokemon,index)=>{
      return <li key={index}>{pokemon.name}</li>
    })}</ul>
    </div>
    
   
  )
}

export default Pokemons