import { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminData from "../data/adminData";

function AdminLogin() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (userName.trim() === adminData.kullaniciAdi && password.trim() === adminData.sifre) {
            navigate("/adminPage");
        }
        else {
            alert("giriş başarısız");
        }
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            backgroundColor: "#e0f7fa",
            minHeight: "100vh"
        }}>
            <input style={{
                margin: "20px",
                borderRadius: "8px",
                maxWidth: "fit-content",
                padding: "8px 15px",
                border: "1px solid #ccc"
            }}
                type="text" placeholder="Kullanıcı adı" value={userName} onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input style={{
                margin: "20px",
                borderRadius: "8px",
                maxWidth: "fit-content",
                padding: "8px 15px",
                border: "1px solid #ccc"
            }}
                type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px"
            }}>
                <button style={{
                    cursor: "pointer",
                    borderRadius: "8px",
                    backgroundColor: "#00796b",
                    border: "none",
                    maxWidth: "fit-content",
                    color: "white",
                    fontSize: "15px",
                    padding: "8px 15px"
                }} onClick={() => handleLogin()}>Giriş</button>
                <button style={{
                    cursor: "pointer",
                    borderRadius: "8px",
                    backgroundColor: "red",
                    border: "none",
                    color: "white",
                    fontSize: "15px",
                    maxWidth: "fit-content",
                    padding: "8px 15px"
                }} >Şifremi unuttum</button>
            </div></div>
    );
}
export default AdminLogin;