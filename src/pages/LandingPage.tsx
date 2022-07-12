import { Container, Box } from "@mui/material/";
import { LandingContainer } from "./styles/Landing.styles";
import Header from "../components/Header/Header";
import MainLanding from "../components/Main/MainLanding";
import FoodImageSmall from "../components/Main/FoodImageSmall";

const LandingPage = () => {
  return (
    <LandingContainer>
      <Container maxWidth="lg">
        <Header />
        <MainLanding />
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FoodImageSmall />
      </Box>
    </LandingContainer>
  );
};

export default LandingPage;
