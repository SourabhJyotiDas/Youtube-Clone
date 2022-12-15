import HomePage from "./Components/HomePage";
import TopNavbar from "./Components/TopNavbar";
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BottomBar from "./Components/BottomBar";
import SideNavbar from "./Components/SideNavbar";




function App() {



  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <div className="sm:flex">
          <SideNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <BottomBar />

      </BrowserRouter>
    </>
  )
}

export default App;
