import { useState } from "react";

function AdminBlogCard(id, baslik, yazar, ozet, detay, onDelete) {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div
            style={{
                borderRadius: "20px",
                padding: "20px",
                border: "1px solid #ddd",
                marginBottom: "24px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.43)",
                background: "#ffffff",
                transition: "transform 0.2s",
                color: '#0e012b'
            }}>

            <h2 style={{ fontSize: "30px", textAlign: "center" }}>{baslik}</h2>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Yazar:{yazar}</p>
            <p style={{ fontSize: "15px", fontStyle: "italic" }}>{ozet}</p>

            <div style={{ fontSize: "20px", display: "flex", justifyContent: "flex-end" }}>
                <button style={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    background: "#06024f",
                    color: "white",
                    fontSize: "13px",
                    padding: "4px"
                }}
                    onClick={() => setShowDetail(!showDetail)}>
                    {showDetail ? "detayı gizle" : "detayı göster"}</button>
                    
            </div> {showDetail && (
                <div style={{ marginTop: "10px", }}>
                    <p style={{ fontSize: "15px" }}>{detay}</p>    </div>
            )}
        </div>
    );
}
export default AdminBlogCard;