import React from "react"
import styled from "styled-components"

const InframeMap = styled.section`
  position: relative;
  width: 100%;
  background: #ddd;
  grid-column: 1/3;
  margin: 0;
  @media (max-width: 1140px) {
    grid-column: 1/5;
  }
  iframe {
    border: none;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`
const Map = () => {
  return (
    <InframeMap>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.468900696459!2d-48.69977757080404!3d-27.659320198925748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527351296989c3b%3A0x22a8b310802b79e9!2sResidencial%20Reserva%20do%20Tabuleiro!5e0!3m2!1sen!2sbr!4v1615914902758!5m2!1sen!2sbr"
      />
    </InframeMap>
  )
}

export default Map


