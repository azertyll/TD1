import './assets/styles/app.css'
import { ThemeProvider } from "flowbite-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { defaultTheme } from '@themes/themes'

import Home from '@views/Home';
import CustomNavbar from './components/ui/Navbar/CustomNavbar';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <CustomNavbar />
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </ThemeProvider>
  )
}

export default App
