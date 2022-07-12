import Header from "../components/Header/Header";
import { ExploreFoodsContainer } from "./styles/ExploreFoods";
import {
  ExploreFoodsBackground,
  FoodTabsContainer,
  FoodTabsItem,
  FoodTabsList,
} from "./styles/styles";
import { Container, Box, Typography } from "@mui/material";
import FoodImageSmall from "../components/Main/FoodImageSmall";
import FoodCarousel from "../components/FoodCarousel/FoodCarousel";

const ExploreFoods = () => {
  return (
    <ExploreFoodsContainer>
      <ExploreFoodsBackground>
        <Container>
          <Header />
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "Poppins",
                lineHeight: "39px",
                letterSpacing: "0.2rem",
                fontWeight: "200",
                fontSize: "48px",
                margin: "1rem 0.5rem",
              }}
            >
              Explore
            </Typography>
          </Box>
          <FoodTabsContainer>
            <Box>
              <FoodTabsList>
                <FoodTabsItem>All</FoodTabsItem>
                <FoodTabsItem>Food</FoodTabsItem>
                <FoodTabsItem>Recipe</FoodTabsItem>
                <FoodTabsItem>Drinks</FoodTabsItem>
              </FoodTabsList>
            </Box>
            <Box>
              <img
                style={{ margin: "0 1rem" }}
                src="/assets/Ellipse 5 (1).png"
                alt="ellipse 5"
              />
              <img
                style={{ margin: "0 1rem" }}
                src="/assets/Ellipse 6.png"
                alt="ellipse 6"
              />
              <img
                style={{ margin: "0 1rem" }}
                src="/assets/Ellipse 7.png"
                alt="ellipse 7"
              />
              <img
                style={{ margin: "0 1rem" }}
                src="/assets/Ellipse 8.png"
                alt="ellipse 8"
              />
            </Box>
          </FoodTabsContainer>
        </Container>
        <FoodCarousel />
      </ExploreFoodsBackground>
    </ExploreFoodsContainer>
  );
};

export default ExploreFoods;
