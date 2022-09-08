import { Link } from 'react-router-dom';
import { Button, Box, Grid } from '@mui/material/';

const Login = ({ handledLogged, successLogin, logged }) => {

    return (
        <div>
            {logged && <Button>Bienvenido User</Button>}
            <Button onClick={handledLogged} variant="outlined" color={successLogin}>{logged ? "Log Out" : "Clic para Login"}</Button>
            <Box sx={{ flexGrow: 1, textAlign: 'center', }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid xs={12}><Link to='/register'>Ir a Registro</Link></Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Login