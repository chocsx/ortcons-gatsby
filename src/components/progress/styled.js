import styled from "styled-components"

export const Wrapper = styled.div`
  width: 40%;
  display: block;
  margin: 0 auto;
  text-align: center;
`
export const Label = styled.span`
  color: #666;
`

export const Bar = styled.div`
  box-sizing: content-box;
  height: 20px; /* Can be anything */
  position: relative;
  margin: 10px 0 20px 0; /* Just for demo spacing */
  background: #555;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  span {
    display: block;
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    /* background-color: rgb(43, 194, 83); */
    background-color: #f6a500;
    background-image: linear-gradient(
      center bottom,
      rgb(43, 194, 83) 37%,
      rgb(84, 240, 84) 69%
  );
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
  }
`
