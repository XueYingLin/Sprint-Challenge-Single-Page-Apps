import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const url = "https://rickandmortyapi.com/api/character/";
    const getList = () => {
      axios
      .get(`https://cors-anywhere.herokuapp.com/ ${url}`)
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
    </section>
  );
}
