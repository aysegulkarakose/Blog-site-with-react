import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPostPage({ blogData, setBlogData }) {
    const [baslik, setBaslik] = useState("");
    const [yazar, setYazar] = useState("");
    const [ozet, setOzet] = useState("");
    const [detay, setDetay] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const yeniYazi = {
            id: blogData.length + 1,
            baslik,
            yazar,
            ozet,
            detay
        };

        setBlogData([...blogData, yeniYazi]);
        setBaslik("");
        setYazar("");
        setOzet("");
        setDetay("");
        navigate("/homepage");
    };
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            backgroundColor: "#e0f7fa",
            minHeight: "100vh"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "30px",
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                color: "#00796b"
            }}>
                <h2 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    color: "#00796b",
                    textAlign: "center"
                }}>Yeni Yazı Ekle</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                    <input style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ccc" }} type="text" placeholder="Baslik" value={baslik} onChange={(e) => setBaslik(e.target.value)} required />
                    <input style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ccc" }} type="text" placeholder="Yazar" value={yazar} onChange={(e) => setYazar(e.target.value)} required />
                    <input style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ccc" }} type="text" placeholder="Ozet" value={ozet} onChange={(e) => setOzet(e.target.value)} required />
                    <input style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ccc" }} type="text" placeholder="Detay" value={detay} onChange={(e) => setDetay(e.target.value)} required />
                    <div style={{ marginTop: "10px" }}>
                        <button style={{
                            cursor: "pointer",
                            borderRadius: "8px",
                            backgroundColor: "#00796b",
                            border: "none",
                            color: "white",
                            fontSize: "15px",
                            padding: "8px 15px",
                        }} type="submit">ekle</button></div>
                </form>
            </div></div>
    );
}
export default AddPostPage;