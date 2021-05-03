import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Map from "../../../components/map/map"
import FormHaveInterest from "../../../components/form-have-interest/FormHaveInterest"
import Layout from "../../../components/layout"
import { Grid, FlexList, Button } from "../../../theme/styled"
import {
  SectionDevelopment,
  Box,
  MaxImage,
  WrapperImage,
  MinImage,
  ListMin,
  SectionMap,
} from "../../../styles-pages/apartment-styled";


const Apartment = () => {

  const data = useStaticQuery(graphql`
    query Apto5Construction {
      images:allFile(filter:{
        relativeDirectory:{
          eq: "developments/5"
        }
      }){
        nodes {
          childImageSharp{
            original {
              src
            }
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  `)

  const [imageActive, setImageActive] = useState({ img: { src: null } })
  const [arrayImages, setArrayImages] = useState([])
  const [slideMode, setSlideMode] = useState(false)

  useEffect(() => {
    async function getImgs() {
      const imgs = await data.images.nodes.reduce((interator, item, index) => {
        if (item.childImageSharp) {
          interator.push({
            id: index,
            img: item.childImageSharp.original,
            min: item.childImageSharp.fluid,
          })
        }
        return interator
      }, [])
      setImageActive(imgs[0])
      setArrayImages(imgs)
    }
    getImgs()
  }, [])

  const handleClickImage = id => {
    return setImageActive(arrayImages.find(item => item.id === id))
  }

  const toggleSlide = () => {
    setSlideMode(!slideMode)
  }

  return (
    <Layout>
      <SectionDevelopment>
        <Grid>
          <ListMin>
            {arrayImages.map(item => (
              <MinImage
                key={item.id}
                className={imageActive.id === item.id ? "active" : ""}
                onClick={() => handleClickImage(item.id)}
                src={item.min.src}
              ></MinImage>
            ))}
          </ListMin>
          <WrapperImage className={slideMode ? "slideOn" : "slideOff"}>
            <MaxImage src={imageActive.min.src}></MaxImage>
            <Button
              className="btn-zoom btn-icon"
              onClick={() => toggleSlide()}
              background="#131416"
              width="70px"
              height="70px"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4924 1L1.5 18.9924"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.4473 1.0072H19.4852V6.04508"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.53788 18.9924H1.5V13.9546"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4924 19.0004L1.5 1.008"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4852 13.9546V18.9924H14.4473"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 6.04588V1.008H6.53788"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </WrapperImage>

          <Box className={slideMode ? "content slideOn" : "content slideOff"}>
            <h1>RESERVA DO TABULEIRO</h1>
            <p>
              Você de frente para o melhor da vida! O Reserva do Tabuleiro é um
              empreendimento moderno e refinado, pensado para você que busca
              conforto, bom gosto e bem-estar. Localizado de frente para a Serra
              do Tabuleiro em Palhoça/SC, é o encontro perfeito do estilo de
              vida urbano com a natureza, garantindo a qualidade de vida que
              você merece. São apartamentos deslumbrantes de até 74m² com 1 e 2
              dormitórios, ampla sala de estar, cozinha americana, área de
              serviço, sacada e churrasqueira. Tudo isso a poucos metros de uma
              área de mais de 80 hectares de puro verde. Além disso, sua
              infraestrutura possui Salão de Festas, Skylounge e ainda conta com
              uma área comercial no andar térreo do prédio, onde lojas de
              diferentes tipos de produtos e serviços estarão ao alcance do
              elevador. Muito mais praticidade para a sua vida. Venha viver de
              frente para o melhor da vida. Venha para o Reserva do Tabuleiro.
            </p>
          </Box>
          <Box className={slideMode ? "info slideOn" : "info slideOff"}>
            <FlexList flow="column" justifyContent="center">
              <div className="item">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.729 19.6463V21"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.269 16.4432C19.269 18.0462 17.9568 19.3591 16.3531 19.3591H4.41592C2.81217 19.3591 1.5 18.0462 1.5 16.4432V15.8964C1.5 14.2919 2.81217 12.9805 4.41592 12.9805H16.3531C17.9568 12.9805 19.269 14.2919 19.269 15.8964V16.4432V16.4432Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.68695 12.8383L5.3738 8.19107H10.3841"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.082 12.8383L15.3951 8.19107H10.3841"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.69803 16.1698H5.6078"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1604 16.1698H16.0702"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.0392 19.6463V21"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.63521 6.57673L11.3125 1L19.4589 7.01412"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>1 Vaga</p>
              </div>
              <div className="item">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1"
                    maskUnits="userSpaceOnUse"
                    x="-0.672119"
                    y="-0.64093"
                    width="26"
                    height="20"
                    fill="black"
                  >
                    <rect
                      fill="white"
                      x="-0.672119"
                      y="-0.64093"
                      width="26"
                      height="20"
                    />
                    <path d="M4.69804 0.35907C3.63734 0.35907 2.77671 1.23311 2.77671 2.29621V7.97171H2.27512C1.21292 7.97171 0.328296 8.82602 0.328296 9.88334V16.0856C0.327743 16.0998 0.327743 16.114 0.328296 16.1281V18.3032C0.328067 18.3761 0.342519 18.4483 0.370791 18.5155C0.391499 18.5678 0.420189 18.6165 0.455837 18.66C0.466666 18.6718 0.478013 18.6832 0.489844 18.694C0.489822 18.6968 0.489822 18.6996 0.489844 18.7024C0.503433 18.7144 0.517616 18.7258 0.53234 18.7364C0.595646 18.7881 0.66979 18.8248 0.749266 18.844C0.828741 18.8631 0.911506 18.8641 0.991411 18.8468H3.04877C3.19307 18.8468 3.33145 18.7895 3.43349 18.6875C3.53552 18.5856 3.59285 18.4473 3.59286 18.3031V16.6718H21.0039V18.3031C21.0039 18.4473 21.0612 18.5856 21.1632 18.6875C21.2653 18.7895 21.4037 18.8468 21.548 18.8468H23.6223C23.7102 18.8629 23.8007 18.8571 23.8859 18.83C23.8887 18.83 23.8915 18.83 23.8943 18.83C23.9267 18.8188 23.9581 18.8045 23.9878 18.7875C23.9906 18.7875 23.9935 18.7875 23.9963 18.7875C24.073 18.7415 24.1373 18.6773 24.1833 18.6006C24.2399 18.5117 24.2694 18.4084 24.2683 18.3032V16.1281C24.2691 16.1112 24.2691 16.0942 24.2683 16.0772V9.88338C24.2683 8.82606 23.3837 7.97173 22.3215 7.97173H21.8199V2.29624C21.8199 1.23315 20.9593 0.359103 19.8986 0.359103H4.69794L4.69804 0.35907ZM4.69804 1.44661H19.8987C20.3657 1.44661 20.7318 1.80726 20.7318 2.29621V7.97171H18.7085C18.7831 7.74821 18.8275 7.50123 18.8275 7.24955V5.41435C18.8275 4.96377 18.7052 4.55038 18.4704 4.21638C18.2356 3.88237 17.8517 3.61316 17.3992 3.61316H14.8148C14.3623 3.61316 13.9784 3.88237 13.7436 4.21638C13.5088 4.55038 13.3866 4.96377 13.3866 5.41435V7.24955C13.3866 7.50123 13.431 7.74821 13.5056 7.97171H11.0911C11.1658 7.74821 11.2102 7.50123 11.2102 7.24955V5.41435C11.2102 4.96377 11.0879 4.55038 10.8531 4.21638C10.6183 3.88237 10.2344 3.61316 9.78192 3.61316H7.19747C6.74499 3.61316 6.36114 3.88237 6.1263 4.21638C5.89146 4.55038 5.76925 4.96377 5.76925 5.41435V7.24955C5.76925 7.50123 5.81362 7.74821 5.88825 7.97171H3.86489V2.29621C3.86489 1.80726 4.23106 1.44661 4.69804 1.44661ZM7.19747 4.70066H9.78192C9.81881 4.70066 9.87597 4.71644 9.96045 4.83661C10.045 4.95678 10.122 5.16885 10.122 5.41435V7.24955C10.122 7.49503 10.045 7.70707 9.96045 7.82729C9.87597 7.94746 9.81881 7.96321 9.78192 7.96321H7.19747C7.16058 7.96321 7.10342 7.94744 7.01898 7.82729C6.93445 7.70707 6.85743 7.49503 6.85743 7.24955V5.41435C6.85743 5.16885 6.93445 4.95678 7.01898 4.83661C7.10342 4.71639 7.16058 4.70066 7.19747 4.70066ZM14.8148 4.70066H17.3992C17.4361 4.70066 17.4933 4.71644 17.5778 4.83661C17.6623 4.95678 17.7393 5.16885 17.7393 5.41435V7.24955C17.7393 7.49503 17.6623 7.70707 17.5778 7.82729C17.4933 7.94746 17.4361 7.96321 17.3992 7.96321H14.8148C14.7779 7.96321 14.7208 7.94744 14.6363 7.82729C14.5518 7.70707 14.4747 7.49503 14.4747 7.24955V5.41435C14.4747 5.16885 14.5518 4.95678 14.6363 4.83661C14.7208 4.71639 14.7779 4.70066 14.8148 4.70066ZM2.27512 9.05923H3.21881C3.29171 9.07434 3.36693 9.07434 3.43983 9.05923H21.1739C21.2468 9.07434 21.322 9.07434 21.3949 9.05923H22.3216C22.813 9.05923 23.1802 9.42313 23.1802 9.88334V12.0414L1.41648 12.1179V9.88334C1.41648 9.42313 1.78375 9.05923 2.27512 9.05923ZM23.1802 13.1289V15.5844H3.04877H1.41648V13.2054L23.1802 13.1289ZM1.41648 16.6719H2.50468V17.7594H1.41648V16.6719ZM22.092 16.6719H23.1802V17.7594H22.092V16.6719Z" />
                  </mask>
                  <path
                    d="M4.69804 0.35907C3.63734 0.35907 2.77671 1.23311 2.77671 2.29621V7.97171H2.27512C1.21292 7.97171 0.328296 8.82602 0.328296 9.88334V16.0856C0.327743 16.0998 0.327743 16.114 0.328296 16.1281V18.3032C0.328067 18.3761 0.342519 18.4483 0.370791 18.5155C0.391499 18.5678 0.420189 18.6165 0.455837 18.66C0.466666 18.6718 0.478013 18.6832 0.489844 18.694C0.489822 18.6968 0.489822 18.6996 0.489844 18.7024C0.503433 18.7144 0.517616 18.7258 0.53234 18.7364C0.595646 18.7881 0.66979 18.8248 0.749266 18.844C0.828741 18.8631 0.911506 18.8641 0.991411 18.8468H3.04877C3.19307 18.8468 3.33145 18.7895 3.43349 18.6875C3.53552 18.5856 3.59285 18.4473 3.59286 18.3031V16.6718H21.0039V18.3031C21.0039 18.4473 21.0612 18.5856 21.1632 18.6875C21.2653 18.7895 21.4037 18.8468 21.548 18.8468H23.6223C23.7102 18.8629 23.8007 18.8571 23.8859 18.83C23.8887 18.83 23.8915 18.83 23.8943 18.83C23.9267 18.8188 23.9581 18.8045 23.9878 18.7875C23.9906 18.7875 23.9935 18.7875 23.9963 18.7875C24.073 18.7415 24.1373 18.6773 24.1833 18.6006C24.2399 18.5117 24.2694 18.4084 24.2683 18.3032V16.1281C24.2691 16.1112 24.2691 16.0942 24.2683 16.0772V9.88338C24.2683 8.82606 23.3837 7.97173 22.3215 7.97173H21.8199V2.29624C21.8199 1.23315 20.9593 0.359103 19.8986 0.359103H4.69794L4.69804 0.35907ZM4.69804 1.44661H19.8987C20.3657 1.44661 20.7318 1.80726 20.7318 2.29621V7.97171H18.7085C18.7831 7.74821 18.8275 7.50123 18.8275 7.24955V5.41435C18.8275 4.96377 18.7052 4.55038 18.4704 4.21638C18.2356 3.88237 17.8517 3.61316 17.3992 3.61316H14.8148C14.3623 3.61316 13.9784 3.88237 13.7436 4.21638C13.5088 4.55038 13.3866 4.96377 13.3866 5.41435V7.24955C13.3866 7.50123 13.431 7.74821 13.5056 7.97171H11.0911C11.1658 7.74821 11.2102 7.50123 11.2102 7.24955V5.41435C11.2102 4.96377 11.0879 4.55038 10.8531 4.21638C10.6183 3.88237 10.2344 3.61316 9.78192 3.61316H7.19747C6.74499 3.61316 6.36114 3.88237 6.1263 4.21638C5.89146 4.55038 5.76925 4.96377 5.76925 5.41435V7.24955C5.76925 7.50123 5.81362 7.74821 5.88825 7.97171H3.86489V2.29621C3.86489 1.80726 4.23106 1.44661 4.69804 1.44661ZM7.19747 4.70066H9.78192C9.81881 4.70066 9.87597 4.71644 9.96045 4.83661C10.045 4.95678 10.122 5.16885 10.122 5.41435V7.24955C10.122 7.49503 10.045 7.70707 9.96045 7.82729C9.87597 7.94746 9.81881 7.96321 9.78192 7.96321H7.19747C7.16058 7.96321 7.10342 7.94744 7.01898 7.82729C6.93445 7.70707 6.85743 7.49503 6.85743 7.24955V5.41435C6.85743 5.16885 6.93445 4.95678 7.01898 4.83661C7.10342 4.71639 7.16058 4.70066 7.19747 4.70066ZM14.8148 4.70066H17.3992C17.4361 4.70066 17.4933 4.71644 17.5778 4.83661C17.6623 4.95678 17.7393 5.16885 17.7393 5.41435V7.24955C17.7393 7.49503 17.6623 7.70707 17.5778 7.82729C17.4933 7.94746 17.4361 7.96321 17.3992 7.96321H14.8148C14.7779 7.96321 14.7208 7.94744 14.6363 7.82729C14.5518 7.70707 14.4747 7.49503 14.4747 7.24955V5.41435C14.4747 5.16885 14.5518 4.95678 14.6363 4.83661C14.7208 4.71639 14.7779 4.70066 14.8148 4.70066ZM2.27512 9.05923H3.21881C3.29171 9.07434 3.36693 9.07434 3.43983 9.05923H21.1739C21.2468 9.07434 21.322 9.07434 21.3949 9.05923H22.3216C22.813 9.05923 23.1802 9.42313 23.1802 9.88334V12.0414L1.41648 12.1179V9.88334C1.41648 9.42313 1.78375 9.05923 2.27512 9.05923ZM23.1802 13.1289V15.5844H3.04877H1.41648V13.2054L23.1802 13.1289ZM1.41648 16.6719H2.50468V17.7594H1.41648V16.6719ZM22.092 16.6719H23.1802V17.7594H22.092V16.6719Z"
                    fill="white"
                  />
                  <path
                    d="M4.69804 0.35907C3.63734 0.35907 2.77671 1.23311 2.77671 2.29621V7.97171H2.27512C1.21292 7.97171 0.328296 8.82602 0.328296 9.88334V16.0856C0.327743 16.0998 0.327743 16.114 0.328296 16.1281V18.3032C0.328067 18.3761 0.342519 18.4483 0.370791 18.5155C0.391499 18.5678 0.420189 18.6165 0.455837 18.66C0.466666 18.6718 0.478013 18.6832 0.489844 18.694C0.489822 18.6968 0.489822 18.6996 0.489844 18.7024C0.503433 18.7144 0.517616 18.7258 0.53234 18.7364C0.595646 18.7881 0.66979 18.8248 0.749266 18.844C0.828741 18.8631 0.911506 18.8641 0.991411 18.8468H3.04877C3.19307 18.8468 3.33145 18.7895 3.43349 18.6875C3.53552 18.5856 3.59285 18.4473 3.59286 18.3031V16.6718H21.0039V18.3031C21.0039 18.4473 21.0612 18.5856 21.1632 18.6875C21.2653 18.7895 21.4037 18.8468 21.548 18.8468H23.6223C23.7102 18.8629 23.8007 18.8571 23.8859 18.83C23.8887 18.83 23.8915 18.83 23.8943 18.83C23.9267 18.8188 23.9581 18.8045 23.9878 18.7875C23.9906 18.7875 23.9935 18.7875 23.9963 18.7875C24.073 18.7415 24.1373 18.6773 24.1833 18.6006C24.2399 18.5117 24.2694 18.4084 24.2683 18.3032V16.1281C24.2691 16.1112 24.2691 16.0942 24.2683 16.0772V9.88338C24.2683 8.82606 23.3837 7.97173 22.3215 7.97173H21.8199V2.29624C21.8199 1.23315 20.9593 0.359103 19.8986 0.359103H4.69794L4.69804 0.35907ZM4.69804 1.44661H19.8987C20.3657 1.44661 20.7318 1.80726 20.7318 2.29621V7.97171H18.7085C18.7831 7.74821 18.8275 7.50123 18.8275 7.24955V5.41435C18.8275 4.96377 18.7052 4.55038 18.4704 4.21638C18.2356 3.88237 17.8517 3.61316 17.3992 3.61316H14.8148C14.3623 3.61316 13.9784 3.88237 13.7436 4.21638C13.5088 4.55038 13.3866 4.96377 13.3866 5.41435V7.24955C13.3866 7.50123 13.431 7.74821 13.5056 7.97171H11.0911C11.1658 7.74821 11.2102 7.50123 11.2102 7.24955V5.41435C11.2102 4.96377 11.0879 4.55038 10.8531 4.21638C10.6183 3.88237 10.2344 3.61316 9.78192 3.61316H7.19747C6.74499 3.61316 6.36114 3.88237 6.1263 4.21638C5.89146 4.55038 5.76925 4.96377 5.76925 5.41435V7.24955C5.76925 7.50123 5.81362 7.74821 5.88825 7.97171H3.86489V2.29621C3.86489 1.80726 4.23106 1.44661 4.69804 1.44661ZM7.19747 4.70066H9.78192C9.81881 4.70066 9.87597 4.71644 9.96045 4.83661C10.045 4.95678 10.122 5.16885 10.122 5.41435V7.24955C10.122 7.49503 10.045 7.70707 9.96045 7.82729C9.87597 7.94746 9.81881 7.96321 9.78192 7.96321H7.19747C7.16058 7.96321 7.10342 7.94744 7.01898 7.82729C6.93445 7.70707 6.85743 7.49503 6.85743 7.24955V5.41435C6.85743 5.16885 6.93445 4.95678 7.01898 4.83661C7.10342 4.71639 7.16058 4.70066 7.19747 4.70066ZM14.8148 4.70066H17.3992C17.4361 4.70066 17.4933 4.71644 17.5778 4.83661C17.6623 4.95678 17.7393 5.16885 17.7393 5.41435V7.24955C17.7393 7.49503 17.6623 7.70707 17.5778 7.82729C17.4933 7.94746 17.4361 7.96321 17.3992 7.96321H14.8148C14.7779 7.96321 14.7208 7.94744 14.6363 7.82729C14.5518 7.70707 14.4747 7.49503 14.4747 7.24955V5.41435C14.4747 5.16885 14.5518 4.95678 14.6363 4.83661C14.7208 4.71639 14.7779 4.70066 14.8148 4.70066ZM2.27512 9.05923H3.21881C3.29171 9.07434 3.36693 9.07434 3.43983 9.05923H21.1739C21.2468 9.07434 21.322 9.07434 21.3949 9.05923H22.3216C22.813 9.05923 23.1802 9.42313 23.1802 9.88334V12.0414L1.41648 12.1179V9.88334C1.41648 9.42313 1.78375 9.05923 2.27512 9.05923ZM23.1802 13.1289V15.5844H3.04877H1.41648V13.2054L23.1802 13.1289ZM1.41648 16.6719H2.50468V17.7594H1.41648V16.6719ZM22.092 16.6719H23.1802V17.7594H22.092V16.6719Z"
                    stroke="white"
                    strokeWidth="0.4"
                    mask="url(#path-1-outside-1)"
                  />
                </svg>

                <p>2 Dorm</p>
              </div>
              <div className="item">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4924 1L1.5 18.9924"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.4473 1.0072H19.4852V6.04508"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.53788 18.9924H1.5V13.9546"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4924 19.0004L1.5 1.008"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4852 13.9546V18.9924H14.4473"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.5 6.04588V1.008H6.53788"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>74,31 m²</p>
              </div>
            </FlexList>
          </Box>
        </Grid>
      </SectionDevelopment>
      <SectionMap>
        <Grid>
          <Map />
          <FormHaveInterest />
        </Grid>
      </SectionMap>
    </Layout>
  );
}

export default Apartment;