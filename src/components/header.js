import { Link } from "react-router-dom";

function Header() {
    return (
        <nav style={{
            backgroundColor: "#00796b",
            paddingRight: "15px",
            paddingLeft: "15px",
            paddingBottom: "5px",
            paddingTop: "5px",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <Link style={{ color: "white" }} to="/">Anasayfa</Link>
            <Link style={{ color: "white" }} to="/yeniYazı">Yeni Yazı </Link>
            <Link style={{ color: "white" }} to="/adminLoginPage">Admin Giriş</Link>
        </nav>
    )
}
export default Header;