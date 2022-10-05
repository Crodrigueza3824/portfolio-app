import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#263569'
        },
        secondary: {
            main: '#212221'
        },
        third:{
            main: '#3e4444'
        },
        error:{
            main: red.A200
        }
    }
})