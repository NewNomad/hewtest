import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'

export const PayDetail = () =>{
    return (
        <Paper sx={{ margin:5, padding:10 }}>

            <Grid container>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h3" textAlign="center" color='primary'>入金処理を行っています…</Typography>
                </Grid>

                <Grid item xs={7}>
                    <Box sx={{width: '100%', height: 400, padding: 10, backgroundColor: 'primary.main', opacity: 0.6}}>
                        [ここに画像]
                    </Box>
                </Grid>

                <Grid item xs={5} textAlign="center">
                    <ShowPayDetail />
                </Grid>

            </Grid>

        </Paper>
    )
}