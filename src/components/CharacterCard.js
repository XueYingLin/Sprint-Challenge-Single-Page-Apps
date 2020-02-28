import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <span>todo: character</span>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <img src={props.image} />
    </div>
  )
}
