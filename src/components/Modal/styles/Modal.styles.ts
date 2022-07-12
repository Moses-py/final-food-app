import {Box as MuiBox, styled} from "@mui/material";

export const ModalContainer = styled(MuiBox)(({theme}) => {
    return {
        position: "fixed",
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(36, 36, 36, 0.71)",
        backdropFilter: "blur(10px)"
    }
})