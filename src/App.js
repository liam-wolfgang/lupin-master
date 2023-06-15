import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import Topbar from './scenes/global/TopBar';
import Home from './scenes/home';
import Sidebar from './scenes/global/Sidebar';
// import Logtime from './scenes/Logtime';
// import Clients from './scenes/clients';
// import Wolfgangers from './scenes/wolfgangers';
// import Reports from './scenes/reports';
// import Admin from './scenes/admin';
// import Calendar from './scenes/calendar'


function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value = {colorMode }>
      <ThemeProvider theme={theme}>
        <CssBaseline>
            <div className="app">
              <Sidebar/>
              <main className='content'>
                <Topbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    {/* <Route path="/Logtime" element={<logtime/>} /> */}
                    {/* <Route path="/Clients" element={<clients/>} /> */}
                    {/* <Route path="/Reports" element={<reports/>} /> */}
                    {/* <Route path="/Wolfgangers" element={<wolfgangers/>} /> */}
                    {/* <Route path="/Admin" element={<admin/>} /> */}
                    {/* <Route path="/Calendar" element={<calendar/>} /> */}
                </Routes>
              </main>
            </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
