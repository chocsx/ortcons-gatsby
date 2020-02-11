import styled from "styled-components"

export const HeaderTop = styled.header`
  width: 100%;
  height: 130px;
  position: fixed;
  z-index: 9999;
  transition: 0.3s;
  top: 0;
  left: 0;
  background: ${props =>
    props.transparent ? "transparent" : "rgba(19,18,21)"};
  &.active {
    background: rgba(19, 18, 21, 0.85);
    box-shadow: 0px 5px 8px -5px rgba(19, 18, 21, 0.75);
  }
  @media (max-width: 1140px) {
    height: 80px;
    background: rgba(19, 18, 21, 0.95);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  @media (max-width: 1140px) {
    height: 80px;
  }
`

export const Logo = styled.img`
  width: 195.35px;
  height: 56px;
  transition: 0.3s;
  &.active {
    width: 100px;
    height: 26px;
  }
  @media (max-width: 1140px) {
    width: 150px;
    height: 45px;
    margin-left: 45px;
    margin-top: 20px;
  }
`

export const Navigator = styled.nav`
  height: 100%;
  width: calc(100% - 250px);
  display: flex;
  flex-direction: row;
  a {
    transition: 0.3s;
  }
  &.active {
    a {
      font-size: 0.69em;
    }
  }
  @media (max-width: 1106px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 80px;
    background: rgba(19, 18, 21, 0.95);
    display: flex;
    padding-top: 105px;
  }
`

export const MenuList = styled.ul`
  position: relative;
  width: 100%;
  height: 130px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
  @media (max-width: 1140px) {
    height: 100%;
  }
  @media (max-width: 1106px) {
    flex-direction: column;
    flex: 0px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const MenuItem = styled.li`
  margin: 0px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  user-select: none;
  cursor: pointer;
  max-width: 300px;
  @media (max-width: 1140px) {
    a {
      font-size: 0.65em;
    }
  }
  @media (max-width: 1106px) {
    justify-content: flex-start;
    width: 100%;
    height: 75px;
    cursor: pointer;
  }
  a {
    box-shadow: inset 0 15px 1px -5px transparent;
    padding: 10px 25px;
    height: 100%;
    display: block;
    flex: 1;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active,
    &:hover {
      box-shadow: inset 0 10px 1px -5px #f6a500;
      color: #f6a500;
    }
    @media (max-width: 1106px) {
      text-align: left;
      align-items: flex-start;
      justify-content: flex-start;
      display: block;
      padding: 20px 25px;
    }
  }
`
