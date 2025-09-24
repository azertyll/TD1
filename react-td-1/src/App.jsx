import './App.css'
import Td1 from './views/Td1'
import Td3 from './views/Td3'
import Td4 from './views/Td4'
import Td6 from './views/Td6'
import Td7 from './views/Td7'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation';

function App() {

    return (
        <>
            <Navigation />
            <main>
                <Router>
                    <Routes>
                        <Route path="/" element={<Td1 />} />
                        <Route path='/td3' element={<Td3 />} />
                        <Route path='/td4' element={<Td4 />} />
                        <Route path='/td6' element={<Td6 />} />
                        <Route path='/td7' element={<Td7 />} />
                    </Routes>
                </Router>
            </main>
        </>

    )
}

export default App
