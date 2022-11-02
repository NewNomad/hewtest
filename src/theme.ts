import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // TODO:テーマ設定を行います

    palette: {
        primary: {
            main: "#333"
        },
        secondary: {
            main: "#fff"
        },
        background: {
            default: "#333"
        }
    }
});

export default theme;