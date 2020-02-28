import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    const getList = () => {
      axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data);
        setList(response.data.results);
      })
      .catch(error => {
        console.log("Server Error", error);
      })
    }
    getList();
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <div>
        {list.map(character => (
          <CharacterCard 
            id={character.id}
            name={character.name} 
            image={character.image} />

        ))}
      </div>

    </section>
  );
}
