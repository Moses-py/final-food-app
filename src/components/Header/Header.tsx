import { HeaderContainer, SearchFieldContainer } from "./styles/Header.styles";
import { Typography, Box } from "@mui/material";
import { SearchInput } from "./styles/HeaderStyles";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { toggleModal } = useContext(AppContext);
  return (
    <HeaderContainer>
      <Box>
        <Typography
          variant="subtitle2"
          component="h4"
          sx={{
            fontFamily: "prata",
            color: "#BBBBBB",
            fontSize: "22px",
            lineHeight: "30px",
          }}
        >
          EasyBite
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            fontFamily: "Source Sans Pro",
            color: "#BBBBBB",
            fontSize: "8px",
            letterSpacing: "0.3rem",
          }}
        >
          Developed By Moses
        </Typography>
      </Box>
      <Box component="form">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <SearchInput onClick={() => toggleModal("searchModal")} type="button">
            Search Food...
          </SearchInput>
          <NotificationsActiveOutlinedIcon
            sx={{ marginX: "1rem", width: "18px", height: "18px" }}
          />
          <FeedbackOutlinedIcon
            sx={{ marginX: "1rem", width: "18px", height: "18px" }}
          />
        </Box>
      </Box>
    </HeaderContainer>
  );
};

export default Header;
