import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // TODO:テーマ設定を行います

    palette: {
        primary: {
            // orange
            main: "#f69c2f",

        },
        secondary: {
            // black
            // main: "#3879c3",
            main:"#335"
        },

        background: {
            default: "#e7ebf0",
            // paper: "#fff"
        },
        text: {
            // primary: "#fff",
            // secondary: "#444"
        }
    }
});

export default theme;