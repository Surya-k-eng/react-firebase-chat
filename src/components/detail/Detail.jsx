import { auth } from "../../lib/firebase";
import "./detail.css";

const Detail = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Signed out successfully");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        {/* User info removed */}
      </div>
      <div className="info">
        {/* Other options removed */}
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
