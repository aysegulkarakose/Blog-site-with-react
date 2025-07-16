import BlogList from "../components/blogList";
import { Link } from "react-router-dom";

function HomePage({ blogData }) {
    return (
        <div style={{ padding: "40px", backgroundColor: "#e0f7fa", fontSize: "10px", color: "#00796b" }}>
            <h1>Hoşgeldiniz</h1>

            <div style={{ fontSize: "15px", display: "flex", justifyContent: "flex-end", padding: "15px", gap: "10px" }}>
                <Link to="/yeniYazı">
                    <button style={{
                        cursor: "pointer",
                        borderRadius: "8px",
                        backgroundColor: "#00796b",
                        border: "none",
                        color: "white",
                        fontSize: "15px",
                        padding: "8px 15px"
                    }}>yeni yazı ekle</button>
                </Link>

                <Link to="/adminLoginPage">
                    <button style={{
                        cursor: "pointer",
                        borderRadius: "8px",
                        backgroundColor: "#00796b",
                        border: "none",
                        color: "white",
                        fontSize: "15px",
                        padding: "8px 15px"
                    }}>admin giriş</button>
                </Link>
            </div>
            <BlogList blogData={blogData} />
        </div>
    );
}
export default HomePage;