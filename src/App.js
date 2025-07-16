import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import AddPostPage from "./pages/addpostpage";
import Header from "./components/header";
import Footer from "./components/footer";
import AdminLoginPage from "./pages/adminLoginPage";
import AdminPage from "./pages/adminPage";
import { useState } from "react";
import BlogData from "./data/blogData";
import AdminEditPage from "./pages/adminEditPage";

function App() {

  const [blogData, setBlogData] = useState(BlogData);

  return (
    <Router>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#e0f7fa"
      }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage blogData={blogData} />} />
            <Route path="/yeniYazı" element={<AddPostPage blogData={blogData} setBlogData={setBlogData} />} />
            <Route path="/adminLoginPage" element={<AdminLoginPage />} />
            <Route path="/adminPage" element={<AdminPage blogData={blogData} setBlogData={setBlogData} />} />
            <Route path="/adminEditPage/:id" element={<AdminEditPage blogData={blogData} setBlogData={setBlogData} />} />
            <Route path="/homePage" element={<HomePage blogData={blogData} />} />
          </Routes>
        </div>
        <Footer style={{
          padding: "10px",
          textAlign: "center",
          color: "white",
          backgroundColor: "#00796b"
        }} />
      </div >
    </Router>
  );
}
export default App;