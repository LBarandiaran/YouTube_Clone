// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
// import VideoPage from "./pages/VideoPage/VideoPage";



// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Searchbar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<YouTubePage />} />        
        <Route path="/api/auth/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/searchresults" element={<SearchResultsPage />} /> */}
        <Route path="/videopage/:videoID" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
