import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { darkTheme } from './Themes/DarkTheme';
import { Home } from './Components/HomePage/Home';
import { RestaurantDetails } from './Components/Restaurant/RestaurantDetails';
import { Cart } from './Components/Cart/Cart';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      <Cart/>
    </ThemeProvider>
  );
}

export default App;
