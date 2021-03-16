import React from "react";
import { Bar, Wrapper, Label } from "./styled"

export default function Progress(props) {
  return (
    <Wrapper>
      <Label>{ props.label} ({props.porcentage+'%'})</Label>
      <Bar>
        <span style={{width: props.porcentage+'%'}}></span>
      </Bar>
    </Wrapper>
  )
}