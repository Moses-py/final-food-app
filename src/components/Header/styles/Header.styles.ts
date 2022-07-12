import { Box as MuiBox, styled } from "@mui/material";

export const HeaderContainer = styled(MuiBox)(({ theme }) => {
    return {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4% 1%",
    }
})
 
export const SearchFieldContainer = styled(MuiBox)(({ theme }) => { 
    return {
        padding: theme.spacing(),
    }
})