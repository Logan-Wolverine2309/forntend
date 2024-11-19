import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './component/Theme/DarkTheme';
import CustomerRoute from './component/Routers/CustomerRoute';


function App() {
  
  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    
     <CustomerRoute/>

</ThemeProvider>
  );
}

export default App;
