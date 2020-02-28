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
      <span>todo: character</span>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <img src={props.image} />
    </CharacterCardStyle>
  )
}
