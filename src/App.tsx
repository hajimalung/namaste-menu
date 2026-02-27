import './App.css'
import { AppBar, createTheme, ThemeProvider, Toolbar } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RestaurantList from './components/RestaurantList';

function App() {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  // const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Foodie
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <RestaurantList />
    </ThemeProvider>
    </>
  )
}

export default App
