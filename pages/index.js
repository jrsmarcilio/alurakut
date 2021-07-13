import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { Box, Container, Title, SubTitle, Headers } from "../components/styled";

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <SideMenu />

        <Headers>
          <Box width="680px" height="200px" style={{ marginTop: 25 }}>
            <Title>Bem-vindo(a), Marcílio</Title>
            <SubTitle>
              <strong>Sorte de hoje:</strong> O melhor profeta do futuro é o
              passado
            </SubTitle>
            <span></span>
          </Box>
          <Box width="680px" height="200px" style={{ marginTop: 25 }} />
        </Headers>

        <div>
          <Box width="380px" height="343px" style={{ marginTop: 25 }} />
          <Box width="380px" height="343px" style={{ marginTop: 25 }} />
        </div>
      </Container>
    </>
  );
};

export default Home;
