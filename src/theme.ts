import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // TODO:テーマ設定を行います

    palette: {

        primary: {
            // orange
            // main: "#f69c2f",
            main: "#E45E00",
            light: "#FFA00",
            dark: "#E06030"
        },
        secondary: {
            // black
            // main: "#3879c3",
            main: "#555",
            light: "#666",
            dark: "#444"

        },

        background: {
            // default: "#eee",
            // default: "#333",
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