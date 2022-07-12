import { Container, Box, Typography, Grid } from "@mui/material";
import Header from "../components/Header/Header";
import { FoodDetailsContainer } from "./styles/FoodDetails";
import { useContext } from "react";
import {
  BottomImageGroup,
  FoodDetailsImage,
  IngredientBox,
} from "./styles/styles";
import { AppContext } from "../context/AppContext";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const typographyStyles = {
  padding: "0.5rem",
  fontFamily: "Poppins",
  fontWeight: 300,
};
const FoodDetails = () => {
  const { isModalOpen, toggleModal } = useContext(AppContext);

  return (
    <FoodDetailsContainer>
      <Container>
        <Header />
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" component="h4" sx={typographyStyles}>
              Chicken Brew
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FoodDetailsImage
              src="/assets/details_page_images/Ellipse 12 (3).png"
              alt="chicken Brew"
            />
            <BottomImageGroup>
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
            </BottomImageGroup>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h4" component="h5" sx={typographyStyles}>
                Chicken Brew Recipe
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  ...typographyStyles,
                  lineHeight: "1.2rem",
                  letterSpacing: "0.1rem",
                  fontSmooth: "always",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos ab repellat necessitatibus animi, cum ea blanditiis?
                Reiciendis facere soluta officiis voluptate, vero neque iusto
                eius adipisci architecto consequatur tempora qui?
              </Typography>
              <IngredientBox
                onClick={() => toggleModal("recipeInstruction")}
                style={{ background: "red" }}
              >
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={typographyStyles}
                >
                  Cooking Instructions
                </Typography>
              </IngredientBox>
              <IngredientBox onClick={() => toggleModal("nutritionalInfo")}>
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={typographyStyles}
                >
                  Nutritional Information
                </Typography>
              </IngredientBox>
              <Typography variant="h6" component="h6" sx={typographyStyles}>
                Ingredients
              </Typography>
              <Box sx={{ ...typographyStyles }}>
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    6 Ounces Baked beans
                  </Typography>
                </IngredientBox>
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    2kg Beef strips
                  </Typography>
                </IngredientBox>
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    Lemon
                  </Typography>
                </IngredientBox>
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    16 gram Mozarella Cheese
                  </Typography>
                </IngredientBox>
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    Water
                  </Typography>
                </IngredientBox>
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    Sweet Corn
                  </Typography>
                </IngredientBox>
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    Grated fish fillet
                  </Typography>
                </IngredientBox>{" "}
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    Parmesian cheese
                  </Typography>
                </IngredientBox>{" "}
                <IngredientBox>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={typographyStyles}
                  >
                    Rice Grains
                  </Typography>
                </IngredientBox>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FoodDetailsContainer>
  );
};

export default FoodDetails;
