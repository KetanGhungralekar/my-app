import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { darkTheme } from './Themes/DarkTheme';
import { Home } from './Components/HomePage/Home';
import { RestaurantDetails } from './Components/Restaurant/RestaurantDetails';
import { Cart } from './Components/Cart/Cart';
import { Profile } from './Components/Profile/Profile';
import { CustomerRouter } from './Routers/CustomerRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './Components/State/Authentication/Action';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token')
  const {auth} = useSelector(state=>state);
  useEffect(() => {
    dispatch(getUser(token))
  },[auth.token])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <CustomerRouter/>
    </ThemeProvider>
  );
}

export default App;
