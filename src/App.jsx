import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "views/Home";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nft" element={<Home />} />
                <Route path="/how-it-works" element={<Home />} />
                <Route path="/road-map" element={<Home />} />
                <Route path="/blog" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
