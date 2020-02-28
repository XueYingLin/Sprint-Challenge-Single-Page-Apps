import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {

  const CharacterCardStyle= styled.div `
    background: #efefef;
    border: 1px solid #bfbfbf;
    padding: 20px;
    margin: 10px;
  `
  return (
    <CharacterCardStyle>
       <img src={props.image} />
      <p>{props.id}</p>
      <p>{props.name}</p>
     
    </CharacterCardStyle>
  )
}
