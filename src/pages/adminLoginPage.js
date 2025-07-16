import AdminLogin from "../components/adminLogin";
function AdminLoginPage() {
    return (
        <div style={{
            display: "flex",
            backgroundColor: "#e0f7fa",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "100vh",
            alignContent: "center",
            color: "#00796b",
            textAlign: "center"
        }}>
            <h1 style={{ color: "#00796b", fontSize: "25px" }}>Admin giriş</h1>
            <AdminLogin />
        </div>
    );
}
export default AdminLoginPage;