import { Link, } from 'react-router-dom';
import { Box, Grid } from '@mui/material/';


const Register = () => {

    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center', }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <p></p>
                <p></p>
                <Grid  xs={12}><Link to='/login'>Ir a Login</Link></Grid>
            </Grid>
        </Box>
    )
}

export default Register