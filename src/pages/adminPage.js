import { useState } from "react";
import { Link } from "react-router-dom";

function AdminPage({ blogData }) {
    const [expandedPostIds, setExpandedPostIds] = useState([]);

    const handleToggleDetail = (postId) => {
        setExpandedPostIds((prev) =>
            prev.includes(postId)
                ? prev.filter((id) => id !== postId)
                : [...prev, postId]
        );
    };

    return (
        <div style={{ padding: "40px", backgroundColor: "#e0f7fa", fontSize: "10px", color: "#00796b" }}>
            <h1>Hoşgeldiniz</h1>

            <div style={{ fontSize: "15px", display: "flex", justifyContent: "flex-end", padding: "15px" }}>
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
            </div>

            {blogData.map((post) => {
                const isExpanded = expandedPostIds.includes(post.id);

                return (
                    <div key={post.id} style={{
                        borderRadius: "20px",
                        padding: "20px",
                        border: "1px solid #ddd",
                        marginBottom: "24px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#ffffff",
                        transition: "transform 0.2s",
                        color: '#0e012b'
                    }}>
                        <h3 style={{ fontSize: "30px", color: "#006064", textAlign: "center" }}>{post.baslik}</h3>
                        <p style={{ fontSize: "18px", color: '#006064', fontWeight: "bold" }}>{post.yazar}</p>
                        <p style={{ fontSize: "15px", color: '#0e012b', fontStyle: "italic" }}>{post.ozet}</p>

                        <div style={{ fontSize: "15px", display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                            <button
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "8px",
                                    backgroundColor: "#00796b",
                                    border: "none",
                                    color: "white",
                                    fontSize: "14px",
                                    padding: "6px 12px",
                                    marginRight: "10px"
                                }}
                                onClick={() => handleToggleDetail(post.id)}
                            >
                                {isExpanded ? "Detayı Gizle" : "Detayı Göster"}
                            </button>
                            <Link to={`/adminEditPage/${post.id}`}>
                                <button style={{
                                    cursor: "pointer",
                                    borderRadius: "8px",
                                    backgroundColor: "#00796b",
                                    border: "none",
                                    color: "white",
                                    fontSize: "15px",
                                    padding: "8px 15px"
                                }}>Düzenle</button>
                            </Link>
                        </div>

                        {isExpanded && (
                            <div style={{ marginTop: "10px" }}>
                                <p style={{ fontSize: "15px" }}>{post.detay}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default AdminPage;