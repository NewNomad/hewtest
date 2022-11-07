import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // TODO:テーマ設定を行います

    palette: {
        primary: {
            main: "#f69c2f"

        },
        secondary: {
            // main: "#3879c3",
            main:"#333"
        },

        background: {
            default: "#ecf2f3",
            paper: "#fff"
        },
        text: {
            primary: "#444",
            secondary: "#444"
        }
    }
});

export default theme;