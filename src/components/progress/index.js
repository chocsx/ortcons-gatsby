import React from "react";
import { Bar, Wrapper, Label } from "./styled"

export default function Progress(props) {
  console.log(props);
  return (
    <Wrapper>
      <Label>{ props.label}</Label>
      <Bar>
        <span style={{width: props.porcentage+'%'}}></span>
      </Bar>
    </Wrapper>
  )
}