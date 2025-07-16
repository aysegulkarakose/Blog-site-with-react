import { useState } from "react";

function BlogCard({ baslik, yazar, ozet, detay }) {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div
            style={{
                borderRadius: "20px",
                padding: "20px",
                border: "1px solid #ddd",
                marginBottom: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                transition: "transform 0.2s",
                color: '#0e012b'
            }}>

            <h2 style={{ fontSize: "30px", color: "#006064", textAlign: "center" }}>{baslik}</h2>
            <p style={{ fontSize: "18px", color: '#006064', fontWeight: "bold" }}>Yazar:{yazar}</p>
            <p style={{ fontSize: "15px", color: '#0e012b', fontStyle: "italic" }}>{ozet}</p>

            <div style={{ fontSize: "20px", display: "flex", justifyContent: "flex-end" }}>
                <button style={{
                    cursor: "pointer",
                    borderRadius: "8px",
                    backgroundColor: "#00796b",
                    border: "none",
                    color: "white",
                    fontSize: "15px",
                    padding: "8px 15px"
                }} onClick={() => setShowDetail(!showDetail)}>
                    {showDetail ? "detayı gizle" : "detayı göster"}</button>
            </div> {showDetail && (
                <div style={{ marginTop: "10px", }}>
                    <p style={{ fontSize: "15px" }}>{detay}</p>    </div>
            )}
        </div>
    );
}
export default BlogCard;