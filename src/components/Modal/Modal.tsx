import { ModalContainer } from "./styles/Modal.styles";
import ReactDom from "react-dom";
import { Box } from "@mui/material";
import { InnerModal } from "./styles/Modal";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import RecipeInstruction from "../CookingInstructions/RecipeInstruction";
import SearchInputModal from "../Search/Search";
import ModalCardModal from "../ModalCard/ModalCard";
import NutritionalInfo from "../NutritionalInfo/NutritionalInfo";

function ModalPortal() {
  const { isModalOpen, toggleModal } = useContext(AppContext);
  if (!isModalOpen.openModal) return null;
  return ReactDom.createPortal(
    <ModalContainer>
      <InnerModal>
        <Box sx={{ position: "absolute", right: "2%", top: "2%" }}>
          <CancelRoundedIcon
            onClick={() => toggleModal("closeModal")}
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
        </Box>
        {isModalOpen.openModal &&
          isModalOpen.componentOnModal === "searchModal" && (
            <SearchInputModal />
          )}
        {isModalOpen.openModal &&
          isModalOpen.componentOnModal === "recipeInstruction" && (
            <ModalCardModal>
              <RecipeInstruction />
            </ModalCardModal>
          )}
        {isModalOpen.openModal &&
          isModalOpen.componentOnModal === "nutritionalInfo" && (
            <ModalCardModal>
              <NutritionalInfo />
            </ModalCardModal>
          )}
      </InnerModal>
    </ModalContainer>,
    document.getElementById("portal")!
  );
}

export default ModalPortal;
