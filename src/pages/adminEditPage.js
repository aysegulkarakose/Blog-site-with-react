import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AdminEditPage({ blogData, setBlogData }) {

    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogData.find((p) => p.id.toString() === id);
    const [baslik, setBaslik] = useState("");
    const [yazar, setYazar] = useState("");
    const [ozet, setOzet] = useState("");
    const [detay, setDetay] = useState("");

    useEffect(() => {
        if (post) {
            setBaslik(post.baslik);
            setYazar(post.yazar);
            setOzet(post.ozet);
            setDetay(post.detay);
        }
    }, [post]);

    if (!post) return <p>Post bulunamadı</p>;

    const handleUpdate = () => {
        const updatedPost = { id: post.id, baslik, yazar, ozet };
        setBlogData(prev => prev.map(p => (p.id === updatedPost.id ? updatedPost : p))
        );
        navigate("/adminPage");
    };
    if (!post) return <p>Post bulunamadı</p>;
    const handleDelete = () => {
        setBlogData(prev => prev.filter(p => p.id !== post.id));
        navigate("/adminPage");
    }
    return (
        <div >
            <div style={{
                backgroundColor: "#e0f7fa",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "100vh",
                alignItems: "center",
                color: "#00796b",
            }}>
                <h2 style={{ textAlign: "center" }}>Düzenle</h2>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <label style={{ width: "80px", fontWeight: "bold" }}>Başlık:</label>
                    <input style={{ padding: "10px", margin: "20px", borderRadius: "10px", width: "500px", border: "1px solid #ccc" }} value={baslik} onChange={(e) => setBaslik(e.target.value)} /><br />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <label style={{ width: "80px", fontWeight: "bold" }}>Yazar:</label>
                    <input style={{ padding: "10px", margin: "20px", borderRadius: "10px", width: "500px", border: "1px solid #ccc" }} value={yazar} onChange={(e) => setYazar(e.target.value)} /><br />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <label style={{ width: "80px", fontWeight: "bold" }}>Özet:</label>
                    <input style={{ padding: "10px", margin: "20px", borderRadius: "10px", width: "500px", border: "1px solid #ccc" }} value={ozet} onChange={(e) => setOzet(e.target.value)} /><br />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <label style={{ width: "80px", fontWeight: "bold" }}>Detay:</label>
                    <input style={{ padding: "10px", margin: "20px", borderRadius: "10px", width: "500px", border: "1px solid #ccc" }} type="text" placeholder="Detay" value={detay} onChange={(e) => setDetay(e.target.value)} required />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <button style={{
                        cursor: "pointer",
                        borderRadius: "8px",
                        backgroundColor: "#00796b",
                        border: "none",
                        color: "white",
                        fontSize: "15px",
                        margin: "10px",
                        padding: "8px 15px",
                        maxWidth: "fit-content"
                    }} onClick={handleUpdate}>Kaydet</button>
                    <button style={{
                        cursor: "pointer",
                        borderRadius: "8px",
                        backgroundColor: "red",
                        border: "none",
                        color: "white",
                        fontSize: "15px",
                        margin: "10px",
                        padding: "8px 15px",
                        maxWidth: "fit-content"
                    }} onClick={handleDelete}>Sil</button>
                </div></div></div>
    );
}
export default AdminEditPage;