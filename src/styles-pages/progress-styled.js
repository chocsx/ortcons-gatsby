import styled from "styled-components"
import Img from "gatsby-image"

export const WrapImages = styled.section`
  padding: 105px 0;
  line-height: 0;
   
  -webkit-column-count: 5;
  -webkit-column-gap:   0px;
  -moz-column-count:    5;
  -moz-column-gap:      0px;
  column-count:         5;
  column-gap:           0px; 
`
export const ImageObra = styled(Img)`

  border: 1px solid red
  width: 100% !important;
  height: auto !important;

`