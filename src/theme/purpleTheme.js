import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#1D9AA7'
        },
        error: {
            main: red.A200
        }
    }
})