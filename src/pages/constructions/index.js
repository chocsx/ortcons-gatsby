import React from "react"
import { navigate } from "@reach/router"
import Layout from "../../components/layout"
import { SectionDevelopmtens } from "../../styles-pages/constructions-styled"
import { Container, Title, FlexList, Button } from "../../theme/styled"
import DevelopmentBox from "../../components/development/DevelopmentBox"
import img from "../../assets/developments/temp/Fachada_Noturna.jpg"

import Progress from "../../components/progress"

const dataMock = {
  title: "Reserva do tabuleiro",
  subtitle: "Apartamentos",
  description: `Localizado de frente para a Serra do Tabuleiro em Palhoça/SC, é o
                encontro perfeito do estilo de vida urbano com a natureza,
                garantindo a qualidade de vida que você merece.`,
  image: img,
  apartments: [
    {
      title: "Apartamento Final 1 (Unidade 401)",
      unity: "Unidade com 42,48m² (40,48m² de apto + 2,00m² de Sacada)",
      desc:
        "2 Dormitórios, 1 banheiro, sala, cozinha e lavanderia e sacada com Churrasqueira",
      image: "",
    },
    {
      title: "Apartamento Final 1 (Demais unidades)",
      unity: "Unidade com 59,28m² (52,28m² de apto + 7,00m² de Sacada)",
      desc:
        "2 Dormitórios, 1 banheiro, sala, cozinha e lavanderia e sacada com Churrasqueira",
      image: "",
    },
    {
      title: "Apartamento Final 2",
      unity: "Unidade com 59,50m² (55,01m² de apto + 4,49m² de Sacada)",
      desc:
        "2 Dormitórios, 1 banheiro, sala, cozinha e lavanderia e sacada com Churrasqueira",
      image: "",
    },
    {
      title: "Apartamento Final 3",
      unity: "Unidade com 50,13m² (44,04m² de apto + 6,09m² de Sacada))",
      desc:
        "1 Dormitório, 1 banheiro, sala, cozinha, lavanderia e sacada com Churrasqueira",
      image: "",
    },
    {
      title: "Apartamento Final 4",
      unity: "Unidade com 74,31m² (66,32m² de apto + 7,99m² de Sacada))",
      desc:
        "2 Dormitórios (1 suíte), 2 banheiros, sala, cozinha, lavanderia e sacada com Churrasqueira",
      image: "",
    },
    {
      title: "Apartamento Final 5",
      unity: "Unidade com 71,95m² (65,84m² de apto + 6,11m² de Sacada)",
      desc:
        "2 Dormitórios (1 suíte), 2 banheiros, sala, cozinha, lavanderia e sacada com Churrasqueira",
      image: "",
    },
  ],
}

const Constructions = () => {
  return (
    <Layout>
      <SectionDevelopmtens>
        <Container>
          <Title>Empreendimentos</Title>
          <FlexList flow="column">
            <DevelopmentBox {...dataMock} />
          </FlexList>
          <Title>Progresso da Obra</Title>
          <Progress label="Fundação" porcentage="100" />
          <Progress label="Estrutura" porcentage="100" />
          <Progress label="Instalações " porcentage="10" />
          <Progress label="Acabamento Interno" porcentage="0" />
          <Progress label="Acabamento Externo" porcentage="0" />
          <Progress label="Infraestrutura " porcentage="0" />

          <Button
            onClick={() => navigate("/progress")}
            className="btn btn-icon"
            background="#F6A500"
            color="#FFF"
            width="300px"
            fontSize=".85em"
          >
            Confira as Fotos
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                fill="white"
              />
            </svg>
          </Button>
        </Container>
      </SectionDevelopmtens>
    </Layout>
  )
}
export default Constructions
