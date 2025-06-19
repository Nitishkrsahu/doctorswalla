import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"

import { Lab } from "./pages/Lab"
import { Medicine } from "./pages/Medicine"
import { Neurology } from "./pages/Neurology"
import { Cardiology } from "./pages/Cardiology"
function App(){
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/lab" element={<Lab />}/>
                <Route path="/medicine" element={<Medicine />}/>
                <Route path="/neurology" element={<Neurology />}/>
                <Route path="/cardiology" element={<Cardiology />}/>
                <Route path="*" element={<div>Page Not Found</div>}></Route>
            </Routes>
        </Router>
        </>
    )
}

export default App
