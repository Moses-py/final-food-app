import {
  RecipeInstructionChild,
  RecipeInstructionChildItemImage,
  RecipeInstructionChildList,
  RecipeInstructionChildListItem,
  RecipeInstructionContainer,
} from "./styles/RecipeInstruction";
import { Box, Typography } from "@mui/material";
const RecipeInstruction = () => {
  return (
    <RecipeInstructionContainer>
      <RecipeInstructionChild>
        <Box>
          <RecipeInstructionChildItemImage
            src="/assets/explore_page_images/Ellipse 12 (1).png"
            alt="Cooking Instruction Image"
          />
        </Box>
        <Box>
          <Typography
            variant="h4"
            component="h4"
            sx={{ margin: "1.5rem 0", fontWeight: "bold" }}
          >
            Cooking Instructions
          </Typography>
          <RecipeInstructionChildList>
            <RecipeInstructionChildListItem>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </RecipeInstructionChildListItem>
            <RecipeInstructionChildListItem>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                labore fuga minus dolorum aspernatur at.
              </Typography>
            </RecipeInstructionChildListItem>
            <RecipeInstructionChildListItem>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                error provident dignissimos beatae laboriosam illum sint sequi
                est nobis, possimus nostrum iste.
              </Typography>
            </RecipeInstructionChildListItem>
            <RecipeInstructionChildListItem>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </Typography>
            </RecipeInstructionChildListItem>
            <RecipeInstructionChildListItem>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum tempore exercitationem labore.
              </Typography>
            </RecipeInstructionChildListItem>
            <RecipeInstructionChildListItem>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet.
              </Typography>
            </RecipeInstructionChildListItem>
            <RecipeInstructionChildListItem>
              <Typography variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis explicabo architecto et voluptatibus placeat suscipit
                tempora nesciunt in dolores perferendis, magni consequuntur vel
                eligendi laboriosam temporibus nisi quis, corrupti provident.
              </Typography>
            </RecipeInstructionChildListItem>
          </RecipeInstructionChildList>
        </Box>
      </RecipeInstructionChild>
    </RecipeInstructionContainer>
  );
};

export default RecipeInstruction;
