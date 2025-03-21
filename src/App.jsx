import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png'
import Galery from "./components/Galery"

import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #0a0a0a 4.16%, #04244F 48%, #0a2f5c 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  margin: 2rem;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  
  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
          {/* <Menu /> */}
        <MainContainer>
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galery 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
