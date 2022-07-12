import {Box as MuiBox, styled} from "@mui/material";

export const MainContainer = styled(MuiBox)(({theme}) => {
    return {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        position: "relative",
    }
})