import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import TareasFormik from "./components/TareasFormik";
import Login from "./components/Login"
import Register from "./components/Register"
import NotFound from "./components/NotFound"
import { Box, Grid} from '@mui/material/';
import { useState } from 'react';

function App() {

  const [logged, setLogged] = useState(false)
  const [successLogin, setSuccessLogin] = useState("error")
  const handledLogged = () => {
    setLogged(!logged)
    setSuccessLogin( () => logged ? "error" : "success")
  }

  return (
    <div>
      <Router>
        <div>
          <Box sx={{ flexGrow: 1, textAlign: 'center', }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
              <Grid xs={4}><Link to='/'>Home </Link></Grid>
              <Grid xs={4}><Link to='/login'> Login </Link></Grid>
              <Grid xs={4}><Link to='/register'> Registro</Link></Grid>
            </Grid>
          </Box>
          <main>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Routes>
              <Route path='/' element={logged ? <TareasFormik/> : <Navigate to="/login" replace={true} /> } />
              <Route path='/login' element={ <Login handledLogged={handledLogged} successLogin={successLogin} logged={logged}/> } />
              <Route path='/register' element={ <Register /> } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Grid>
            
          </main>
        </div>
      </Router>
    </div>

  );
}

export default App;
