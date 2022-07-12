import { Box, Typography, Button } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const LandingText = () => {
  // const preventDefault = (event: React.SyntheticEvent) =>
  //   event.preventDefault();

  return (
    <Box>
      <Typography
        variant="body1"
        component="h4"
        sx={{
          fontWeight: "300",
          fontSize: "0.75rem",
          letterSpacing: ".5rem",
          marginY: "1.5rem",
          color: "#BBBBBB",
        }}
      >
        Welcome to EasyBite
      </Typography>
      <Typography variant="h2" component="h2">
        Feel the Authentic Origin of Food
      </Typography>
      <Box
        sx={{
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
          marginY: "2rem",
        }}
        onClick={(e) => e.preventDefault}
      >
        <Link
          href="#"
          sx={{ textDecoration: "none", color: "#757575", marginRight: "1rem" }}
        >
          Home
        </Link>
        <Link
          href="#"
          sx={{ textDecoration: "none", color: "#757575", marginRight: "1rem" }}
          color="inherit"
        >
          Explore
        </Link>
        <Link
          href="#"
          sx={{ textDecoration: "none", color: "#757575", marginRight: "1rem" }}
          variant="body2"
        >
          Order
        </Link>
        <Link
          href="#"
          sx={{ textDecoration: "none", color: "#757575", marginRight: "1rem" }}
          variant="body2"
        >
          Take Away
        </Link>
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{
            background: "#E73636",
            border: "none",
            marginRight: ".5rem",
            color: "#fff",
            fontSize: ".6rem",
            width: "15rem",
            height: "3rem",
          }}
        >
          Order Food
        </Button>
        <Button
          variant="outlined"
          sx={{
            background: "transparent",
            marginLeft: ".5rem",
            borderColor: "#fff",
            color: "#fff",
            fontSize: ".6rem",
            width: "15rem",
            height: "3rem",
          }}
        >
          Take Away
        </Button>
      </Box>
      <Box sx={{ marginY: "10%" }}>
        <FacebookOutlinedIcon sx={{ fontSize: "1.2rem", marginX: "1rem" }} />
        <TwitterIcon sx={{ fontSize: "1.2rem", marginX: "1rem" }} />
        <GitHubIcon sx={{ fontSize: "1.2rem", marginX: "1rem" }} />
        <InstagramIcon sx={{ fontSize: "1.2rem", marginX: "1rem" }} />
      </Box>
    </Box>
  );
};

export default LandingText;
