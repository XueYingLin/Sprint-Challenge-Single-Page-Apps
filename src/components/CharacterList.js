import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    const getList = () => {
      axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data);
        setList(response.data.results);
        setOriginalList(response.data.results);
      })
      .catch(error => {
        console.log("Server Error", error);
      })
    }
    getList();
  }, []);

  useEffect(() => {
    const results = originalList.filter(character =>
      character.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setList(results);
  }, [searchText]);

  const setSearch = (s) => {
    setSearchText(s);
  }

  return (
    
    <div>
      <SearchForm onSearch={setSearch} searchText={searchText} />
      <section className="character-list">
        <div>
        {list.map(character => (
          <CharacterCard 
            id={character.id}
            name={character.name} 
            image={character.image} />

        ))}
        </div>
      </section>
    </div>

  
  );
}
